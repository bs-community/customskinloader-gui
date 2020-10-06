<script lang="ts">
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
  on:input={updateRoot}>
  <div slot="help-text">皮肤站的根（Root）地址</div>
</sl-input>
<sl-details summary="高级选项">
  <sl-input
    label="User Agent"
    value={item.userAgent}
    on:input={updateUserAgent}>
    <div slot="help-text">可选</div>
  </sl-input>
</sl-details>
