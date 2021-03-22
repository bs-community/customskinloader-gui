import hljs from 'highlight.js/lib/core'
import json from 'highlight.js/lib/languages/json'
import { overrideItemIdKeyNameBeforeInitialisingDndZones } from 'svelte-dnd-action'
import { addMessages, init, getLocaleFromNavigator } from 'svelte-i18n'
import App from './App.svelte'
import langZhCN from './lang/zh-CN.json'
import langEnUs from './lang/en-US.json'

hljs.registerLanguage('json', json)

// stop logging of "svelte-dnd-action"
console.debug = () => {}

overrideItemIdKeyNameBeforeInitialisingDndZones('name')

addMessages('zh-CN', langZhCN)
addMessages('en-US', langEnUs)

init({
  fallbackLocale: 'en',
  initialLocale: getLocaleFromNavigator(),
})

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept()
  import.meta.hot.dispose(() => {
    app.$destroy()
  })
}
