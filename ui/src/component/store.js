import { applyMiddleware, createStore } from "redux";
import  logger  from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import abc from "./reducer";


const isProduction = process.env.NODE_ENV === 'production';
let middleware = null;
if (isProduction) {
    // In production adding only thunk middleware
    middleware = applyMiddleware(thunk, promise);
  
} else {
    //devolopment mode 
    middleware = applyMiddleware(thunk, promise, logger);
  
}

//const middleware = applyMiddleware(promise(),logger, thunk)

export default createStore(abc, middleware)