import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import {artworksApi} from "./artworks/artworks.api";
import {artworksReducer} from "./artworks/artworks.slice";
import { githubApi } from './github/github.api';
import { githubReducer } from './github/github.slice';
import {userReducer} from "./users/user.slice";


const rootReducer = combineReducers({
  [githubApi.reducerPath]: githubApi.reducer,
  github: githubReducer,
  [artworksApi.reducerPath]: artworksApi.reducer,
  artworks: artworksReducer,
  user: userReducer
})
/*export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(githubApi.middleware).concat(artworksApi.middleware)
})*/
export const setupStore = () => {
  return configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(githubApi.middleware).concat(artworksApi.middleware)
})}

/*setupListeners(store.dispatch)*/

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']