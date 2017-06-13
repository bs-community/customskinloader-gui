import assign from 'lodash.assign'
import React from 'react'
import Toggle from 'material-ui/Toggle'
import TextField from 'material-ui/TextField'

import { ElfSkin } from '../../csl-config-types'

class ElfSkinForm extends React.Component<ElfSkin & { onChange (profile: ElfSkin) }, { advanced: boolean }> {
  constructor() {
    super()
    this.state = {
      advanced: false
    }
  }

  render () {
    return (
      <div>
        <TextField
          floatingLabelText="名称"
          onChange={(event, newValue) => {
            this.props.onChange(assign({}, this.props, { name: newValue }))
          }}
          value={this.props.name}
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

export default ElfSkinForm
