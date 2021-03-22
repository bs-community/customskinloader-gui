<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { _ } from 'svelte-i18n'
  import type { SlDialog } from '@shoelace-style/shoelace'

  const dispatch = createEventDispatcher()
  let input: HTMLInputElement
  let dialog: SlDialog
  let message = ''

  function handleFileInput() {
    const file = input.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.readAsText(file)
      reader.addEventListener('loadend', () => {
        try {
          dispatch('input', JSON.parse(reader.result as string))
        } catch {
          message = $_('fileInput.invalid')
          dialog.show()
        }
      })
      reader.addEventListener('error', () => {
        message = $_('fileInput.failed')
        dialog.show()
      })
    }
  }

  function openFilePicker() {
    input.click()
  }
</script>

<sl-button type="primary" on:click={openFilePicker}>
  {$_('openLocal')}
</sl-button>
<input type="file" on:input={handleFileInput} bind:this={input} />

<sl-dialog bind:this={dialog}>
  {message}
  <sl-button slot="footer" type="primary" on:click={() => dialog.hide()}>
    {$_('ok')}
  </sl-button>
</sl-dialog>

<style>
  input {
    display: none;
  }
</style>
