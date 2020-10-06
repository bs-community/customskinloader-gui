<script lang="ts">
  export let item: MojangAPI

  function updateApiRoot(event: InputEvent) {
    item.apiRoot = (event.target as HTMLInputElement).value
  }

  function updateSessionRoot(event: InputEvent) {
    item.sessionRoot = (event.target as HTMLInputElement).value
  }
</script>

<sl-details summary="高级选项">
  <sl-input label="API Root" value={item.apiRoot} on:input={updateApiRoot}>
    <div slot="help-text">可选，Yggdrasil API 的根（Root）地址</div>
  </sl-input>
  <sl-input
    label="Session Root"
    value={item.sessionRoot}
    on:input={updateSessionRoot}>
    <div slot="help-text">
      可选，Yggdrasil API 的会话服务器（Session Server）的地址
    </div>
  </sl-input>
</sl-details>
