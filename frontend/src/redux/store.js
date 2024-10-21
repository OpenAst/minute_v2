import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';

const store = configureStore({
    reducer: {
        auth: rootReducer,
    }
});

export default store;
