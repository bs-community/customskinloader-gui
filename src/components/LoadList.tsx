import React from 'react'
import Subheader from 'material-ui/Subheader'
import { List, ListItem } from 'material-ui/List'
import IconButton from 'material-ui/IconButton'
import ActionDeleteIcon from 'material-ui/svg-icons/action/delete'

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
        <Subheader>皮肤站加载列表</Subheader>
        {this.props.names.map((name, index) => (
          <ListItem
            key={index}
            primaryText={name}
            rightIconButton={
              <IconButton onClick={event => {
                event.stopPropagation()
                this.props.onDeleteItem(index)
              }}>
                <ActionDeleteIcon />
              </IconButton>
            }
            onClick={() => this.props.onEditItem(index)}
          ></ListItem>
        ))}
      </List>
    )
  }
}

export default LoadList
