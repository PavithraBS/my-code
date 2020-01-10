import { client } from './actionindex';

export function getVisitorDetails() {
    return dispatch => {
      dispatch({
        type: 'GET_VISITOR_DETAILS',
        payload: client.get('/menu/getVisitorDetails')
  
      })
    }
}

export function visitorHistoryDetails(startDate,endDate) {
  return dispatch => {
    dispatch({
      type: 'VISITOR_HISTORY_DETAILS',
      payload: client.get('/menu/visitorHistoryDetails',{
        params: {
          startDate: startDate,
          endDate: endDate
      }})

    })
  }

 

 
}