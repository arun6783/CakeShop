const redux = require('redux');
const createStore =redux.createStore;
const applyMiddleware  = redux.applyMiddleware;
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')
const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';

const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';

const FETCH_USER_FAILED = 'FETCH_USER_FAILED';

const initialState = {

    loading: false,
    users : [],
    error:''
}


const fetchUsersRequest = ()=>{

    return {
        type: FETCH_USER_REQUEST
    
    }
}


const fetchUsersSuccess = users=>{

    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    
    }
}


const fetchUsersFailure = error=>{

    return {
        type: FETCH_USER_FAILED,
        payload: error
    
    }
}


const recuder= (state = initialState, action)=>{

    switch(action.type){
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true
            }

            case FETCH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users:action.payload,
                error: ''
            }

            case FETCH_USER_FAILED:
            return {
                ...state,
                loading: false,
                users:[],
                error: action.payload
            }
    }
}

const store = createStore(recuder, applyMiddleware(thunkMiddleware))

