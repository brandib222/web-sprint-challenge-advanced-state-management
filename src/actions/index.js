import axios from 'axios';

export const START_SMURF_FETCH = 'START_SMURF_FETCH';
export const SUCCESSFUL_SMURF_FETCH = 'SUCCESSFUL_SMURF_FETCH';
export const FAILED_SMURF_FETCH = 'FAILED_SMURF_FETCH';
export const ADD_SMURF = 'ADD_SMURF';
export const ERROR_SMURF = 'ERROR_SMURF';

export const fetchSmurfs = () => (dispatch) => {
    dispatch(startSmurfFetch());
    axios.get('http://localhost:3333/smurfs')
        .then(resp => {
            dispatch(successfulSmurfFetch(resp.data.results[0]));
        }).catch(err => {
            dispatch(failedSmurfFetch(err));
        });
}

export const startSmurfFetch = () => {
    return ({type: START_SMURF_FETCH});
}

export const successfulSmurfFetch = (smurf) => {
    return ({type: SUCCESSFUL_SMURF_FETCH, payload: smurf});
}

export const failedSmurfFetch = (errorMessage) => {
    return ({type: FAILED_SMURF_FETCH, payload: errorMessage});
}

export const addSmurf = (newSmurf) => {
    return ({type: ADD_SMURF, payload: newSmurf});
}

export const errorSmurf = (errorMessage) => {
    return ({type: ERROR_SMURF, payload: errorMessage});
}

//Task List:
//1. *** Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. *** Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. *** Add a standard action that allows us to set the value of the error message slice of state.