import React from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';

import TrelloList from './TrelloList';
import TrelloActionButton from './TrelloActionButton';

class App extends React.Component {
  onDragEnd = () => {}

  render() {
    const {lists } = this.props
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
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
      </DragDropContext>
    );
  }
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
