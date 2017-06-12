import React from 'react'
import Subheader from 'material-ui/Subheader'
import { List, ListItem } from 'material-ui/List'
import IconButton from 'material-ui/IconButton'
import ContentClearIcon from 'material-ui/svg-icons/content/clear'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAddIcon from 'material-ui/svg-icons/content/add'

import SkinSiteDialog from './SkinSiteDialog'

interface LoadListProps {
  names: string[]
  onDeleteItem (index: number)
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
      <List style={{ border: '1px solid rgb(217, 217, 217)', width: '90%' }}>
        <Subheader>皮肤站加载列表</Subheader>
        {this.props.names.map((name, index) => (
          <ListItem
            key={index}
            primaryText={name}
            rightIconButton={
              <IconButton onClick={() => this.props.onDeleteItem(index)}><ContentClearIcon /></IconButton>
            }
            onDoubleClick={() => alert(name)}
          ></ListItem>
        ))}
        <FloatingActionButton
          mini={true}
          style={{ marginLeft: '85%' }}
          onClick={() => this.setState({ dialogOpen: true })}
        >
          <ContentAddIcon />
        </FloatingActionButton>

        <SkinSiteDialog onClose={() => this.setState({ dialogOpen: false })} dialogOpen={this.state.dialogOpen} />
      </List>
    )
  }
}

export default LoadList
