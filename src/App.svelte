<script lang="ts">
  import { _ } from 'svelte-i18n'
  import type { SlSwitch } from '@shoelace-style/shoelace'
  import HelpText from './HelpText.svelte'
  import GlobalControl from './GlobalControl.svelte'
  import Switches from './Switches.svelte'
  import LoadList from './LoadList.svelte'
  import ConfigJson from './ConfigJson.svelte'

  let config: CSLConfig = {
    enable: true,
    enableSkull: true,
    enableDynamicSkull: true,
    enableTransparentSkin: true,
    ignoreHttpsCertificate: false,
    cacheExpiry: 30,
    enableUpdateSkull: false,
    enableLocalProfileCache: false,
    enableCacheAutoClean: false,
    forceLoadAllTextures: false,
    enableCape: true,
    threadPoolSize: 1,
    loadlist: [
      { name: 'Mojang', type: 'MojangAPI' },
      {
        name: 'LittleSkin',
        type: 'CustomSkinAPI',
        root: 'https://littleskin.cn/',
      },
    ],
  }

  function serializeConfig(config: CSLConfig): string {
    return JSON.stringify(
      config,
      (key, value) => {
        if (key === 'isDndShadowItem') {
          return
        }
        if (key === 'root' || key === 'skin') {
          return value
        }
        if (value === '') {
          return
        }

        return value
      },
      2
    )
  }

  function updateCacheExpiry(event: InputEvent) {
    config.cacheExpiry = Number.parseInt(
      (event.target as HTMLInputElement).value
    )
  }

  function updateThreadPoolSize(event: InputEvent) {
    config.threadPoolSize = Number.parseInt(
      (event.target as HTMLInputElement).value
    )
  }

  $: json = serializeConfig(config)

  async function acceptLocalConfig({ detail }: { detail: CSLConfig }) {
    Object.keys(config).forEach((key) => {
      const k = key as keyof CSLConfig
      const value = detail[k]
      if (typeof config[k] === 'boolean' && typeof value === 'boolean') {
        // This isn't an elegant way to update config,
        // however there seems a bug from "shoelace",
        // so this is a workaround.
        const el = document.querySelector<SlSwitch & Element>(
          `sl-switch[data-config-name=${k}]`
        )
        el!.checked = value
      } else {
        // @ts-ignore
        config[k] = value
      }
    })
  }
</script>

<GlobalControl on:acceptLocal={acceptLocalConfig} />

<main>
  <div id="basic-options">
    <Switches
      bind:enable={config.enable}
      bind:enableSkull={config.enableSkull}
      bind:enableDynamicSkull={config.enableDynamicSkull}
      bind:enableTransparentSkin={config.enableTransparentSkin}
      bind:ignoreHttpsCertificate={config.ignoreHttpsCertificate}
      bind:enableUpdateSkull={config.enableUpdateSkull}
      bind:enableLocalProfileCache={config.enableLocalProfileCache}
      bind:enableCacheAutoClean={config.enableCacheAutoClean}
      bind:forceLoadAllTextures={config.forceLoadAllTextures}
      bind:enableCape={config.enableCape}
    />

    <sl-input
      label={$_('cacheExpiry.label')}
      type="text"
      inputmode="numeric"
      value={config.cacheExpiry}
      on:slInput={updateCacheExpiry}
    >
      <span slot="suffix">{$_('cacheExpiry.suffix')}</span>
      <div slot="help-text">
        {$_('cacheExpiry.help')}
      </div>
    </sl-input>

    <label for="thread-pool-size">{$_('threadPoolSize.label')}</label>
    <sl-range
      id="thread-pool-size"
      value={config.threadPoolSize}
      min="1"
      max="16"
      on:slChange={updateThreadPoolSize}
    />
    <div class="tip">
      <HelpText>
        {$_('threadPoolSize.help')}
      </HelpText>
    </div>
  </div>

  <div id="load-list">
    <LoadList bind:items={config.loadlist} />
  </div>

  <ConfigJson {json} />
</main>

<style>
  main {
    display: flex;
    flex-direction: row;
  }

  #basic-options {
    width: 30%;
  }
  #basic-options > sl-input,
  #basic-options > label {
    margin-top: var(--sl-spacing-medium);
    width: 50%;
    font-family: var(--sl-font-sans);
    display: block;
  }
  #basic-options sl-input [slot='suffix'] {
    margin-right: var(--sl-input-spacing-medium);
  }
  #basic-options > sl-range {
    width: 50%;
  }
  #basic-options .tip {
    width: 50%;
  }

  #load-list {
    width: 30%;
    margin-right: 3%;
  }
</style>
