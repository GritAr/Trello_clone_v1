import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';

import TrelloCard from './TrelloCard';
import TrelloActionButton from './TrelloActionButton';

const ListContainer = styled.div`
    background-color: #dfe3e6;
    border-radius: 3px;
    width: 300px;
    padding: 8px;
    height: 100%;
    margin-right: 8px;
`;

function TrelloList({ title, cards, listId }) {
    return (
        <Droppable droppableId={String(listId)}>
            {provided => (
                <ListContainer 
                    {...provided.droppableProps}
                    ref={provided.innerRef} 
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
                </ListContainer>
            )}
        </Droppable>
    )
}

export default TrelloList;
