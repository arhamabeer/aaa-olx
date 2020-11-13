import reducer from './Reducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'


// const persistConfig = {
//     key: 'root',
//     storage,
// }

// const persistedReducer = persistReducer(persistConfig, reducer, applyMiddleware(thunk))


// export default () => {
//     const store = createStore(persistedReducer);
//     let persistor = persistStore(store)


//     return { store, persistor }
// }



const store = createStore(reducer , applyMiddleware(thunk))

export default store