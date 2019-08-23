import c from './../constants';



export default (state = {}, action) => {
  let newState;
  let newOldState;
  const { jobName, client, jobStart, jobEnd, jobNotes, jobDispShow, jobMembers, jobMembId, id } = action;

  switch (action.type) {
  case c.ADD_JOB:
    newState = Object.assign({}, state, {
      [id]: {
        jobName: jobName,
        client: client,
        jobStart: jobStart,
        jobEnd: jobEnd,
        jobNotes: jobNotes,
        jobDispShow: null,
        jobMembers: jobMembers,
        jobMembId: null,
        id: id
      }
    });


    console.log(state)
    console.log(newState);
    return newState;


  case c.SHOW_JOB_DISPATCH:
    newState = Object.assign({}, state);
    Object.keys(newState).forEach(function(key) {
      newState[key].jobDispShow = false;
    });
    newState[id].jobDispShow = true;
    return newState

  case c.SEND_OFFER:
    // newState = Object.assign({}, state);
    // console.log(state)
    // console.log(newState[id])
    //
    // // Object.keys(newState).forEach(function(key) {
    //
    // newState[id].jobMembers[jobMembId].offerSent = 'yes'
    // // });
    newState = Object.assign({}, state, {
      [id]: Object.assign({}, state[id], {
        jobMembers: Object.assign({}, state[id].jobMembers, {
          [jobMembId]: Object.assign({}, state[id].jobMembers[jobMembId], {
            offerSent: "yes"
          })
        })
      })
    });

    return newState

  default:
    return state;
  }
};
