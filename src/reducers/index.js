
import { START_SMURF_FETCH, 
    SUCCESSFUL_SMURF_FETCH, 
    FAILED_SMURF_FETCH, 
    ADD_SMURF,
    ERROR_SMURF,
} from '../actions/index';

export const initialState = {
    smurfs: [
        {
            id:'123',
            name:'Murphy Smurf',
            position:'Doggo smurf',
            nickname:'Freddie Murphery',
            description:'A dog smurf that protects the smurf village and loves peanut butter'
        },
        {
            id:'456',
            name:'Elliott Smurf',
            position:'Boyfriend Smurf',
            nickname:'Smelliott',
            description:'Boyfriend Smurf that loves playing fetch with Murphy smurf and watching pro wrestling'
        }
    ],
    loading: false,
    error:''
};
// END OF INITIAL STATE

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case START_SMURF_FETCH:
            return {
                ...state,
                smurfs: {},
                loading: true,
                error: ''
            }
        case SUCCESSFUL_SMURF_FETCH:
            return {
                ...state,
                smurfs: action.payload,
                loading:false,
                error:''
            }
        case FAILED_SMURF_FETCH:
            return {
                ...state,
                smurfs: {},
                loading: false,
                error: action.payload
            }
        case ADD_SMURF:
            const newSmurf = {
                name: action.payload,
            }
            return {
                ...state,
                smurfs: [...state.smurfs, newSmurf]
            }
        case ERROR_SMURF:
            return {
                ...state,
                // how to do the error
                smurfs: {},
                loading:false,
                error: 'SMURF ERROR BIG SMURFIN ERROR'
            }
        default:
            return state;
    }
}

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//*** */  - an array of smurfs
//*** */  - a boolean indicating if the app is loading
//*** */  - a string indicating a possible error message

//2.*** Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.