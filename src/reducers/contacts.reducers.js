import DummyData from '../data/DummyData';

const initialState = DummyData.GENERATE();

const contacts = (state = initialState, action) => {
  if(action.type === 'ADD_CONTACT'){
    return [
      {
        name: action.payload.name,
        email: action.payload.email,
      },
      ...state
    ]
  }else{
    return state;
  }
};

export default contacts;