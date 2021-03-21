<script>
  import { createEventDispatcher } from 'svelte'
  import { flip } from 'svelte/animate'
  import { dndzone } from 'svelte-dnd-action'

  const flipDurationMs = 300
  const dispatch = createEventDispatcher()

  export let items = []

  function editItem(index) {
    dispatch('edit', index)
  }

  function removeItem(index) {
    dispatch('remove', index)
  }
</script>

<sl-menu
  use:dndzone={{ items, flipDurationMs, dropTargetStyle: {} }}
  on:consider={(e) => (items = e.detail.items)}
  on:finalize={(e) => (items = e.detail.items)}
>
  {#each items as item, i (item.name)}
    <sl-menu-item on:click={() => editItem(i)}>
      {item.name}
      <span slot="suffix">
        <sl-icon name="pencil" on:click={() => editItem(i)} />
        <sl-icon name="trash" on:click={() => removeItem(i)} />
      </span>
    </sl-menu-item>
  {/each}
</sl-menu>

<style>
  sl-menu {
    border: 1px solid var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
  }
  sl-menu-item {
    min-width: 29.7%;
  }
  sl-menu-item [slot='suffix'] {
    display: flex;
    align-items: center;
  }
  sl-menu-item sl-icon:not(:last-child) {
    margin-right: var(--sl-spacing-small);
  }
</style>
