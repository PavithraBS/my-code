const defaultState = {
    visitorDetails:[],
    visitorHistoryDetails:[],
    getDateHistoryDetails:[],
    loading:false,
}
    const abc= (state = defaultState, action) => {
        switch (action.type) {

    case "GET_VISITOR_DETAILS_FULFILLED":{
        console.log('reducer',action.payload.data)
        return{
          ...state,
          visitorDetails: [...state.visitorDetails,action.payload.data],
          loading:true
        }
      }

      case "VISITOR_HISTORY_DETAILS_PENDING":{
       
        return{
          ...state,
          visitorHistoryDetails: [],
          loading:false
        }
      }


      case "VISITOR_HISTORY_DETAILS_FULFILLED":{
        console.log('reducer',action.payload.data)
        return{
          ...state,
          visitorHistoryDetails: [...state.visitorHistoryDetails,action.payload.data],
          loading:true
        }
      }

      
      default:
        return state;

    }
}
export default abc;