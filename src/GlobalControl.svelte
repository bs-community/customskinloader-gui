<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte'
  import { _, locale } from 'svelte-i18n'
  import type { SlSelect } from '@shoelace-style/shoelace'
  import FileInput from './FileInput.svelte'

  const dispatch = createEventDispatcher()

  let lightCSS = document.createElement('link')
  let darkCSS = document.createElement('link')

  onMount(() => {
    lightCSS.rel = 'stylesheet'
    lightCSS.href =
      'https://cdn.jsdelivr.net/npm/highlight.js@10.2.1/styles/atom-one-light.css'

    darkCSS.rel = 'stylesheet'
    darkCSS.href =
      'https://cdn.jsdelivr.net/npm/highlight.js@10.2.1/styles/atom-one-dark.css'
  })

  let darkMode = false
  $: {
    if (darkMode) {
      document.body.classList.add('sl-theme-dark')
      document.body.style.backgroundColor = 'var(--sl-color-gray-10)'
      if (document.head.contains(lightCSS)) {
        document.head.removeChild(lightCSS)
      }
      document.head.appendChild(darkCSS)
    } else {
      document.body.classList.remove('sl-theme-dark')
      document.body.style.backgroundColor = 'white'
      if (document.head.contains(darkCSS)) {
        document.head.removeChild(darkCSS)
      }
      document.head.appendChild(lightCSS)
    }
  }

  onMount(() => {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      darkMode = true
    }
  })

  function handleLangChange(event: Event) {
    locale.set((event.target as SlSelect).value as string)
  }
</script>

<sl-card>
  <div>
    <div>
      <FileInput on:input={({ detail }) => dispatch('acceptLocal', detail)} />
      <sl-button
        type="info"
        href="https://github.com/bs-community/customskinloader-gui"
        target="_blank"
      >
        {$_('viewOnGithub')}
      </sl-button>
    </div>
    <div class="right-controls">
      <sl-select pill value={$locale} on:slChange={handleLangChange}>
        <sl-menu-item value="zh-CN">中文（简体）</sl-menu-item>
        <sl-menu-item value="en-US">English</sl-menu-item>
      </sl-select>
      <sl-switch checked={darkMode} on:slChange={() => (darkMode = !darkMode)}>
        {$_('darkMode')}
      </sl-switch>
    </div>
  </div>
</sl-card>

<style>
  sl-card {
    width: calc(100vw - 80px);
    margin-bottom: var(--sl-spacing-small);
  }
  sl-card::part(footer) {
    display: none;
  }
  sl-card > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  sl-button:not(:first-child) {
    margin-left: var(--sl-spacing-x-small);
  }

  .right-controls {
    display: flex;
    align-items: center;
  }
  .right-controls > sl-select {
    margin-right: 30px;
  }
</style>
