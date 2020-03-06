const redux = require('redux');

const createStore = redux.createStore

const BUY_CAKE ='BUY_CAKE';

const initialCakeState ={
    noOfCakes: 10
}

const reducer = (state = initialCakeState, action)=>{

    switch(action.type){
        case BUY_CAKE:
            return {
                ...state,
                noOfCakes : state.noOfCakes -1
            }
            default: return state;
    }
}


function buyCake(){
    return {
        type: BUY_CAKE
    }
}

const store = createStore(reducer);

const unsubscribe  = store.subscribe(()=>{console.log('latest state ', store.getState())});

store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();
