<script lang="ts">
  import { _ } from 'svelte-i18n'

  export let item: MojangAPI

  function updateApiRoot(event: InputEvent) {
    item.apiRoot = (event.target as HTMLInputElement).value
  }

  function updateSessionRoot(event: InputEvent) {
    item.sessionRoot = (event.target as HTMLInputElement).value
  }
</script>

<sl-details summary={$_('advanced')}>
  <sl-input label="API Root" value={item.apiRoot} on:input={updateApiRoot}>
    <div slot="help-text">{$_('mojang.apiRoot')}</div>
  </sl-input>
  <sl-input
    label="Session Root"
    value={item.sessionRoot}
    on:input={updateSessionRoot}
  >
    <div slot="help-text">{$_('mojang.sessionRoot')}</div>
  </sl-input>
</sl-details>
