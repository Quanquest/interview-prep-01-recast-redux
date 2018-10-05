import React from 'react';
import Nav from './Nav.js';
import History from './History.js';

class App extends React.Component {
  constructor (props){
    super(props);

    this.state = {
      current: ['i like cats'],
      forward: ['andrew loves salad', 'asdsa', 'and he loves almonds'],
      back: ['abc', 'i like cake'],
    };

    this.updateCurrent = this.updateCurrent.bind(this);
    this.updateForward = this.updateForward.bind(this);
    this.updateBack = this.updateBack.bind(this);
  }

  updateCurrent (url) {
    const current = [url];
    const forward = [];
    const back = (this.state.current.length === 0) ? this.state.back.concat() : this.state.current.concat(this.state.back);
    this.setState({ current, forward, back });
  }

  updateForward () {
    let current = this.state.forward[0] || this.state.current[0];
    current = [current];
    const forward = this.state.forward.slice(1) || [];
    const back = (this.state.forward.length === 0) ? this.state.back.concat() : this.state.current.concat(this.state.back);

    this.setState({ current, forward, back });
  }
  
  updateBack () {
    let current = this.state.back[0] || this.state.current[0];
    current = [current];
    const back = this.state.back.slice(1) || [];
    const forward = (this.state.back.length === 0) ? this.state.forward.concat() : this.state.current.concat(this.state.forward);
    this.setState({ current, forward, back });
  }

  render() {
    return (
      <div className="app">
        <div className="nav">
        <Nav 
          changeCurrent={this.updateCurrent} 
          changeForward={this.updateForward} 
          changeBack={this.updateBack} 
        />
      </div>
        <div className="history">
          <History 
            back={this.state.back}
            forward={this.state.forward}
            current={this.state.current}
          />
        </div>
      </div>    
    );
  }
}

export default App;
