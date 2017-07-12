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
  type: 'MojangAPI' | 'CustomSkinAPI' | 'UniSkinAPI' | 'Legacy' | 'CustomSkinAPIPlus'
}

export interface JsonAPI extends API {
  root: string
  userAgent?: string
}

// tslint:disable-next-line:no-empty-interface
export interface MojangAPI extends API { }

// tslint:disable-next-line:no-empty-interface
export interface CustomSkinAPI extends JsonAPI { }

// tslint:disable-next-line:no-empty-interface
export interface UniSkinAPI extends JsonAPI { }

export interface Legacy extends API {
  skin: string
  cape?: string
  elytra?: string
  model?: 'default' | 'slim'
  checkPNG?: boolean
  userAgent?: string
}

export interface CustomSkinAPIPlus extends API {
  root: string
}