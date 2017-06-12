import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'
import { RadioButtonGroup, RadioButton } from 'material-ui/RadioButton'

const radioButtonStyle = {
  marginTop: '5px'
}

interface SkinSiteDialogProps {
  dialogOpen: boolean
  onClose (): void
}

class SkinSiteDialog extends React.Component<SkinSiteDialogProps, null> {
  render () {
    return (
      <Dialog
        open={this.props.dialogOpen}
        actions={[
          <FlatButton
            primary={true}
            label="完成"
            onClick={() => this.props.onClose()}
          ></FlatButton>,
          <FlatButton
            primary={true}
            label="取消"
            onClick={() => this.props.onClose()}
          ></FlatButton>
        ]}
      >
        请选择 API：
        <RadioButtonGroup name="apiChoices">
          <RadioButton label="MojangAPI" value="MojangAPI" style={radioButtonStyle}></RadioButton>
          <RadioButton label="CustomSkinAPI" value="CustomSkinAPI" style={radioButtonStyle}></RadioButton>
          <RadioButton label="UniSkinAPI" value="UniSkinAPI" style={radioButtonStyle}></RadioButton>
          <RadioButton label="Legacy" value="Legacy" style={radioButtonStyle}></RadioButton>
          <RadioButton label="ElfSkinAPI" value="ElfSkinAPI" style={radioButtonStyle}></RadioButton>
          <RadioButton
            label="CustomSkinAPIPlus"
            value="CustomSkinAPIPlus"
            style={radioButtonStyle}
            disabled={true}
          ></RadioButton>
        </RadioButtonGroup>
      </Dialog>
    )
  }
}

export default SkinSiteDialog
