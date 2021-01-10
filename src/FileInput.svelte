<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import type { Components } from '@shoelace-style/shoelace'

  const dispatch = createEventDispatcher()
  let input: HTMLInputElement
  let dialog: Components.SlDialog
  let message = ''

  function handleFileInput() {
    const file = input.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.readAsText(file)
      reader.addEventListener('loadend', () => {
        try {
          dispatch('input', JSON.parse(reader.result as string))
        } catch (_) {
          message = '不是有效的 JSON 文件，请重新选择'
          dialog.show()
        }
      })
      reader.addEventListener('error', () => {
        message = '读取失败'
        dialog.show()
      })
    }
  }

  function openFilePicker() {
    input.click()
  }
</script>

<sl-button type="primary" on:click={openFilePicker}>打开本地配置文件</sl-button>
<input type="file" on:input={handleFileInput} bind:this={input} />

<sl-dialog bind:this={dialog}>
  {message}
  <sl-button slot="footer" type="primary" on:click={() => dialog.hide()}>
    好
  </sl-button>
</sl-dialog>

<style>
  input {
    display: none;
  }
</style>
