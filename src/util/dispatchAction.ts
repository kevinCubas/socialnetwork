import { Action, AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { store, RootState } from "../redux/store"

type DispatchAction = (action: AnyAction | ThunkAction<void, RootState, unknown, Action<string>>) => void;

export const dispatchAction: DispatchAction = (action) => {
  store.dispatch(action)
  return
}