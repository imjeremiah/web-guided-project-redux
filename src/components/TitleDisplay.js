import React from 'react';
import { connect } from 'react-redux';
import { toggleEditing } from '../actions/titleActions';

const TitleDisplay = (props) => {

  const handleEditClick = () => {
    console.log('1. TitleDisplay: User Clicks Edit Button');
    props.toggleEditing();
  }

  return(<h2>
      {props.title}{' '}
      <i
        className="far fa-edit"
        onClick={handleEditClick}
      />
  </h2>);
}

const mapStateToProps = (state) => {
  return ({
    title: state.title.title
  });
}

const mapActionsToProps = {
  toggleEditing: toggleEditing
}

export default connect(mapStateToProps, mapActionsToProps)(TitleDisplay);