import React from 'react';
import Job from './Job';
import PropTypes from 'prop-types';




function EditJobList(props){
  return (
    <div>
      <style jsx>{`
         div {
           font-family: arial;
         }
         h2 {
           background-color: lightgreen;
           padding: 10px;
           color: forestgreen;
           border: 3px solid forestgreen;
           text-align: center;
         }
         ul {
           padding: 8px;
         }
         li {
           display: block;
           padding: 0;
           margin-bottom: 0;
         }
       `}</style>
     <h2>Current Jobs</h2>
      {Object.keys(props.jobList).map(function(id) {
        var job = props.jobList[id];
        return <Job
          onRemoveJob={props.onRemoveJob}
          id={job.id}
          jobName={job.jobName}
          client={job.client}
          jobStart={job.jobStart}
          jobEnd={job.jobEnd}
          jobNotes={job.jobNotes} />




      })}

    </div>
  );
}

export default EditJobList;
