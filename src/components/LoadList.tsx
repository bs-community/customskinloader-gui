import React from 'react'
import Subheader from 'material-ui/Subheader'
import { List, ListItem } from 'material-ui/List'
import IconButton from 'material-ui/IconButton'
import ContentClearIcon from 'material-ui/svg-icons/content/clear'

import SkinSiteEdit from './SkinSiteProfileEditor/SkinSiteEdit'

interface LoadListProps {
  names: string[]
  onDeleteItem (index: number)
  onEditItem (index: number)
}

class LoadList extends React.Component<LoadListProps, { dialogOpen: boolean }> {
  constructor() {
    super()
    this.state = {
      dialogOpen: false
    }
  }

  render () {
    return (
      <List style={{ border: '1px solid rgb(217, 217, 217)', width: '90%', marginTop: '10px' }}>
        <Subheader>皮肤站加载列表<small>（双击项目可编辑）</small></Subheader>
        {this.props.names.map((name, index) => (
          <ListItem
            key={index}
            primaryText={name}
            rightIconButton={
              <IconButton onClick={() => this.props.onDeleteItem(index)}><ContentClearIcon /></IconButton>
            }
            onDoubleClick={() => this.props.onEditItem(index)}
          ></ListItem>
        ))}
      </List>
    )
  }
}

export default LoadList
