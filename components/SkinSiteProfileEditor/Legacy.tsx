import assign from 'lodash.assign'
import React from 'react'
import Toggle from 'material-ui/Toggle'
import Checkbox from 'material-ui/Checkbox'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

import { Legacy } from '../../config-handler'

class LegacyForm extends React.Component<Legacy & { onChange (profile: Legacy) }, { advanced: boolean }> {
  constructor() {
    super()
    this.state = { advanced: false }
  }

  render () {
    return (
      <div>
        <TextField
          floatingLabelText="皮肤站名称"
          style={{ width: '80%' }}
          onChange={(event, newValue) => {
            this.props.onChange(assign({}, this.props, { name: newValue }))
          }}
          value={this.props.name}
        ></TextField>
        <TextField
          floatingLabelText="皮肤获取地址"
          style={{ width: '80%' }}
          onChange={(event, newValue) => {
            this.props.onChange(assign({}, this.props, { skin: newValue }))
          }}
          value={this.props.skin}
        ></TextField>
        <TextField
          floatingLabelText="披风获取地址"
          style={{ width: '80%' }}
          onChange={(event, newValue) => {
            this.props.onChange(assign({}, this.props, { cape: newValue }))
          }}
          value={this.props.cape}
        ></TextField>
        <Toggle
          label="显示高级选项"
          style={{ marginTop: '20px' }}
          labelPosition="right"
          toggled={this.state.advanced}
          onToggle={(event, isChecked) => this.setState({ advanced: isChecked })}
        />
        <div style={{ display: this.state.advanced ? 'block' : 'none', marginTop: '10px' }}>
          <TextField
            floatingLabelText="鞘翅获取地址"
            style={{ width: '80%' }}
            onChange={(event, newValue) => {
              this.props.onChange(assign({}, this.props, { elytra: newValue }))
            }}
            value={this.props.elytra}
          ></TextField>
          <Checkbox
            label="检验材质文件是否有效"
            style={{ marginTop: '20px' }}
            checked={this.props.checkPNG}
            onCheck={(event, isChecked) => {
              this.props.onChange(assign({}, this.props, { checkPNG: isChecked }))
            }}
          ></Checkbox>
          <SelectField
            floatingLabelText="模型选择"
            value={this.props.model || 'default'}
            onChange={(event, index, value) => {
              this.props.onChange(assign({}, this.props, { model: value }))
            }}
          >
            <MenuItem value="default" primaryText="Steve" />
            <MenuItem value="slim" primaryText="Alex" />
          </SelectField>
          <TextField
            floatingLabelText="User Agent"
            style={{ width: '80%' }}
            onChange={(event, newValue) => {
              this.props.onChange(assign({}, this.props, { userAgent: newValue }))
            }}
            value={this.props.userAgent}
          ></TextField>
        </div>
      </div>
    )
  }
}

export default LegacyForm
