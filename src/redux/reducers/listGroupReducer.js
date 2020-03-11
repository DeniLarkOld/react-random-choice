const ADD_GROUP = 'ADD_GROUP';
const ADD_LIST = 'ADD_LIST';

const DELETE_GROUP = 'DELETE_GROUP';
const DELETE_LIST = 'DELETE_LIST';

const SET_MODAL_RESULT = 'SET_MODAL_RESULT';
const SET_MODAL_DELETE = 'SET_MODAL_DELETE';

const RANDOM_STATE = 'RANDOM_STATE';

let initialState = {
  groups: [
    {id: 1, title: 'Орел или решка'},
    {id: 2, title: 'Камень, ножницы, бумага'}
  ],
  lists: [
    {id: 1, parentId: 1, title: 'Орел'},
    {id: 2, parentId: 1, title: 'Решка'},

    {id: 3, parentId: 2, title: 'Камень'},
    {id: 4, parentId: 2, title: 'Ножницы'},
    {id: 5, parentId: 2, title: 'Бумага'}
  ],

  modalResult: null,
  modalDelete: null
}

export const saveState = (state) => {  
  let sState = {};
  sState.groups = state.groups;
  sState.lists = state.lists;

  localStorage.setItem(RANDOM_STATE, JSON.stringify(sState));
}

if(localStorage.getItem(RANDOM_STATE)) {
  const loadState = JSON.parse(localStorage.getItem(RANDOM_STATE));

  initialState.groups = loadState.groups;
  initialState.lists = loadState.lists;
} else {
  saveState(initialState);
}
  

const listGroupReducer = (state = initialState, action) => {
  
  switch(action.type) {
    case ADD_GROUP:
      let group = {
        id: state.groups[state.groups.length - 1].id + 1,
        title: action.title
      }
      return {
        ...state,
        groups: [...state.groups, group]
      };
    case ADD_LIST:
      let list = {
        id: state.lists[state.lists.length - 1].id + 1,
        parentId: action.parentId,
        title: action.title
      }
      return {
        ...state,
        lists: [...state.lists, list]
      };

    case DELETE_GROUP:
      
      return {
        ...state,
        groups: state.groups.filter(g => g.id !== action.payload),
        lists: state.lists.filter(l => l.parentId !== action.payload)
      }
    case DELETE_LIST:
      return {
        ...state,
        lists: state.lists.filter(l => l.id !== action.payload)
      }
    
    case SET_MODAL_RESULT:
      return {
        ...state,
        modalResult: action.payload
      }
    
    case SET_MODAL_DELETE:
      return {
        ...state,
        modalDelete: action.payload
      }

    default: return state;
  }
}

export default listGroupReducer;

export const addGroup = (text) => {
  return ({type: ADD_GROUP, title: text})
}

export const addList = (text, parentId) => {
  return ({type: ADD_LIST, title: text, parentId: parentId})
}

export const deleteList = id => {
  return {
    type: DELETE_LIST,
    payload: id
  }
}

export const deleteGroup = id => {
  return {
    type: DELETE_GROUP,
    payload: id
  }
}

export const setModalResult = title => {
  return {
    type: SET_MODAL_RESULT,
    payload: title
  }
}

export const setModalDelete = object => {
  return {
    type: SET_MODAL_DELETE,
    payload: object
  }
}