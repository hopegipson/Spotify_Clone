const musicReducer = (state = { songs: [], playingRecordingId: " ",  loading: false }, action) => {
    switch(action.type) {
      case 'LOADING_SONGS':
        return {
         // ...state,
         // cats: [...state.cats],
         // loading: true
        }
      case 'ADD_SONGS':
        return {
         // ...state,
         // cats: action.cats,
        //  loading: false
        }
      default:
        return state;
    }
  }
  
  export default musicReducer; 