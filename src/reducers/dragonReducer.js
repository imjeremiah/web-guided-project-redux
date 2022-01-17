import { ADD_MEMBER } from "../actions/dragonActions";

export const initialState = {
    members: [
        { name: 'Jojo Zhang', dragonStatus: true },
        { name: 'Brandon Harris', dragonStatus: false },
        { name: 'Brandon Harris', dragonStatus: true },
        { name: 'Brandon Harris', dragonStatus: false }
      ]
}

const dragonReducer = (state = initialState, action) => {
    switch(action.type) {
        case(ADD_MEMBER): {
            return {
                ...state,
                members: [...state.members, {name: action.payload, dragonStatus: true}]
            }
        }
        default: {
            return state;
        }
    }
}

export default dragonReducer;