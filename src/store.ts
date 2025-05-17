import { charactersAPI } from '@/features/characters/charactersAPI';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import themeReducer from '@/features/theme/themeSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['charactersAPI', 'theme'] // Persist both characters API cache and theme preference
};

const rootReducer = combineReducers({
  [charactersAPI.reducerPath]: charactersAPI.reducer,
  theme: themeReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE']
      }
    }).concat(charactersAPI.middleware)
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
