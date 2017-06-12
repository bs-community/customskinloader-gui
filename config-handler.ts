export interface CSLConfig {
  cacheExpiry: number
  enable: boolean
  enableCacheAutoClean: boolean
  enableDynamicSkull: boolean
  enableLocalProfileCache: boolean
  enableSkull: boolean
  enableTransparentSkin: boolean
  enableUpdateSkull: boolean
  ignoreHttpsCertificate: boolean
  loadlist: Array<API>
  version: string
}

export interface API {
  name: string
  type: 'MojangAPI' | 'CustomSkinAPI' | 'UniSkinAPI' | 'Legacy' | 'CustomSkinAPIPlus' | 'ElfSkin'
}

// tslint:disable-next-line:no-empty-interface
export interface MojangAPI extends API { }

export interface CustomSkinAPI extends API {
  root: string
}

export interface UniSkinAPI extends API {
  root: string
}

export interface Legacy extends API {
  skin: string
  cape?: string
  elytra?: string
  model?: 'default' | 'slim'
  checkPNG?: boolean
}

export interface CustomSkinAPIPlus extends API {
  root: string
}

// tslint:disable-next-line:no-empty-interface
export interface ElfSkin extends API { }
