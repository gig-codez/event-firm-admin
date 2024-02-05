import { Dispatch } from "redux"

export const ThemeChanger = (value: any) => async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    dispatch({
        type: "ThemeChanger",
        payload: value
    })
  }
export const AddToCart = (value:string) => async (dispatch: Dispatch) =>{
    dispatch({
        type: "ADD_TO_CART",
        payload: value
    })
}

export const SwitcherAction = (Actiontype:string)=> async (dispatch: Dispatch) =>{
    dispatch({
        type:Actiontype
    })
}

export const changePrimaryColor = (value:string) => async (dispatch: Dispatch) =>{
    dispatch({
        type: "lightPrimaryColor",
        payload: value
    })
}

export const darkPrimaryColor = (value:string) => async (dispatch: Dispatch) =>{
    dispatch({
        type: "darkPrimaryColor",
        payload: value
    })
}