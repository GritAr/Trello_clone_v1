import { CONSTANTS } from '../actions';
 
let listId = 2;
let cardId = 5;

const initialState = [
    {
        id: `list-${0}`,
        title: 'What has been done',
        cards: [
            {
                id: `card-${0}`,
                text: 'I needed to work hard to make hardpresst harware',
            },
            {
                id: `card-${1}`,
                text: 'If you need more money think better and do right',
            }
        ]
    },
    {
        id: `list-${1}`,
        title: 'What you need to do for a while',
        cards: [
            {
                id: `card-${2}`,
                text: 'Feed cats',
            },
            {
                id: `card-${3}`,
                text: 'Sleep well',
            },
            {
                id: `card-${4}`,
                text: 'Foo',
            }
        ]
    }
]

const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.ADD_LIST:
            const newList = {
                title: action.payload,
                cards: [],
                id:`list-${listId}`,
            }
            listId += 1;
            return [...state, newList];

        case CONSTANTS.ADD_CARD:
            const newCard = {
                text: action.payload.text,
                id: `card-${cardId}`,
            } 
            cardId += 1;

            const newState = state.map(list => {
                if(list.id === action.payload.listId) {
                    return {
                        ...list,
                        cards: [...list.cards, newCard]
                    } 
                } else {
                    return list;
                }
            })
        
            return newState;

            case CONSTANTS.DRAG_DONE: {
                const {
                    droppableIdStart,
                    droppableIdEnd,
                    droppableIndexStart,
                    droppableIndexEnd,
                    // draggableId 
                } = action.payload;
                const newState = [...state];
                
                // in the same list
                if(droppableIdStart === droppableIdEnd) {
                    const list = state.find(list => droppableIdStart === list.id);
                    const card = list.cards.splice(droppableIndexStart, 1);
                    list.cards.splice(droppableIndexEnd, 0, ...card);
                }

                return newState;
            }
        default:
            return state;
    }
}

export default listsReducer;