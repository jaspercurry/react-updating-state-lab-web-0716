const React = require('react')

class YouTubeDebugger extends React.Component {

  constructor() {
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
      bitrate: 8,
      video: {
      resolution: '1080p'
      }
    }
  }
  this.changeBit = this.changeBit.bind(this)
  this.changeRes = this.changeRes.bind(this)
  }


  changeBit(event) {
    this.setState({
      settings: Object.assign({}, this.state.settings, {bitrate: 12})

    })

  }

  changeRes(event) {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.video, {
          resolution: "720p"
        })
      })
    })

  }


  render() {
    return(
      <div>
        <button className="bitrate" onClick={this.changeBit}></button>
        <button className="resolution" onClick={this.changeRes}></button>
      </div>

    )

  }

}


module.exports = YouTubeDebugger;
