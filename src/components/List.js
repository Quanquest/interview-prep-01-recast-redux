import React from 'react';
import ListEntry from './ListEntry.js';

const List = ({entries}) => {
  const listEntries = entries.map(entry => (<ListEntry item={entry} />));
  
  return (
    <div id="">
      {listEntries}
    </div>
  );
};

export default ListEntry;
