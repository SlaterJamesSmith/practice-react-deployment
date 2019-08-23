import React from 'react';
// import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { connect } from 'react-redux';

function NewMemberForm(props){
  let _firstName = null;
  let _lastName = null;
  let _email = null;
  let _notesMaster = null;
  let _proficiencies = null;
  let _exclusions = null;
  let _hireDate = null;
  let _listNumber = null;
  let _formVisibleOnPage = true;

  function handleNewMemberFormSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: 'ADD_MEMBER',
      id: v4(),
      firstName: _firstName.value,
      lastName: _lastName.value,
      email: _email.value,
      notesMaster: _notesMaster.value,
      proficiencies: _proficiencies.value,
      exclusions: _exclusions.value,
      hireDate: _hireDate.value,
      listNumber: _listNumber.value
    };
    dispatch(action);
    // props.onNewMemberCreation({firstName: _firstName.value, lastName: _lastName.value, email: _email.value, notesMaster: _notesMaster.value, id: v4()});
    props.onNewMemberForm({formVisibleOnPage: _formVisibleOnPage});
    _firstName.value = '';
    _lastName.value = '';
    _email.value = '';
    _notesMaster.value = '';
    _proficiencies.value = '';
    _exclusions.value = '';
    _hireDate.value = '';
    _listNumber.value = 0;
    _formVisibleOnPage = true;
  }

  function handleCancel(event) {
    event.preventDefault();
    props.onNewMemberForm({formVisibleOnPage: _formVisibleOnPage});
    _formVisibleOnPage = false;
  }

  return (
    <div>
    <style jsx>{`
      li {
        display: block;
      }
     `}</style>
   <form onSubmit={handleNewMemberFormSubmission}>
        <li><input
          type='text'
          id='firstName'
          placeholder='First Name'
          ref={(input) => {_firstName = input;}}/></li>
        <li><input
          type='text'
          id='lastName'
          placeholder='Last Name'
          ref={(input) => {_lastName = input;}}/></li>
        <li><input
          type='text'
          id='email'
          placeholder='Email'
          ref={(input) => {_email = input;}}/></li>
        <li><input
          type='text'
          id='proficiencies'
          placeholder='Proficiencies'
          ref={(input) => {_proficiencies = input;}}/></li>
        <li><input
          type='text'
          id='exclusions'
          placeholder='Exclusions'
          ref={(input) => {_exclusions = input;}}/></li>
        <li><input
          type='text'
          id='hireDate'
          placeholder='Hire Date'
          ref={(input) => {_hireDate = input;}}/></li>
        <li><input
          type='text'
          id='listNumber'
          placeholder='List Number'
          ref={(input) => {_listNumber = input;}}/></li>
        <li><input
          type='text'
          id='notesMaster'
          placeholder='Notes'
          ref={(input) => {_notesMaster = input;}}/></li>
        <button type='submit'>Submit</button>
        <button type='submit' onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
}

// NewMemberForm.propTypes = {
//   onNewMemberCreation: PropTypes.func,
//   onNewMemberForm: PropTypes.func
// };

// NewMemberForm = connect()(NewMemberForm);

export default connect()(NewMemberForm);
