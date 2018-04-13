const filterKeyword = (state = '', action) => {
  if (action.type === 'SET_FILTER_CONTACT'){
    return action.payload;
  }else{
    return state;
  }
};

export default filterKeyword;
