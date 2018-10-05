import React from 'react';
import List from './List.js';

const History = ({back, foward, current}) => (
  <div id="History">
    <div id="bColumn">
      <h1 id="back-title"></h1>
      <List entries={back}/>
    </div>
     <div id="cColumn">
      <h1 id="center-title"></h1>
      <List entries={current}/>
    </div>
    <div id="fColumn">
      <h1 id="front-title"></h1>
      <List entries={forward}/>
    </div>
  </div>
);

export default History;