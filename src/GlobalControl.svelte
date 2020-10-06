<script lang="ts">
  import { onMount } from 'svelte'

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
</style>

<sl-card>
  <div>
    <div>
      <sl-button disabled type="primary">打开本地配置文件</sl-button>
    </div>
    <div>
      <sl-switch checked={darkMode} on:slChange={() => (darkMode = !darkMode)}>
        夜间模式
      </sl-switch>
    </div>
  </div>
</sl-card>
