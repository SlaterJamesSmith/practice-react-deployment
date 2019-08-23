import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//VALUES PASSED TO UI FROM STATE
// id={member.id}
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

function JobSpecificMembers(props){
let sentOffer
  // console.log(props.offerSent)

let memberObj = props.memberIds;
let myMember = memberObj[props.fancyProps]

const newMemberId = props.newId
const newJobId = props.jobId

  function handleSendOffer(event) {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: 'SEND_OFFER',
      id: props.jobId,
      jobMembId: props.fancyProps
    };
    dispatch(action);



    console.log(props.jobId)
  }


// console.log(props.masterJobList[props.jobId].jobMembers[props.fancyProps].newId)


  return (
    <div>
      <style jsx>{`
        div {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
          font-family: arial;
          background-color: lightgreen;
          color: black;
        }
        h2 {
          padding: 20px;
        }
        ul {
          padding: 8px;
          border: 3px solid grey;
        }
        li {
          display: block;
          padding: 0;
          background-color: lightgrey;
          border-bottom: 1px solid forestgreen;
          padding: 5px;
        }
        span {
          color: grey;
        }
       `}</style>


     <li>{props.masterJobList[props.jobId].jobMembers[props.fancyProps].firstName} {props.masterJobList[props.jobId].jobMembers[props.fancyProps].lastName}</li>
     <li>{props.proficiencies}</li>
     <li>{props.jobId}</li>
     <li>{props.fancyProps}</li>
     <li>{props.masterJobList[props.jobId].jobMembers[props.fancyProps].offerSent}</li>
     <button onClick={handleSendOffer}>Send Offer</button>





    </div>
  );

}

JobSpecificMembers.propTypes = {
  // firstName: PropTypes.string.isRequired,
  // lastName: PropTypes.string.isRequired,
  // email: PropTypes.string.isRequired,
  // notesMaster: PropTypes.string.isRequired
};

// function mapStateToProps(state) {
//   console.log(state)
// }

const mapStateToProps = state => {
  return {
    masterJobList: state.masterJobList,
    masterJobList: state.masterJobList
  }
};


export default connect(mapStateToProps)(JobSpecificMembers);
