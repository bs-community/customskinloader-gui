import assign from 'lodash.assign'
import React from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAddIcon from 'material-ui/svg-icons/content/add'
import ActionDoneIcon from 'material-ui/svg-icons/action/done'
import ContentClearIcon from 'material-ui/svg-icons/content/clear'

import MojangAPIForm from './MojangAPI'
import JsonAPIForm from './JsonAPI'
import LegacyForm from './Legacy'
import ElfSkinForm from './ElfSkinAPI'

import {
  CustomSkinAPI,
  CustomSkinAPIPlus,
  ElfSkin,
  JsonAPI,
  Legacy,
  MojangAPI,
  UniSkinAPI
} from '../../config-handler'

type SkinSiteProfile = MojangAPI
  | CustomSkinAPI
  | UniSkinAPI
  | Legacy
  | ElfSkin
  | CustomSkinAPIPlus

class SkinSiteEdit extends React.Component<{
  profile: SkinSiteProfile,
  onChange (profile: SkinSiteProfile),
  onSubmit (),
  onCancel (),
  isNewProfile: boolean
}, null> {
  renderApiForm () {
    switch (this.props.profile.type) {
      case 'MojangAPI':
        return (
          <MojangAPIForm
            type="MojangAPI"
            name={this.props.profile.name}
            onChange={profile => this.props.onChange(profile)}
          />
        )
      case 'CustomSkinAPI':
      case 'UniSkinAPI':
        return (
          <JsonAPIForm
            type={this.props.profile.type}
            name={this.props.profile.name}
            root={(this.props.profile as JsonAPI).root}
            userAgent={(this.props.profile as JsonAPI).userAgent}
            onChange={profile => this.props.onChange(profile)}
          />
        )
      case 'Legacy':
        return (
          <LegacyForm
            type={this.props.profile.type}
            name={this.props.profile.name}
            skin={(this.props.profile as Legacy).skin}
            cape={(this.props.profile as Legacy).cape}
            elytra={(this.props.profile as Legacy).elytra}
            model={(this.props.profile as Legacy).model}
            checkPNG={(this.props.profile as Legacy).checkPNG}
            userAgent={(this.props.profile as Legacy).userAgent}
            onChange={profile => this.props.onChange(profile)}
          />
        )
      case 'ElfSkin':
        return (
          <ElfSkinForm
            type={this.props.profile.type}
            name={this.props.profile.name}
            userAgent={(this.props.profile as ElfSkin).userAgent}
            onChange={profile => this.props.onChange(profile)}
          />
        )
      case 'CustomSkinAPIPlus':
      default:
        return <div />
    }
  }

  render () {
    return (
      <div>
        <SelectField
          floatingLabelText="API"
          value={this.props.profile.type}
          onChange={(event, index, value) => {
            this.props.onChange(assign({}, this.props.profile, { type: value }))
          }}
        >
          <MenuItem value="MojangAPI" primaryText="正版皮肤"></MenuItem>
          <MenuItem value="CustomSkinAPI" primaryText="CustomSkin API"></MenuItem>
          <MenuItem value="UniSkinAPI" primaryText="UniSkin API"></MenuItem>
          <MenuItem value="Legacy" primaryText="传统方式"></MenuItem>
          <MenuItem value="ElfSkin" primaryText="精灵换肤器"></MenuItem>
          <MenuItem value="CustomSkinAPIPlus" primaryText="高级 CustomSkin API" disabled={true}></MenuItem>
        </SelectField>
        {this.renderApiForm()}
        <div style={{ marginTop: '10px', marginLeft: '65%' }}>
          <FloatingActionButton
            mini={true}
            style={{ marginRight: '15px' }}
            onClick={() => this.props.onSubmit()}
          >
            {this.props.isNewProfile ? <ContentAddIcon /> : <ActionDoneIcon />}
          </FloatingActionButton>
          <FloatingActionButton
            mini={true}
            onClick={() => this.props.onCancel()}
          >
            <ContentClearIcon />
          </FloatingActionButton>
        </div>
      </div>
    )
  }
}

export default SkinSiteEdit
