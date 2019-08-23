import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


function JobDisp(props){
let showSelectedList

  function handleJobShow(event) {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: 'SHOW_JOB_DISPATCH',
      jobDispShow: props.jobDispShow,
      id: props.id
    };
    dispatch(action);

    // console.log(testVariable)
  }

  if (props.jobDispShow == true) {
    showSelectedList = '(Selected)';
  } else {
    showSelectedList = null
  }

  // {Object.keys(props.jobDispList).map(function(id) {
  //     var job = props.jobDispList[id];
  //     if (props.jobDispShow == true) {
  //      return <SortList
  //        onRemoveJob={props.onRemoveJob}
  //        id={job.id}
  //        jobName={job.jobName}
  //        client={job.client}
  //        jobStart={job.jobStart}
  //        jobEnd={job.jobEnd}
  //        jobDispShow={job.jobDispShow}
  //        jobNotes={job.jobNotes}
  //        />
  //    }
  //   })}


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
          margin-top: -10px;
        }
        span {
          color: gray;
        }
       `}</style>

     <button onClick={handleJobShow}>{props.jobName} {showSelectedList}</button>

    </div>
  );
}

JobDisp.propTypes = {
  // firstName: PropTypes.string.isRequired,
  // lastName: PropTypes.string.isRequired,
  // email: PropTypes.string.isRequired,
  // notesMaster: PropTypes.string.isRequired
};

export default connect()(JobDisp);
