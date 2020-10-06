<script lang="ts">
  export let item: Elyby

  function updateUserAgent(event: InputEvent) {
    item.userAgent = (event.target as HTMLInputElement).value
  }
</script>

<sl-details summary="高级选项">
  <sl-input
    label="User Agent"
    value={item.userAgent}
    on:input={updateUserAgent}>
    <div slot="help-text">可选</div>
  </sl-input>
</sl-details>
