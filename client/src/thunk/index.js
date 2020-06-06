// actions >> index.js
import axios from "axios";
import { ADD_POST } from '../actions/types';


const url = "http://localhost:4000";

export const getAllRecords = () => {
  return (dispatch, getState) => {
    dispatch({type:ADD_POST});
    axios.get(`${url}/getData`).then(
      (result) => {
        console.log(result);  
        dispatch({ type: "GET_SUCCESS", payload: result.data.data });
      },
      (error) => {
        console.log(error);
      }
    );
  };
};


export const getRecordById = (id) => {
    return (dispatch, getState) => {
      axios.get(`${url}/user/${id}`).then(
        (result) => {
          console.log(result);  
          dispatch({type:'EDIT_POST_SUCCESS',payload: result.data.data});
        },
        (error) => {
          console.log(error);
        }
      );
    };
  };

  export const updateRecord = (record) => {
    return (dispatch, getState) => {
      dispatch({type:'UPDATE_POST'});
      axios.put(`${url}/putData/${record.id}`,record).then(
        (result) => {
          console.log(result);  
          dispatch({type: 'UPDATE_POST_SUCCESS'});
        },
        (error) => {
          console.log(error);
        }
      );
    };
  };

  export const createRecord = (record) => {
    return (dispatch, getState) => {
      axios.post(`${url}/postData`,record).then(
        (result) => {
          console.log(result);  
          dispatch({type: 'ADD_POST_SUCCESS'});
        },
        (error) => {
          console.log(error);
        }
      );
    };
  };


  export const deleteRecordById = (id) => {
    return (dispatch, getState) => {
      axios.get(`${url}/deleteUser/${id}`).then(
        (result) => {
          console.log(result);  
          dispatch(getAllRecords());
        },
        (error) => {
          console.log(error);
        }
      );
    };
  };

