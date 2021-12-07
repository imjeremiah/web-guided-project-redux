//Setup State
//1. initialize initialState
//2. add members as a empty array
//3. export initialState
const initialState = {
    members: [
        { name: 'Jojo Zhang', dragonStatus: true },
        { name: 'Brandon Harris', dragonStatus: false }
    ]
}


//Setup Reducer function
//1. Create function with state and action.
//2. create a switch statement that handles action.types
//3. create a case for addMember
//4. default case
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case(ADD_MEMBER):
            return ({
                ...state,
                members: [...state.members, {name: action.payload, dragonStatus:true}]
            });
        default:
            return state;
    }
}