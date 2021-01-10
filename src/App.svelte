<script lang="ts">
  import type { Components } from '@shoelace-style/shoelace'
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
        root: 'https://littlesk.in/',
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
        const el = document.querySelector<Components.SlSwitch & Element>(
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
      label="缓存有效期"
      type="text"
      inputmode="numeric"
      value={config.cacheExpiry}
      on:slInput={updateCacheExpiry}>
      <span slot="suffix">秒</span>
      <div slot="help-text">
        不建议设置过小或过大。设置为 0 相当于关闭缓存。
      </div>
    </sl-input>

    <label for="thread-pool-size">加载皮肤和头颅的线程池大小</label>
    <sl-range
      id="thread-pool-size"
      value={config.threadPoolSize}
      min="1"
      max="16"
      on:slChange={updateThreadPoolSize}
    />
    <HelpText>
      游玩在线人数较多的服务器时，可以适当增大该项的值，但也请不要设置得太高。
    </HelpText>
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

  #load-list {
    width: 30%;
    margin-right: 3%;
  }
</style>
