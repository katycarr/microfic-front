export const fetchStories = () => {
  return (dispatch) => {
    dispatch({
      type: 'FETCH_STORIES_START'
    })
    fetch('http://localhost:3000/fics')
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: 'FETCH_STORIES_DONE',
          payload: json
        })
      })
  }
}
