import DummyData from '../data/DummyData';

const initialState = DummyData.GENERATE();

const contacts = (state = [], action) => {
  switch (action.payload){
    case 'ADD_CONTACT':
      return [
        {
          name: action.payload.name,
          email: action.payload.email,
        },
        ...state
      ];
    default: return state;
  }
};

export default contacts;