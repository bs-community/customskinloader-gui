<script lang="ts">
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

<style>
  div:not(:first-child) {
    margin-top: var(--sl-spacing-small);
  }
</style>

<div>
  <sl-switch checked={enable} on:slChange={() => (enable = !enable)}>
    启用 CustomSkinLoader
  </sl-switch>
</div>

<div>
  <sl-switch
    checked={enableSkull}
    on:slChange={() => (enableSkull = !enableSkull)}>
    启用头颅加载
  </sl-switch>
</div>

<div>
  <sl-switch
    checked={enableDynamicSkull}
    on:slChange={() => (enableDynamicSkull = !enableDynamicSkull)}>
    启用动态头颅
  </sl-switch>
</div>

<div>
  <sl-switch
    checked={enableTransparentSkin}
    on:slChange={() => (enableTransparentSkin = !enableTransparentSkin)}>
    启用透明皮肤
  </sl-switch>
</div>

<div>
  <sl-switch
    checked={ignoreHttpsCertificate}
    on:slChange={() => (ignoreHttpsCertificate = !ignoreHttpsCertificate)}>
    忽略全局 HTTPS 证书
  </sl-switch>
</div>

<div>
  <sl-switch
    title="易引发卡顿，不建议开启。"
    checked={enableUpdateSkull}
    on:slChange={() => (enableUpdateSkull = !enableUpdateSkull)}>
    开启头颅更新
  </sl-switch>
</div>

<div>
  <sl-switch
    title="开启后可在无网络时继续使用缓存的皮肤，不建议在网络状态稳定时仍然开启。"
    checked={enableLocalProfileCache}
    on:slChange={() => (enableLocalProfileCache = !enableLocalProfileCache)}>
    开启本地皮肤信息缓存
  </sl-switch>
</div>

<div>
  <sl-switch
    title="若开启了本地皮肤信息缓存，则强制不清理。"
    checked={enableCacheAutoClean}
    on:slChange={() => (enableCacheAutoClean = !enableCacheAutoClean)}>
    启动时清理所有缓存
  </sl-switch>
</div>

<div>
  <sl-switch
    title="不开启的默认逻辑是有任意皮肤站提供了任意材质就停止加载，不建议开启。"
    checked={forceLoadAllTextures}
    on:slChange={() => (forceLoadAllTextures = !forceLoadAllTextures)}>
    加载皮肤又加载披风后才停止加载
  </sl-switch>
</div>

<div>
  <sl-switch
    checked={enableCape}
    on:slChange={() => (enableCape = !enableCape)}>
    允许加载披风
  </sl-switch>
</div>
