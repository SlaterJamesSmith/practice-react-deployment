import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import JobSpecificMembers from './JobSpecificMembers';


// membersProps={props.jobMembers}
// memberId={member.id}
// firstName={member.firstName}
// lastName={member.lastName}
// email={member.email}
// proficiencies={member.proficiencies}
// exclusions={member.exclusions}
// hireDate={member.hireDate}
// listNumber={member.listNumber}
// notesMaster={member.notesMaster}
// availability={member.availability}
// offerSent={member.offerSent}
// newId={member.newId}

function SortList(props){
  // console.log(props.jobMembers)

  if (props.jobDispShow === true) {
  return (
    <div>
      <style jsx>{`
        div {
          font-family: arial;
          background-color: black;
          color: green;
          border: 3px solid gray;
        }
        h2 {
          padding: 20px;
          background-color: lightgreen;
          margin: 0;
          border-bottom: 3px solid grey;
        }
        ul {
          padding: 8px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
          font-family: arial;
          background-color: darkgray;
          color: black;
          margin: 0;
        }
        li {
          display: block;
          padding: 0;
          margin: 0;
          font-weight: bold;
        }
        span {
          color: grey;
        }
       `}</style>


    <h2><span>Job:</span> {props.jobName}</h2>
    <ul>
      <li>Name</li>
      <li>Proficiencies</li>
      <li>Job ID</li>
      <li>Member ID</li>
      <li>Offer Sent</li>
    </ul>
      {Object.keys(props.jobMembers).map(function(id) {

          let member = props.jobMembers[id];
          return <JobSpecificMembers
            jobId={props.jobId}
            memberIds={props.jobMembers[id]}
            newId={member.newId}
            fancyProps={id}
            />
        })}








    </div>
  );
} else {
  return (
    <div></div>
  )
}
}

SortList.propTypes = {
  // firstName: PropTypes.string.isRequired,
  // lastName: PropTypes.string.isRequired,
  // email: PropTypes.string.isRequired,
  // notesMaster: PropTypes.string.isRequired
};

export default connect()(SortList);


// {Object.keys(props.jobDispList).map(function(id) {
//   var job = props.jobDispList[id];
//   if (props.jobDispShow == true) {
//     return <SortList
//       onRemoveJob={props.onRemoveJob}
//       id={job.id}
//       jobName={job.jobName}
//       client={job.client}
//       jobStart={job.jobStart}
//       jobEnd={job.jobEnd}
//       jobNotes={job.jobNotes}
//       />
//   }
// })}
