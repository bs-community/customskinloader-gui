import React from 'react'
import ReactDOM from 'react-dom'

import AppBar from 'material-ui/AppBar'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { Grid, Row, Cell } from 'react-inline-grid'
import Highlight from 'highlight.js'

import CSLOptions from './components/CSLOptions'
import LoadList from './components/LoadList'
import CSLConfig from './config-handler'


const muiTheme = getMuiTheme()

class Main extends React.Component<{}, CSLConfig.CSLConfig & { jsonFailed: boolean }> {
  private fileInputElement: HTMLInputElement
  constructor() {
    super()

    this.state = {
      enable: true,
      enableSkull: false,
      enableDynamicSkull: false,
      enableTransparentSkin: false,
      ignoreHttpsCertificate: false,
      enableUpdateSkull: false,
      enableLocalProfileCache: false,
      enableCacheAutoClean: false,
      cacheExpiry: 0,
      version: '',
      loadlist: [],
      jsonFailed: false
    }

    Highlight.initHighlightingOnLoad()
  }

  componentDidUpdate () {
    Highlight.highlightBlock(ReactDOM.findDOMNode(this.refs.jsonResult))
  }

  downloadFile () {
    const downloadLink = document.createElement('a')
    downloadLink.href = `data:application/json,${encodeURI(this.generateJson())}`
    downloadLink.download = 'CustomSkinLoader.json'
    downloadLink.click()
  }

  chooseFile () {
    this.fileInputElement = document.createElement('input')
    this.fileInputElement.type = 'file'
    this.fileInputElement.onchange = event => {
      const fileReader = new FileReader()
      fileReader.onload = event => {
        try {
          const json = JSON.parse(event.target['result'])
          console.log(json)
          this.setState(json)
        } catch (error) {
          this.setState({ jsonFailed: true })
        }
      }
      const files = event.target['files']
      if (files && files.length !== 0) {
        fileReader.readAsText(files[0])
      }
    }
    this.fileInputElement.click()
  }

  generateJson () {
    const config = {}
    for (const key in this.state) {
      if (key !== 'jsonFailed') {
        config[key] = this.state[key]
      }
    }
    return JSON.stringify(config, null, 4)
  }

  render () {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar
            title="CustomSkinLoader GUI"
            showMenuIconButton={false}
            iconElementRight={
              <div>
                <RaisedButton label="打开配置文件" secondary={true} onClick={e => this.chooseFile()} />
              </div>
            }
          />
          <Grid>
            <Row>
              <Cell is="3 tablet-12 phone-12">
                <CSLOptions
                  style={{ marginTop: '10px', marginLeft: '10px', width: '85%' }}
                  enable={this.state.enable}
                  enableSkull={this.state.enableSkull}
                  enableDynamicSkull={this.state.enableDynamicSkull}
                  enableTransparentSkin={this.state.enableTransparentSkin}
                  ignoreHttpsCertificate={this.state.ignoreHttpsCertificate}
                  enableUpdateSkull={this.state.enableUpdateSkull}
                  enableLocalProfileCache={this.state.enableLocalProfileCache}
                  enableCacheAutoClean={this.state.enableCacheAutoClean}
                  cacheExpiry={this.state.cacheExpiry}
                  onChange={(property, value: boolean | number) => {
                    const newState = {}
                    newState[property] = value
                    this.setState(newState)
                  }}
                />
              </Cell>
              <Cell is="3 tablet-12 phone-12">
                <LoadList
                  names={this.state.loadlist.map(item => item.name)}
                  onDeleteItem={index => {
                    const loadList = this.state.loadlist
                    loadList.splice(index, 1)
                    this.setState({ loadlist: loadList })
                  }}
                ></LoadList>
              </Cell>
              <Cell is="5 tablet-12 phone-12">
                <div style={{ marginTop: '5px' }}>
                  <RaisedButton label="点我下载" onClick={() => this.downloadFile()}></RaisedButton>
                  <span style={{ marginLeft: '5px' }}>也可以直接复制下面的结果</span>
                  <pre><code ref="jsonResult" className="json">{this.generateJson()}</code></pre>
                </div>
              </Cell>
            </Row>
          </Grid>

          {/* Other Components */}
          <Dialog
            open={this.state.jsonFailed}
            actions={[
              <FlatButton
                label="好的"
                primary={true}
                onClick={() => this.setState({ jsonFailed: false })}
              ></FlatButton>
            ]}
          >这不是一个有效的 CustomSkinLoader 配置文件，请重新选择</Dialog>
        </div>
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('app'))
