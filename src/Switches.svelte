<script lang="ts">
  import { _ } from 'svelte-i18n'
  import HelpText from './HelpText.svelte'

  export let enable = true
  export let enableSkull = true
  export let enableDynamicSkull = true
  export let enableTransparentSkin = true
  export let ignoreHttpsCertificate = false
  export let enableUpdateSkull = false
  export let enableLocalProfileCache = false
  export let enableCacheAutoClean = false
  export let forceLoadAllTextures = false
  export let enableCape = true
</script>

<div class="hover-tip">
  <HelpText>{$_('hoverTip')}</HelpText>
</div>

<div>
  <sl-switch
    data-config-name="enable"
    checked={enable}
    on:slChange={() => (enable = !enable)}
  >
    {$_('enableCSL')}
  </sl-switch>
</div>

<div>
  <sl-switch
    data-config-name="enableSkull"
    checked={enableSkull}
    on:slChange={() => (enableSkull = !enableSkull)}
  >
    {$_('enableSkull')}
  </sl-switch>
</div>

<div>
  <sl-switch
    data-config-name="enableDynamicSkull"
    checked={enableDynamicSkull}
    on:slChange={() => (enableDynamicSkull = !enableDynamicSkull)}
  >
    {$_('enableDynamicSkull')}
  </sl-switch>
</div>

<div>
  <sl-switch
    data-config-name="enableTransparentSkin"
    checked={enableTransparentSkin}
    on:slChange={() => (enableTransparentSkin = !enableTransparentSkin)}
  >
    {$_('enableTransparentSkin')}
  </sl-switch>
</div>

<div>
  <sl-switch
    data-config-name="ignoreHttpsCertificate"
    checked={ignoreHttpsCertificate}
    on:slChange={() => (ignoreHttpsCertificate = !ignoreHttpsCertificate)}
  >
    {$_('ignoreHttpsCertificate')}
  </sl-switch>
</div>

<div>
  <sl-switch
    data-config-name="enableUpdateSkull"
    title={$_('enableUpdateSkull.tip')}
    checked={enableUpdateSkull}
    on:slChange={() => (enableUpdateSkull = !enableUpdateSkull)}
  >
    {$_('enableUpdateSkull.label')}
  </sl-switch>
</div>

<div>
  <sl-switch
    data-config-name="enableLocalProfileCache"
    title={$_('enableLocalProfileCache.tip')}
    checked={enableLocalProfileCache}
    on:slChange={() => (enableLocalProfileCache = !enableLocalProfileCache)}
  >
    {$_('enableLocalProfileCache.label')}
  </sl-switch>
</div>

<div>
  <sl-switch
    data-config-name="enableCacheAutoClean"
    title={$_('enableCacheAutoClean.tip')}
    checked={enableCacheAutoClean}
    on:slChange={() => (enableCacheAutoClean = !enableCacheAutoClean)}
  >
    {$_('enableCacheAutoClean.label')}
  </sl-switch>
</div>

<div>
  <sl-switch
    data-config-name="forceLoadAllTextures"
    title={$_('forceLoadAllTextures.tip')}
    checked={forceLoadAllTextures}
    on:slChange={() => (forceLoadAllTextures = !forceLoadAllTextures)}
  >
    {$_('forceLoadAllTextures.label')}
  </sl-switch>
</div>

<div>
  <sl-switch
    data-config-name="enableCape"
    checked={enableCape}
    on:slChange={() => (enableCape = !enableCape)}
  >
    {$_('enableCape')}
  </sl-switch>
</div>

<style>
  div:not(:first-child) {
    margin-top: var(--sl-spacing-small);
  }
</style>
