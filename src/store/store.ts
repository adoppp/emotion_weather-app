import { configureStore } from "@reduxjs/toolkit";
import { weatherReducer } from "@/store/reducers/weatherSlice";
// import storage from 'redux-persist/lib/storage';
// import {
//     persistReducer,
//     persistStore,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from 'redux-persist';

// import { themeReducer } from "@storage/reducers/themeSlice";

// const themePersistConfig = {
//     key: 'theme',
//     storage,
//     whitelist: ['theme'],
// };

export const store = configureStore({
    reducer: {
        currentWeather: weatherReducer,
    },
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware({
    //         serializableCheck: {
    //             ignoredActions: [
    //                 FLUSH,
    //                 REHYDRATE,
    //                 PAUSE,
    //                 PERSIST,
    //                 PURGE,
    //                 REGISTER,
    //             ],
    //         },
    //     })
},
);

// export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;