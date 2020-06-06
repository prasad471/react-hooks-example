// postReducer.js

import { ADD_POST, GET_SUCCESS } from '../actions/types';

const defaultState = {posts:[],
                     editPost:{},
                     update:false,
                     updateSubmit: false,
                     updateSuccess: false,
                     addSuccess: false
                    }

export default function postReducer(state =defaultState , action) {
  switch (action.type) {
    case ADD_POST:
      return {...state,updateSuccess:false,update: false}
    case 'ADD_POST_SUCCESS':
      return {...state,addSuccess:true}  
    case GET_SUCCESS:
      return {...state,
              posts: action.payload,
              update: false,
            updateSuccess: false,
          addSuccess: false} 
    case 'EDIT_POST_SUCCESS':
      return {...state,
          editPost: action.payload,
          update: true
          }
    case 'UPDATE_POST':
      return {
        ...state,
        updateSubmit: true,
        updateSuccess: false
      }
      case 'UPDATE_POST_SUCCESS':
          return {
            ...state,
            updateSubmit: false,
            updateSuccess: true,
            update: true,
            editPost: {}
          }               
    default:
      return state;
  }
}