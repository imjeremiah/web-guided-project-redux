import React, { useReducer } from 'react';

import titleReducer, { initialState } from '../reducers/titleReducer';
import { toggleEditing, updateTitle} from './../actions/titleActions';

import TitleDisplay from './TitleDisplay';
import TitleForm from './TitleForm';

const Title = () => {
  // const [state, dispatch] = useReducer(titleReducer, initialState);

  const handleToggleEditing = () => {
    console.log("1. Captures button click");
    // dispatch(toggleEditing());
  }

  const handleTitleUpdate = (title) => {
    // dispatch(updateTitle(title));
  }

  console.log("0/5. Renders Title Component");
  return (
    <div>
      <h1>{state.appName}</h1>
      {
        !state.editing ? 
          <TitleDisplay title={state.title} handleToggleEditing={handleToggleEditing}/>: 
          <TitleForm handleTitleUpdate={handleTitleUpdate}/>
      }
    </div>
  );
};

export default Title;
