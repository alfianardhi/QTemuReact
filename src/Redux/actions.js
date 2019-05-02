import axios from 'axios';

//axios
export const fetchDatas = () => {
    return (dispatch) => { //dispatch untuk menjalankan fungsi
      //dispatch(addUserStarted()); // ini aksi start semisal untuk loading
  
      axios
      .get("https://swapi.co/api/people")
      .then(res => {
          dispatch(addUserToReducer(res.data.results));
       })
    };
  };

export const increment = () => ({
    type: 'INCREMENT'
})

export const decrement = (paramangka) =>({
    type: 'DECREMENT',
    paramangka
})

const addUserToReducer = (userdata)=>({
    type:'ADDUSER',
    payload:userdata
})

const addUserStarted = () =>({
    type: 'ADD_USER_STARTED'
})

