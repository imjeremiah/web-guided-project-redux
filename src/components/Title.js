import React, { useReducer } from 'react';

import { connect } from 'react-redux';

import titleReducer, { initialState } from '../reducers/titleReducer';
import { toggleEditing, updateTitle} from './../actions/titleActions';

import TitleDisplay from './TitleDisplay';
import TitleForm from './TitleForm';

const Title = (props) => {
  // const [state, dispatch] = useReducer(titleReducer, initialState);

  const handleToggleEditing = () => {
    console.log("1. Captures button click");
    // dispatch(toggleEditing());
  }

  const handleTitleUpdate = (title) => {
    // dispatch(updateTitle(title));
  }

  console.log(props);
  
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

const mapStateToProps = (state) => {
  console.log(state);
  
  return {
    prop1: "warren",
    prop2: "longmire"
  }
}


export default connect(mapStateToProps)(Title);
//mapStateToProps: function that gets state as an argument, and return an object that is injected into a component's props
//mapActionsToProps: an object that should hold action creator functions. Functions are injected into props AND automatically dispatch when executed
//component: the component we are injecting props into
