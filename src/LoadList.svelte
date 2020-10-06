<script lang="ts">
  import HelpText from './HelpText.svelte'
  import DragDropList from './DragDropList.svelte'
  import LoadListItemEditor from './LoadListItemEditor.svelte'

  export let items: LoadListItem[] = []
  let editing = -1

  function switchType(event: Event) {
    const type = (event.target as HTMLInputElement)
      .value as LoadListItem['type']

    const { name } = items[editing]
    switch (type) {
      case 'MojangAPI':
        items[editing] = { name, type: 'MojangAPI' }
        break
      case 'CustomSkinAPI':
        items[editing] = { name, type: 'CustomSkinAPI', root: '' }
        break
      case 'UniSkinAPI':
        items[editing] = { name, type: 'UniSkinAPI', root: '' }
        break
      case 'GlitchlessAPI':
        items[editing] = { name, type: 'GlitchlessAPI', root: '' }
        break
      case 'Elyby':
        items[editing] = { name, type: 'Elyby' }
        break
      case 'Legacy':
        items[editing] = { name, type: 'Legacy', skin: '' }
        break
    }
  }

  function addItem() {
    const item: CustomSkinAPI = { name: '', type: 'CustomSkinAPI', root: '' }
    const i = items.length
    items.push(item)
    editing = i
  }

  function editItem({ detail }: { detail: number }) {
    if (editing === -1) {
      editing = detail
    }
  }

  function removeItem({ detail }: { detail: number }) {
    console.log(detail)
    if (editing === detail) {
      editing = -1
    }
    items = items.filter((_, i) => i !== detail)
  }

  function updateName(event: InputEvent) {
    const name = (event.target as HTMLInputElement).value
    if (items.find((item) => item.name === name)) {
      event.preventDefault()
      return
    }
    items[editing].name = name
  }
</script>

<style>
  #drag-tip {
    margin: var(--sl-spacing-x-small);
  }

  #type-radios {
    margin: var(--sl-spacing-x-small) 0;
  }

  #type-radios sl-radio {
    width: 40%;
    margin: var(--sl-spacing-xx-small) 0;
  }
</style>

<DragDropList bind:items on:edit={editItem} on:remove={removeItem} />

<div id="drag-tip">
  <HelpText>可以通过拖拽列表项目来调整顺序。</HelpText>
</div>

{#if editing === -1}
  <sl-button type="primary" on:click={addItem}>添加</sl-button>
{:else}
  <div id="item-editor">
    <div id="type-radios">
      <sl-radio
        name="type"
        value="MojangAPI"
        checked={items[editing].type === 'MojangAPI'}
        on:slChange={switchType}>
        MojangAPI
      </sl-radio>
      <sl-radio
        name="type"
        value="CustomSkinAPI"
        checked={items[editing].type === 'CustomSkinAPI'}
        on:slChange={switchType}>
        CustomSkinAPI
      </sl-radio>
      <sl-radio
        name="type"
        value="UniSkinAPI"
        checked={items[editing].type === 'UniSkinAPI'}
        on:slChange={switchType}>
        UniSkinAPI
      </sl-radio>
      <sl-radio
        name="type"
        value="GlitchlessAPI"
        checked={items[editing].type === 'GlitchlessAPI'}
        on:slChange={switchType}>
        GlitchlessAPI
      </sl-radio>
      <sl-radio
        name="type"
        value="Elyby"
        checked={items[editing].type === 'Elyby'}
        on:slChange={switchType}>
        Elyby
      </sl-radio>
      <sl-radio
        name="type"
        value="Legacy"
        checked={items[editing].type === 'Legacy'}
        on:slChange={switchType}>
        传统加载方式
      </sl-radio>
    </div>
    <sl-input
      label="名称"
      required
      value={items[editing].name}
      on:input={updateName} />
    <LoadListItemEditor bind:item={items[editing]} />
    <sl-button type="primary" on:click={() => (editing = -1)}>完成</sl-button>
  </div>
{/if}
