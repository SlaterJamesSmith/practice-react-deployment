import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function RemoveMember(props){
  let _id = null;


  //   function handleRemoveMember(event) {
  //   event.preventDefault();
  //   props.onRemoveMember(props.id);
  //   // props.onRemoveMember({id: _id});
  //   _id = props.id;
  // }

  function handleRemoveMember(event) {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: 'REMOVE_MEMBER',
      id: props.id
    };
    dispatch(action);
  }




  return (
    <div>
      <style jsx>{`
         div {
           font-family: arial;
           background-color: lightgrey;
           color: black;
         }
         ul {
           padding: 8px;
           border: 3px solid grey;
         }
         li {
           display: block;
           padding: 0;
           margin-top: -10px;;
         }
       `}</style>
      <ul>
        <li><h3>{props.firstName} {props.lastName}</h3></li>
        <li></li>
        <li><p>{props.email}</p></li>
        <li><p><strong>Proficiencies:</strong> {props.proficiencies}</p></li>
        <li><p><strong>Exclusions:</strong> {props.exclusions}</p></li>
        <li><p><strong>Hire Date:</strong> {props.hireDate}</p></li>
        <li><p><strong>List Number:</strong> {props.listNumber}</p></li>
        <li><p>notes: {props.notesMaster}</p></li>
        <button onClick={handleRemoveMember}>Remove</button>
        <button>Edit</button>
      </ul>
    </div>
  );
}

RemoveMember.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  notesMaster: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default connect()(RemoveMember);
