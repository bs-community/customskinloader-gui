<script lang="ts">
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
  label="皮肤文件位置"
  required
  value={item.skin}
  on:input={updateSkin}
/>
<sl-input label="披风文件位置" value={item.cape} on:input={updateCape} />
<sl-input label="鞘翅文件位置" value={item.elytra} on:input={updateElytra} />
<sl-details summary="高级选项">
  <label for="">模型</label><br />
  <sl-radio
    name="model"
    value="auto"
    checked={item.model === 'auto'}
    on:slChange={updateModel}>自动识别</sl-radio
  >
  <sl-radio
    name="model"
    value="default"
    checked={item.model === 'default'}
    on:slChange={updateModel}>Steve 模型</sl-radio
  >
  <sl-radio
    name="model"
    value="slim"
    checked={item.model === 'slim'}
    on:slChange={updateModel}>Alex 模型</sl-radio
  >
  <sl-checkbox
    checked={item.checkPNG}
    on:slChange={() => (item.checkPNG = !item.checkPNG)}
  >
    检查材质文件是否为 PNG
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
