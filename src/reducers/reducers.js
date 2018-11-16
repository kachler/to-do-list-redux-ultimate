const initialState = {
  arr: ['eat', 'drink', 'sleep'],
  currentText: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'HANDLE_CHANGE':
      return {
        ...state,
        currentText: action.payload
      };
    case 'HANDLE_SUBMIT':
      action.payload.preventDefault();
      const arrCopy = state.arr.slice();
      arrCopy.push(state.currentText);
      return {
        arr: arrCopy,
        currentText: '',
      };
    case 'HANDLE_DELETE':
      console.log('delete', action.payload);
      const delCopy = state.arr.filter((ele, i) => i != action.payload )
      return {
        ...state,
        arr: delCopy
      };
    default:
      return state;
  }
};
