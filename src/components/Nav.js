import React from 'react';

class Nav extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      text: '',
    };

    this.handleGoClick = this.handleGoClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleGoClick (e) {
    e.preventDefault();
    this.props.changeCurrent(this.state.text);
  }

  handleInputChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  render () {
    return (
    <span id="all">
      <button 
        onClick={() => this.props.changeBack()}
        id="back"
      >Back</button>
      <button 
        onClick={() => this.props.changeForward()}
        id="forward"
      >Forward</button>
      <form id="search-bar">
        <input 
          type="text" 
          id="bar" 
          placeholder="website"
          value={this.state.text}
          onChange={this.handleInputChange.bind(this)}
        />
        <button 
          onClick={this.handleGoClick}
          id="go"
        >Go</button>
      </form>
    </span>
    )
  }
}

export default Nav;
