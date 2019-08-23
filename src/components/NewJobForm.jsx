import React from 'react';
// import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { connect } from 'react-redux';

function NewJobForm(props){
  let _jobName = null;
  let _client = null;
  let _jobStart = null;
  let _jobEnd = null;
  let _jobNotes = null;
  let _newJobMembers = null;
  let _formVisibleOnPage = true;

  function handleNewJobFormSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();



    let newJobMembersArray = Object.keys(props.jobMemberList).map(function(id) {

      const member = props.jobMemberList[id];
      // console.log(props.jobMemberList)
      const source = {availability: '', offerSent: 'no', newId: v4()}
      const memberObj = Object.assign(member, source)
      // console.log(memberObj)
      return memberObj
      // return {[id]: newMember}
    })

    const arrayToObject = (array) =>
       array.reduce((obj, item) => {
         obj[item.newId] = item


         return obj
       }, {})
    const newJobMembers = arrayToObject(newJobMembersArray)




    console.log(newJobMembers)
    const action = {
      type: 'ADD_JOB',
      id: v4(),
      jobName: _jobName.value,
      client: _client.value,
      jobStart: _jobStart.value,
      jobEnd: _jobEnd.value,
      jobNotes: _jobNotes.value,
      jobMembers: _newJobMembers.value
    };
    dispatch(action);
    props.onNewJobForm({formVisibleOnPage: _formVisibleOnPage});
    _jobName.value = '';
    _client.value = '';
    _jobStart.value = '';
    _jobEnd.value = '';
    _jobNotes.value = '';
    _formVisibleOnPage = true;
  }

  function handleCancel(event) {
    event.preventDefault();
    props.onNewJobForm({formVisibleOnPage: _formVisibleOnPage});
    _formVisibleOnPage = false;
  }

  return (
    <div>
    <style jsx>{`
      li {
        display: block;
      }
     `}</style>
   <form onSubmit={handleNewJobFormSubmission}>
        <li><input
          type='text'
          id='jobName'
          placeholder='Job Name'
          ref={(input) => {_jobName = input;}}/></li>
        <li><input
          type='text'
          id='client'
          placeholder='Client Name'
          ref={(input) => {_client = input;}}/></li>
        <li><input
          type='text'
          id='jobStart'
          placeholder='Start Time/Date'
          ref={(input) => {_jobStart = input;}}/></li>
        <li><input
          type='text'
          id='jobEnd'
          placeholder='End Time/Date'
          ref={(input) => {_jobEnd = input;}}/></li>
        <li><input
          type='text'
          id='jobNotes'
          placeholder='Notes'
          ref={(input) => {_jobNotes = input;}}/></li>
        <button type='submit'>Submit</button>
        <button type='submit' onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
}

// NewJobForm.propTypes = {
//   onNewMemberCreation: PropTypes.func,
//   onNewJobForm: PropTypes.func
// };

// NewJobForm = connect()(NewJobForm);

export default connect()(NewJobForm);
