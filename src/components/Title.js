import React from 'react';
import { connect } from 'react-redux';

import { toggleEditing, updateTitle} from './../actions/titleActions';

import TitleDisplay from './TitleDisplay';
import TitleForm from './TitleForm';

const Title = (props) => {
  console.log('9. Title: Component Rerenders With Updated State');

  // const handleToggleEditing = () => {
  //   console.log('2. Title: Helper Function Dispatches Action')
  //   props.dispatch(toggleEditing());
  // }

  // const handleTitleUpdate = (title) => {
  //   props.dispatch(updateTitle(title));
  // }

  return (
    <div>
      <h1>{props.appName}</h1>
      {
        !props.editing ? 
          <TitleDisplay />: 
          <TitleForm />
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log('7. Title: mapStatetoProps Updates To New State');
  console.log('8. Updated State To Render:', state);
  return({
    appName: state.title.appName,
    editing: state.title.editing
  });
}

export default connect(mapStateToProps)(Title);
// 1. mapStateToProps: a function that gets the current state and injects returned values into the wrapped component.
// 2. mapActionsToProps: an object that injects action creators into props of the component AND automatically dispatches those action creators on execution 
