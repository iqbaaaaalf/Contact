import DummyData from '../data/DummyData';

const initialState = DummyData.GENERATE();

const contacts = (state = initialState, action) => {
  if(action.type === 'ADD_CONTACT'){
    return [
      {
        id: action.id,
        name: action.name,
        email: action.email,
      },
      ...state
    ]
  }else{
    return state;
  }
};

export default contacts;