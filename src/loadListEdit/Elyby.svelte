<script lang="ts">
  import { _ } from 'svelte-i18n'

  export let item: Elyby

  function updateUserAgent(event: InputEvent) {
    item.userAgent = (event.target as HTMLInputElement).value
  }
</script>

<sl-details summary={$_('advanced')}>
  <sl-input
    label="User Agent"
    value={item.userAgent}
    on:input={updateUserAgent}
  >
    <div slot="help-text">{$_('optional')}</div>
  </sl-input>
</sl-details>
