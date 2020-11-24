import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

import TrelloCard from './TrelloCard';
import TrelloActionButton from './TrelloActionButton';

function TrelloList({ title, cards, listId }) {
    return (
        <Droppable droppableId={String(listId)}>
            {provided => (
                <div 
                    {...provided.droppableProps}
                    ref={provided.innerRef} 
                    style={styles.container}
                >
                    <h3>{title}</h3>
                    {cards.map((card, index) => (
                        <TrelloCard 
                            key={card.id} 
                            id={card.id}
                            text={card.text}
                            index={index}
                        />
                    ))}
                    <TrelloActionButton listId={listId}/>
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    )
}

const styles = {
    container: {
        backgroundColor:'#dfe3e6',
        bordertRadius: 3,
        width: 300,
        padding: 8,
        height: "100%",
        marginRight: 8,
    }
}

export default TrelloList;
