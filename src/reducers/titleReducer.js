import { UPDATE_TITLE, TOGGLE_EDITING} from './../actions/titleActions';

export const initialState = {
    appName: "Redux Test",
    title: "Dragon Member List 🐲",
    editing: false
  };
  
const titleReducer = (state  = initialState, action) => {
  console.log('4. TitleReducer: Goes Inside Reducer');
  console.log('5. Find The Dispatched Action:', action);
  switch (action.type) {
    case UPDATE_TITLE:
      return {
        ...state,
        title: action.payload,
        editing: false
      };
    case TOGGLE_EDITING:
      console.log('6. TitleReducer: Executes The Toggle Editing Case');
      return {
        ...state,
        editing: !state.editing
      };
    default:
      return state;
  }
};

export default titleReducer;