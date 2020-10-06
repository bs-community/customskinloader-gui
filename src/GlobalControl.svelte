<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte'
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
</script>

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
</style>

<sl-card>
  <div>
    <div>
      <FileInput on:input={({ detail }) => dispatch('acceptLocal', detail)} />
      <sl-button
        type="info"
        href="https://github.com/bs-community/customskinloader-gui"
        target="_blank">
        View on GitHub
      </sl-button>
    </div>
    <div>
      <sl-switch checked={darkMode} on:slChange={() => (darkMode = !darkMode)}>
        夜间模式
      </sl-switch>
    </div>
  </div>
</sl-card>
