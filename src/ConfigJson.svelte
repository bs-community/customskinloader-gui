<script lang="ts">
  import hljs from 'highlight.js/lib/core'
  import { _ } from 'svelte-i18n'

  export let json: string

  $: code = hljs.highlight('json', json).value
  $: downloadLink = `data:application/json,${encodeURI(json)}`

  let copied = false

  async function copyConfig() {
    await navigator.clipboard.writeText(json)
    copied = true

    setTimeout(() => (copied = false), 2000)
  }
</script>

<sl-card>
  <pre><code class="hljs language-json">{@html code}</code></pre>

  <div slot="footer">
    <sl-button
      type="primary"
      download="CustomSkinLoader.json"
      href={downloadLink}
    >
      {$_('json.download')}
    </sl-button>
    <sl-button
      type="primary"
      disabled={copied}
      aria-disabled={copied}
      on:click={copyConfig}
    >
      {#if copied}
        {$_('json.copied')}
      {:else}
        {$_('json.copy')}
      {/if}
    </sl-button>
  </div>
</sl-card>

<style>
  sl-card {
    width: 43%;
  }
  sl-card::part(body) {
    padding: 0;
  }

  code {
    padding: var(--padding);
    font-size: 16px;
    font-family: Consolas, Monaco, 'Andale Mono', monospace;
  }

  sl-button:not(:last-child) {
    margin-right: var(--sl-spacing-x-small);
  }
</style>
