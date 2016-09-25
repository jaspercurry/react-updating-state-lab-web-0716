const React = require('react')

class DigitalClicker extends React.Component {
  constructor() {
    super();
    this.state = {timesClicked: 0}
    this.clickFunc = this.clickFunc.bind(this)
  }

  clickFunc(event) {
    this.setState({timesClicked: this.state.timesClicked + 1})
  }


  render() {
    return(
      <button onClick={this.clickFunc}>{this.state.timesClicked}</button>
    )

  }

}

module.exports = DigitalClicker;
