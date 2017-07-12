import React from 'react'
import { shallow } from 'enzyme'
import Toggle from 'material-ui/Toggle'
import TextField from 'material-ui/TextField'
import CSLOptions from '../src/components/CSLOptions'

describe('Render CSLOptions component', () => {
  const wrapper = shallow(
    <CSLOptions
      enable={false}
      enableSkull={false}
      enableDynamicSkull={false}
      enableCacheAutoClean={false}
      enableLocalProfileCache={false}
      enableTransparentSkin={false}
      enableUpdateSkull={false}
      ignoreHttpsCertificate={false}
      cacheExpiry={10}
      onChange={(prop, value) => false}
    />
  )

  it('render label of "enable" option', () => {
    expect(wrapper.childAt(0).prop('label')).toBe('启用 CustomSkinLoader')
  })
  it('render label of "enableSkull" option', () => {
    expect(wrapper.childAt(1).prop('label')).toBe('启用头颅加载')
  })
  it('render label of "enableDynamicSkull" option', () => {
    expect(wrapper.childAt(2).prop('label')).toBe('启用动态头颅')
  })
  it('render label of "enableTransparentSkin" option', () => {
    expect(wrapper.childAt(3).prop('label')).toBe('启用透明皮肤')
  })
  it('render label of "ignoreHttpsCertificate" option', () => {
    expect(wrapper.childAt(4).prop('label')).toBe('忽略全局 HTTPS 证书')
  })
  it('render label of "enableUpdateSkull" option', () => {
    expect(wrapper.childAt(5).prop('label')).toBe('开启头颅更新')
  })
  it('render label of "enableLocalProfileCache" option', () => {
    expect(wrapper.childAt(6).prop('label')).toBe('开启本地皮肤信息缓存')
  })
  it('render label of "enableCacheAutoClean" option', () => {
    expect(wrapper.childAt(7).prop('label')).toBe('启动游戏时清理所有缓存')
  })
  it('render floating label text of "cacheExpiry" option', () => {
    expect(wrapper.childAt(8).prop('floatingLabelText')).toBe('缓存有效期（秒）')
  })

  it('render hover text of "enable" option', () => {
    expect(wrapper.childAt(0).prop('title'))
      .toBe('此项可设置是否启用 CustomSkinLoader，默认开启。')
  })
  it('render hover text of "enableSkull" option', () => {
    expect(wrapper.childAt(1).prop('title'))
      .toBe('此项可设置是否启用头颅加载，默认开启。\n若未启用 CustomSkinLoader，头颅加载也不会启用。')
  })
  it('render hover text of "enableDynamicSkull" option', () => {
    expect(wrapper.childAt(2).prop('title'))
      .toBe('此项可设置是否启用动态头颅，默认开启\n若未启用头颅加载，动态头颅也不会启用。')
  })
  it('render hover text of "enableTransparentSkin" option', () => {
    expect(wrapper.childAt(3).prop('title'))
      .toBe('此项可设置是否启用透明皮肤，默认开启。')
  })
  it('render hover text of "ignoreHttpsCertificate" option', () => {
    expect(wrapper.childAt(4).prop('title'))
    .toBe('此项设置是否忽略全局 HTTPS 证书，默认关闭。')
  })
  it('render hover text of "enableUpdateSkull" option', () => {
    expect(wrapper.childAt(5).prop('title'))
      .toBe('此项可设置是否开启头颅更新，默认关闭。\n易引发卡顿，不建议开启。')
  })
  it('render hover text of "enableLocalProfileCache" option', () => {
    expect(wrapper.childAt(6).prop('title')).toBe(
      '此项可设置是否开启本地皮肤信息缓存，默认关闭。\n' +
      '开启后可在无网络时继续使用缓存的皮肤，不建议在网络状态稳定（例如能一直接入网络的台式机）时仍然开启。'
    )
  })
  it('render hover text of "enableCacheAutoClean" option', () => {
    expect(wrapper.childAt(7).prop('title'))
      .toBe('此项可设置是否在启动时清理所有缓存，默认关闭。\n若开启了本地皮肤信息缓存，则强制不清理。')
  })
  it('render error text of "cacheExpiry" option', () => {
    expect(wrapper.childAt(8).prop('errorText')).toBe('')
    wrapper.setProps({ cacheExpiry: undefined })
    expect(wrapper.childAt(8).prop('errorText')).toBe('不能为空，默认值是 10')
  })

  it('change value of "enable" option', () => {
    wrapper.setProps({ enable: true })
    expect(wrapper.childAt(0).prop('checked')).toBe(true)
  })
  it('change value of "enableSkull" option', () => {
    wrapper.setProps({ enableSkull: true })
    expect(wrapper.childAt(1).prop('checked')).toBe(true)
  })
  it('change value of "enableDynamicSkull" option', () => {
    wrapper.setProps({ enableDynamicSkull: true })
    expect(wrapper.childAt(2).prop('checked')).toBe(true)
  })
  it('change value of "enableTransparentSkin" option', () => {
    wrapper.setProps({ enableTransparentSkin: true })
    expect(wrapper.childAt(3).prop('checked')).toBe(true)
  })
  it('change value of "ignoreHttpsCertificate" option', () => {
    wrapper.setProps({ ignoreHttpsCertificate: true })
    expect(wrapper.childAt(4).prop('checked')).toBe(true)
  })
  it('change value of "enableUpdateSkull" option', () => {
    wrapper.setProps({ enableUpdateSkull: true })
    expect(wrapper.childAt(5).prop('checked')).toBe(true)
  })
  it('change value of "enableLocalProfileCache', () => {
    wrapper.setProps({ enableLocalProfileCache: true })
    expect(wrapper.childAt(6).prop('checked')).toBe(true)
  })
  it('change value of "enableCacheAutoClean" option', () => {
    wrapper.setProps({ enableCacheAutoClean: true })
    expect(wrapper.childAt(7).prop('checked')).toBe(true)
  })
  it('change value of "cacheExpiry" option', () => {
    wrapper.setProps({ cacheExpiry: 20 })
    expect(wrapper.childAt(8).prop('value')).toBe(20)
  })
})
