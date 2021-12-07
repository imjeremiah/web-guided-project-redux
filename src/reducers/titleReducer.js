import { UPDATE_TITLE, TOGGLE_EDITING} from './../actions/titleActions';

export const initialState = {
    appName: "Redux Test",
    title: "Dragon Member List 🐲",
    editing: false
  };
  
const titleReducer = (state, action) => {
  console.log("3. Inside the reducer");
  switch (action.type) {
    case UPDATE_TITLE:
      return {
        ...state,
        title: action.payload,
        editing: false
      };
    case TOGGLE_EDITING:
      console.log("4. Excuting Toggle Editing action");
      return {
        ...state,
        editing: !state.editing
      };
    default:
      return state;
  }
};

export default titleReducer;