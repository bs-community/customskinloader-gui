<script lang="ts">
  import { _ } from 'svelte-i18n'

  export let item: Legacy

  function updateSkin(event: InputEvent) {
    item.skin = (event.target as HTMLInputElement).value
  }

  function updateCape(event: InputEvent) {
    item.cape = (event.target as HTMLInputElement).value
  }

  function updateElytra(event: InputEvent) {
    item.elytra = (event.target as HTMLInputElement).value
  }

  function updateModel(event: Event) {
    item.model = (event.target as HTMLInputElement).value as
      | 'default'
      | 'slim'
      | 'auto'
  }
</script>

<sl-input
  label={$_('legacyApi.skin')}
  required
  value={item.skin}
  on:input={updateSkin}
/>
<sl-input
  label={$_('legacyApi.cape')}
  value={item.cape}
  on:input={updateCape}
/>
<sl-input
  label={$_('legacyApi.elytra')}
  value={item.elytra}
  on:input={updateElytra}
/>
<sl-details summary={$_('advanced')}>
  <label for="">{$_('legacyApi.model')}</label><br />
  <sl-radio
    name="model"
    value="auto"
    checked={item.model === 'auto'}
    on:slChange={updateModel}
  >
    {$_('legacyApi.auto')}
  </sl-radio>
  <sl-radio
    name="model"
    value="default"
    checked={item.model === 'default'}
    on:slChange={updateModel}
  >
    {$_('legacyApi.steve')}
  </sl-radio>
  <sl-radio
    name="model"
    value="slim"
    checked={item.model === 'slim'}
    on:slChange={updateModel}
  >
    {$_('legacyApi.alex')}
  </sl-radio>
  <sl-checkbox
    checked={item.checkPNG}
    on:slChange={() => (item.checkPNG = !item.checkPNG)}
  >
    {$_('legacyApi.checkPNG')}
  </sl-checkbox>
</sl-details>

<style>
  sl-radio {
    width: 30%;
  }

  sl-checkbox {
    margin-top: var(--sl-spacing-small);
  }
</style>
