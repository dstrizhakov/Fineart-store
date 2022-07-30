import {useDispatch} from 'react-redux'
import {bindActionCreators} from '@reduxjs/toolkit'
import {githubActions} from '../store/github/github.slice'
import {artworksActions} from "../store/artworks/artworks.slice";
import {useAppDispatch} from "./redux";

const actions = {
  ...githubActions,
  ...artworksActions
}

export const useActions = () => {
  const dispatch = useAppDispatch()
  return bindActionCreators(actions, dispatch)
}