<script lang="ts">
  import Mojang from './loadListEdit/Mojang.svelte'
  import JsonAPI from './loadListEdit/JsonAPI.svelte'
  import Elyby from './loadListEdit/Elyby.svelte'
  import Legacy from './loadListEdit/Legacy.svelte'

  export let item: LoadListItem = {
    type: 'CustomSkinAPI',
    name: '',
    root: '',
  }
</script>

{#if item.type === 'MojangAPI'}
  <Mojang bind:item />
{:else if item.type === 'CustomSkinAPI' || item.type === 'UniSkinAPI' || item.type === 'GlitchlessAPI'}
  <JsonAPI bind:item />
{:else if item.type === 'Elyby'}
  <Elyby bind:item />
{:else}
  <Legacy bind:item />
{/if}
