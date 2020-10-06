import hljs from 'highlight.js/lib/core'
import json from 'highlight.js/lib/languages/json'
import { overrideItemIdKeyNameBeforeInitialisingDndZones } from 'svelte-dnd-action'
import './styles.css'
import App from './App.svelte'

hljs.registerLanguage('json', json)

// stop logging of "svelte-dnd-action"
console.debug = () => {}

overrideItemIdKeyNameBeforeInitialisingDndZones('name')

const app = new App({
  target: document.body,
})

export default app

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept()
  import.meta.hot.dispose(() => {
    app.$destroy()
  })
}
