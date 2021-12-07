import React, { useReducer } from 'react';

import { connect } from 'react-redux';

import titleReducer, { initialState } from '../reducers/titleReducer';
import { toggleEditing, updateTitle} from './../actions/titleActions';

import TitleDisplay from './TitleDisplay';
import TitleForm from './TitleForm';

const Title = (props) => {
  const handleTitleUpdate = (title) => {
    props.dispatch(updateTitle(title));
  }
  
  console.log("0/5. Renders Title Component");
  return (
    <div>
      <h1>{props.appName}</h1>
      {
        !props.editing ? 
          <TitleDisplay />: 
          <TitleForm handleTitleUpdate={handleTitleUpdate}/>
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("title state", state);
  return {
    appName: state.appName,
    editing: state.editing
  }
}

export default connect(mapStateToProps)(Title);
//mapStateToProps: function that gets state as an argument, and return an object that is injected into a component's props
//mapActionsToProps: an object that should hold action creator functions. Functions are injected into props AND automatically dispatch when executed
//component: the component we are injecting props into
