import { CONSTANTS } from '../actions';
 
let listId = 2;
let cardId = 1;

const initialState = [
    {
        id: 0,
        title: 'What has been done',
        cards: [
            {
                id: 0,
                text: 'I needed to work hard to make hardpresst harware',
            },
            {
                id: 1,
                text: 'If you need more money think better and do right',
            }
        ]
    },
    {
        id: 1,
        title: 'What you need to do for a while',
        cards: [
            {
                id: 0,
                text: 'Feed cats',
            },
            {
                id: 1,
                text: 'Sleep well',
            },
            {
                id: 2,
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
                id: listId,
            }
            listId += 1;
            return [...state, newList];

        case CONSTANTS.ADD_CARD:
            const newCard = {
                text: action.payload.text,
                id: cardId,
            } 
            cardId += 1;

            const newState = state.map(list => {
                if(list.id === action.payload.listId) {
                    return {
                        ... list,
                        cards: [...list.cards, newCard]
                    } 
                } else {
                    return list;
                }
            })
        
            return newState;

        default:
            return state;
    }
}

export default listsReducer;