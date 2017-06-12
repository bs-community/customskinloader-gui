import assign from 'lodash.assign'
import React from 'react'
import Toggle from 'material-ui/Toggle'
import TextField from 'material-ui/TextField'

import { JsonAPI } from '../../config-handler'

class JsonAPIForm extends React.Component<JsonAPI & { onChange (profile: JsonAPI) }, { advanced: boolean }> {
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
          floatingLabelText="皮肤站地址"
          style={{ width: '80%' }}
          onChange={(event, newValue) => {
            this.props.onChange(assign({}, this.props, { root: newValue }))
          }}
          value={this.props.root}
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

export default JsonAPIForm
