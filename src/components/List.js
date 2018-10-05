import React from 'react';
import ListEntry from './ListEntry.js';

const List = ({entries}) => {
  const listEntries = entries.map(entry => (<ListEntry item={entry} />));
  
  return (
    <div className="myList">
      {listEntries}
    </div>
  );
};

export default List;
