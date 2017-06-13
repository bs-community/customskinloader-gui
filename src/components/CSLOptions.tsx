import React from 'react'
import Toggle from 'material-ui/Toggle'
import TextField from 'material-ui/TextField'

interface CSLOption {
  cacheExpiry: number
  enable: boolean
  enableCacheAutoClean: boolean
  enableDynamicSkull: boolean
  enableLocalProfileCache: boolean
  enableSkull: boolean
  enableTransparentSkin: boolean
  enableUpdateSkull: boolean
  ignoreHttpsCertificate: boolean
  onChange (property: string, value: boolean | number): void
  style?: Object
}

const tips = {
  enable: '此项可设置是否启用 CustomSkinLoader，默认开启。',
  enableCacheAutoClean: '此项可设置是否在启动时清理所有缓存，默认关闭。\n若开启了本地皮肤信息缓存，则强制不清理。',
  enableDynamicSkull: '此项可设置是否启用动态头颅，默认开启\n若未启用头颅加载，动态头颅也不会启用。',
  enableLocalProfileCache: '此项可设置是否开启本地皮肤信息缓存，默认关闭。\n开启后可在无网络时继续使用缓存的皮肤，不建议在网络状态稳定（例如能一直接入网络的台式机）时仍然开启。',
  enableSkull: '此项可设置是否启用头颅加载，默认开启。\n若未启用 CustomSkinLoader，头颅加载也不会启用。',
  enableTransparentSkin: '此项可设置是否启用透明皮肤，默认开启。',
  enableUpdateSkull: '此项可设置是否开启头颅更新，默认关闭。\n易引发卡顿，不建议开启。',
  ignoreHttpsCertificate: '此项设置是否忽略全局 HTTPS 证书，默认关闭。',
}

const toggleButtonStyle = {
  marginTop: '5px'
}

function CSLOptions (props: CSLOption) {
  return (
    <div style={props.style}>
      <Toggle
        label="启用 CustomSkinLoader"
        checked={props.enable}
        onToggle={(event, isInputChecked) => props.onChange('enable', isInputChecked)}
        title={tips.enable}
      />
      <Toggle
        label="启用头颅加载"
        checked={props.enableSkull}
        onToggle={(event, isInputChecked) => props.onChange('enableSkull', isInputChecked)}
        title={tips.enableSkull}
        style={toggleButtonStyle}
      />
      <Toggle
        label="启用动态头颅"
        checked={props.enableDynamicSkull}
        onToggle={(event, isInputChecked) => props.onChange('enableDynamicSkull', isInputChecked)}
        title={tips.enableDynamicSkull}
        style={toggleButtonStyle}
      />
      <Toggle
        label="启用透明皮肤"
        checked={props.enableTransparentSkin}
        onToggle={(event, isInputChecked) => props.onChange('enableTransparentSkin', isInputChecked)}
        title={tips.enableTransparentSkin}
        style={toggleButtonStyle}
      />
      <Toggle
        label="忽略全局 HTTPS 证书"
        checked={props.ignoreHttpsCertificate}
        onToggle={(event, isInputChecked) => props.onChange('ignoreHttpsCertificate', isInputChecked)}
        title={tips.ignoreHttpsCertificate}
        style={toggleButtonStyle}
      />
      <Toggle
        label="开启头颅更新"
        checked={props.enableUpdateSkull}
        onToggle={(event, isInputChecked) => props.onChange('enableUpdateSkull', isInputChecked)}
        title={tips.enableUpdateSkull}
        style={toggleButtonStyle}
      />
      <Toggle
        label="开启本地皮肤信息缓存"
        checked={props.enableLocalProfileCache}
        onToggle={(event, isInputChecked) => props.onChange('enableLocalProfileCache', isInputChecked)}
        title={tips.enableLocalProfileCache}
        style={toggleButtonStyle}
      />
      <Toggle
        label="启动游戏时清理所有缓存"
        checked={props.enableCacheAutoClean}
        onToggle={(event, isInputChecked) => props.onChange('enableCacheAutoClean', isInputChecked)}
        title={tips.enableCacheAutoClean}
        style={toggleButtonStyle}
      />
      <TextField
        floatingLabelText="缓存有效期（秒）"
        value={isNaN(props.cacheExpiry) || props.cacheExpiry === 0 ? '' : props.cacheExpiry}
        onChange={(event, newValue) => props.onChange('cacheExpiry', parseInt(newValue))}
        errorText={isNaN(props.cacheExpiry) ? '不能为空，默认值是 10' : ''}
      />
    </div>
  )
}

export default CSLOptions
