import { APIType, CustomSkinAPI } from './csl-config-types'

export const DEFAULT_PROFILE: CustomSkinAPI = {
  type: APIType.CustomSkinAPI,
  name: '',
  root: '',
  userAgent: ''
}

export const LATEST_CSL_VERSION = '14.6a'

export const TIP_TEXT_INTERVAL = 5

export const TIP_TEXT = [
  '无需打开已有配置文件，你也可以在这里从零开始新建一个 CSL 配置文件',
  '几乎所有的改动是即时生效的，这意味你不需要「保存」操作！'
]
