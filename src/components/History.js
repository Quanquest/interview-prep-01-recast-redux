import React from 'react';
import List from './List.js';

const History = ({back, forward, current}) => (
  <div id="history">
    <span id="bColumn">
      <h2 id="back-title">BACK</h2>
      <List entries={back}/>
    </span>
     <span id="cColumn">
      <h2 id="center-title">CURRENT</h2>
      <List entries={current}/>
    </span>
    <span id="fColumn">
      <h2 id="front-title">FORWARD</h2>
      <List entries={forward}/>
    </span>
  </div>
);

export default History;