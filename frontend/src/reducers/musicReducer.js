const musicReducer = (state = { songs: [], albums: [], playingRecordingId: " ",  loading: false, token: " " }, action) => {
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
      case 'SET_TOKEN':
          return{
            ...state,
            token: action.payload
          }
      default:
        return state;
    }
  }
  
  export default musicReducer; 