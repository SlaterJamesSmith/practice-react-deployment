import React from 'react';
import Member from './Member';
import PropTypes from 'prop-types';
// import Job from './Job';
import JobDisp from './JobDisp';
import Job from './Job';
import SortList from './SortList';




function Dispatcher(props){
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

     {Object.keys(props.jobDispList).map(function(id) {
         var job = props.jobDispList[id];
         return <JobDisp
           id={job.id}
           jobName={job.jobName}
           jobDispShow={job.jobDispShow} />
       })}

    <h2>Sort Buttons Here</h2>

    {Object.keys(props.jobDispList).map(function(id) {
        var job = props.jobDispList[id];
        return <SortList
          jobId={job.id}
          jobName={job.jobName}
          client={job.client}
          jobStart={job.jobStart}
          jobEnd={job.jobEnd}
          jobDispShow={job.jobDispShow}
          jobNotes={job.jobNotes}
          jobMembers={job.jobMembers}
          />
      })}






    </div>
  );
}

export default Dispatcher;
