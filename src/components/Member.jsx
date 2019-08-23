import React from 'react';
import PropTypes from 'prop-types';

function Member(props){
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
      <ul>
        <li><h3>{props.firstName} {props.lastName}</h3></li>
        <li></li>
        <li><p>{props.email}</p></li>
        <li><p><strong>Proficiencies:</strong> {props.proficiencies}</p></li>
        <li><p><strong>Exclusions:</strong> {props.exclusions}</p></li>
        <li><p><strong>Hire Date:</strong> {props.hireDate}</p></li>
        <li><p><strong>List Number:</strong> {props.listNumber}</p></li>
        <li><p><span>notes: {props.notesMaster}</span></p></li>
      </ul>
    </div>
  );
}

Member.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  notesMaster: PropTypes.string.isRequired
};

export default Member;
