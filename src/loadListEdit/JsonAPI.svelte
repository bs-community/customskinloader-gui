<script lang="ts">
  import { _ } from 'svelte-i18n'

  export let item: CustomSkinAPI | UniSkinAPI | GlitchlessAPI

  function updateRoot(event: InputEvent) {
    item.root = (event.target as HTMLInputElement).value
  }

  function updateUserAgent(event: InputEvent) {
    item.userAgent = (event.target as HTMLInputElement).value
  }
</script>

<sl-input
  label="API Root"
  required
  type="url"
  value={item.root}
  on:input={updateRoot}
>
  <div slot="help-text">{$_('jsonApi.root')}</div>
</sl-input>
<sl-details summary={$_('advanced')}>
  <sl-input
    label="User Agent"
    value={item.userAgent}
    on:input={updateUserAgent}
  >
    <div slot="help-text">{$_('optional')}</div>
  </sl-input>
</sl-details>
