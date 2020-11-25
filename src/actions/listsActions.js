import { CONSTANTS } from '../actions';
 
export const addList = title => {
    return {
        type: CONSTANTS.ADD_LIST,
        payload: title
    };
};

export const sort = (
   droppableIdStart,
   droppableIdEnd,
   droppableIndexStart,
   droppableIndexEnd,
   draggableId 
) => {
    return {
        type: CONSTANTS.DRAG_DONE,
        payload: {
            droppableIdStart,
            droppableIdEnd,
            droppableIndexStart,
            droppableIndexEnd,
            draggableId 
        }
    }
}