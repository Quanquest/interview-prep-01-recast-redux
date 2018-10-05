import React from 'react';
import History from './History.js';

class App extends React.Component {
  constructor (props){
    super(props);

    this.state = {
      back: ['abc', 'i like cake'],
      current: ['i like cats'],
      forward: ['andrew loves salad', 'asdsa', 'and he loves almonds'],
    }

    this.updateCurrent = this.updateCurrent.bind(this);
    this.updateForward = this.updateForward.bind(this);
    this.updateBack = this.updateBack.bind(this);
  }

  updateCurrent (url) {
    const current = [url];
    const forward = [];
    const back = this.state.current.concat(this.state.back);
    this.setState({ current, forward, back });
  }

  updateForward () {
    const current = [this.state.forward[0]];
    const forward = this.state.forward.slice(1);
    const back = this.state.current.concat(this.state.back);
    this.setState({ current, forward, back });
  }
  
  updateBack () {
    const current = [this.state.back[0]];
    const forward = this.state.current.concat(this.state.forward);
    const back = this.state.back.slice(1);    
    this.setState({ current, forward, back });
  }

  render() {
    return (
      <div class="App">
        <div class="Nav">
          <Nav 
            changeCurrent={this.updateCurrent} 
            changeForward={this.updateForward} 
            changeBack={this.updateBack} 
          />
        </div>
        <div class= "History">
          <History 
            back={this.state.back}
            current={this.state.current}
            forward={this.state.forward}
          />
        </div>
      </div>    
    );
  }
}

