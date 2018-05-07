const initialState = {
  all: []
}

export function ficsReducer(state=initialState, action) {
  switch(action.type) {
    case 'FETCH_STORIES_DONE':
      return {...state, all: action.payload}
    case 'CREATE_FIC_DONE':
      return {...state, all: [...state.all, action.payload]}
    default:
      return {...state}
  }
}
