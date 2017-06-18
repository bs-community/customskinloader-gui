import React from 'react'
import Subheader from 'material-ui/Subheader'
import { List, ListItem } from 'material-ui/List'
import IconButton from 'material-ui/IconButton'
import EditorPublishIcon from 'material-ui/svg-icons/editor/publish'
import NavigationArrowUpwardIcon from 'material-ui/svg-icons/navigation/arrow-upward'
import ActionDeleteIcon from 'material-ui/svg-icons/action/delete'
import ContentCreateIcon from 'material-ui/svg-icons/content/create'

interface LoadListProps {
  names: string[]
  onEditItem (index: number)
  onMoveUp (index: number)
  onMoveTop (index: number)
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
      <List style={{ border: '1px solid rgb(217, 217, 217)', marginTop: '10px' }}>
        <Subheader>皮肤站加载列表</Subheader>
        {this.props.names.map((name, index) => (
          <ListItem
            key={index}
            primaryText={name}
            rightIconButton={
              <div>
                <IconButton><ContentCreateIcon /></IconButton>
                <IconButton onClick={event => {
                  event.stopPropagation()
                  this.props.onMoveUp(index)
                }}>
                  <NavigationArrowUpwardIcon />
                </IconButton>
                <IconButton onClick={event => {
                  event.stopPropagation()
                  this.props.onMoveTop(index)
                }}>
                  <EditorPublishIcon />
                </IconButton>
                <IconButton onClick={event => {
                  event.stopPropagation()
                  this.props.onDeleteItem(index)
                }}>
                  <ActionDeleteIcon />
                </IconButton>
              </div>
            }
            onClick={() => this.props.onEditItem(index)}
          ></ListItem>
        ))}
      </List>
    )
  }
}

export default LoadList
