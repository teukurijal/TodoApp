const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    data: []
  };
  
  const reducerseTodos = (state = initialState, action) => {
      console.log("THISACTIONS",action.payload)
    switch (action.type) {
      case 'GET_TODOS_PENDING':
        return {
          ...state,
          isLoading: true
        };
  
      case 'GET_TODOS_FULFILLED':
        return {
          ...state,
          isSuccess: true,
          isLoading: false,
          data: action.payload.data
        };
        
      case 'GET_TODOS_REJECTED':
        return {
          ...state,
          isLoading: false,
          isError: true
        };
      default:
        return state;
    }
  };
  
  export default reducerseTodos