//1. create our action constant for addMember
export const ADD_MEMBER = "ADD_MEMBER";

//2. create our action creator function for addMember
export const addMember = (name) => {
    return({type: ADD_MEMBER, payload:{name:name, dragonStatus:true}});
}