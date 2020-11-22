import React from 'react';
import { connect } from 'react-redux';

import TrelloList from './TrelloList';
import TrelloActionButton from './TrelloActionButton';

function App({ lists }) {
  return (
    <div className="App">
      <h2>TRELLO CLONE</h2>
      <div style = {styles.listsContainer}>
        {lists.map(list => (
          <TrelloList
            listId = {list.id} 
            key={list.id}
            title={list.title} 
            cards={list.cards}
         />
        ))}
        <TrelloActionButton list />
      </div>
    </div>
  );
};

const styles = {
  listsContainer: {
    display: 'flex',
  }
}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect (mapStateToProps)(App);
