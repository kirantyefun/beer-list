const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ERROR":
      return {
        ...state,
        error: null
      }
    case "SET_ISLOADING":
      return {
        ...state,
        isLoading: true,
      }
    case "FETCH_DATA_REQUEST":
      return {
        ...state,
        isLoading: true,
        error: null
      }
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        beers: [...state.beers, ...action.payload.beers],
        page: action.payload.page,
        isLoading: false,
      }
    case "FETCH_DATA_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    case "ADD_CUSTOM_BEER":
      return {
        ...state,
        customBeers: [...state.customBeers, {...action.payload}]
      }
    default:
      return {
        ...state
      }
    
  }
};

export default reducer;