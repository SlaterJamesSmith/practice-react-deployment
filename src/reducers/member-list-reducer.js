import c from './../constants';


// MOCK DATA
const mockState = {
  'mock1': {
    firstName: 'Jack',
    lastName: 'Ofalltrades',
    email: 'BeNimble420@gmail.com',
    proficiencies: 'None',
    exclusions: 'FoFum Inc.',
    hireDate: 'Oct. 22, 2012',
    listNumber: 18,
    notesMaster: '',
    id: 'mock1'
  },
  'mock2': {
    firstName: 'Jane',
    lastName: 'Jee-eye',
    email: 'hooya@yahoo.com',
    proficiencies: 'Sharpshooting',
    exclusions: 'Expat staffing',
    hireDate: 'Dec. 7, 2018',
    listNumber: 54,
    notesMaster: 'likes early shifts',
    id: 'mock2'
  },
  'mock3': {
    firstName: 'Carl',
    lastName: 'Mell',
    proficiencies: 'Electrician',
    exclusions: 'Moda Center Employment',
    hireDate: 'March 3, 1994',
    listNumber: 2,
    email: 'ilikecandy@hotmail.com',
    notesMaster: '',
    id: 'mock3'
  },
  'mock4': {
    firstName: 'Sarah',
    lastName: 'Sander',
    proficiencies: 'Woodworking',
    exclusions: 'Portland Metal Works',
    hireDate: 'Jan. 18, 1980',
    listNumber: 1,
    email: 'woodshopismyjam@auntiesarahwoodworking.com',
    notesMaster: '',
    id: 'mock4'
  }
}

export default (state = mockState,
action) => {
  let newState;
  const { firstName, lastName, email, exclusions, proficiencies, hireDate, listNumber, notesMaster, id } = action;

  switch (action.type) {
  case c.ADD_MEMBER:
    newState = Object.assign({}, state, {
      [id]: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        proficiencies: proficiencies,
        exclusions: exclusions,
        hireDate: hireDate,
        listNumber: listNumber,
        notesMaster: notesMaster,
        id: id
      }
    });
    console.log(state)
    console.log(newState);
    return newState;

    case c.REMOVE_MEMBER:
      newState = Object.assign({}, state);
      delete newState[id]
      console.log('hello! remove member!');
      console.log(newState);
      return newState

  default:
    return state;
  }
};
