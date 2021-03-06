import { baseUrl } from './base'

export const fetchStories = () => {
  return (dispatch) => {
    dispatch({
      type: 'FETCH_STORIES_START'
    })
    fetch(baseUrl+'/fics')
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: 'FETCH_STORIES_DONE',
          payload: json
        })
      })
  }
}

export const createFic = ({title, summary, story}, token) => {
  return(dispatch) => {
    dispatch({
      type: 'CREATE_FIC_START'
    })
    let options = {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        Accept:'application/json',
        'Authorization': token
      },
      body: JSON.stringify({fic: {title, summary, story}})
    }
    fetch(baseUrl+'/fics', options)
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: 'CREATE_FIC_DONE',
          payload: json
        })
      })
  }
}
