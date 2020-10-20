declare module 'highlight.js/lib/core' {
  export * from 'highlight.js'
}

declare module 'svelte-dnd-action' {
  interface DndOptions<T = unknown> {
    items: T[]
    type?: string
    flipDurationMs?: number
    dragDisabled?: boolean
    dropFromOthersDisabled?: boolean
    dropTargetStyle?: Record<string, string>
    transformDraggedElement?: Function
  }

  export function dndzone(
    node: HTMLElement,
    options: DndOptions
  ): { update: Function; destroy: Function }

  export function overrideItemIdKeyNameBeforeInitialisingDndZones(key: string)
}

type CSLConfig = {
  enable: boolean
  enableSkull: boolean
  enableDynamicSkull: boolean
  enableTransparentSkin: boolean
  ignoreHttpsCertificate: boolean
  cacheExpiry: number
  enableUpdateSkull: boolean
  enableLocalProfileCache: boolean
  enableCacheAutoClean: boolean
  forceLoadAllTextures: boolean
  enableCape: boolean
  threadPoolSize: number
  loadlist: LoadListItem[]
}

type LoadListItem =
  | MojangAPI
  | CustomSkinAPI
  | UniSkinAPI
  | Legacy
  | Elyby
  | GlitchlessAPI
type MojangAPI = {
  type: 'MojangAPI'
  name: string
  apiRoot?: string
  sessionRoot?: string
}
type CustomSkinAPI = {
  type: 'CustomSkinAPI'
  name: string
  root: string
  userAgent?: string
}
type UniSkinAPI = {
  type: 'UniSkinAPI'
  name: string
  root: string
  userAgent?: string
}
type Legacy = {
  type: 'Legacy'
  name: string
  skin: string
  cape?: string
  elytra?: string
  model?: 'default' | 'slim' | 'auto'
  checkPNG?: boolean
}
type Elyby = {
  type: 'Elyby'
  name: string
  userAgent?: string
}
type GlitchlessAPI = {
  type: 'GlitchlessAPI'
  name: string
  root: string
  userAgent?: string
}
