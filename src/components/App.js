import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import TrelloList from './TrelloList';
import { sort } from '../actions';
import TrelloActionButton from './TrelloActionButton';

const ListContainer = styled.div`
  display: flex;
`

class App extends React.Component {
  onDragEnd = result => {
    const { destination, source, draggableId, type } = result;
    
    if(!destination) {return}
    this.props.dispatch (
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    )

  }

  render() {
    const { lists } = this.props
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="App">
          <h2>TRELLO CLONE</h2>
          <Droppable 
            droppableId="all-lists"
            direction="horizontal"
            type="list"
          >
            {provided => (
               <ListContainer 
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {lists.map((list, index) => (
                  <TrelloList
                    listId = {list.id} 
                    key={list.id}
                    title={list.title} 
                    cards={list.cards}
                    index={index}
                  />
                ))}
                <TrelloActionButton list />
             </ListContainer>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    );
  }
};

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect (mapStateToProps)(App);
