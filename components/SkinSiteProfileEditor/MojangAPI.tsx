import React from 'react'
import TextField from 'material-ui/TextField'

import { MojangAPI } from '../../config-handler'

class MojangAPIForm extends React.Component<MojangAPI & { onChange (profile: MojangAPI) }, null> {
  render () {
    return (
      <div>
        <TextField
          floatingLabelText="名称"
          onChange={(event, newValue) => {
            this.props.onChange({ type: 'MojangAPI', name: newValue })
          }}
          value={this.props.name}
        ></TextField>
      </div>
    )
  }
}

export default MojangAPIForm
