
let initialState = {
  lang: "en",
  dir: "ltr",
  dataMenuStyles:"dark",
  dataThemeMode:"light",
  dataNavLayout:"vertical",
  dataNavStyle:"",
  dataToggled:"",
  dataIconOverlay:"",
  horStyle:"",
  dataPageStyle:"regular",
  dataWidth:"fullwidth",
  dataMenuPosition:"fixed",
  dataHeaderPosition:"fixed",
  dataHeaderStyles:"light",
  colorPrimaryRgb:"",
  dataVerticalStyle:"overlay",
   bodyBg:"",bodyBg1:"", darkBg:"", bgImg:"",bgImg1:"",lightRgb:"",formControl:"",inputBorder:"",sidemenuActiveBgcolor:"",
   dataBgImage:"",
        iconText:"",
        body:{
            class:""
        }

};

export default function reducer(state = initialState, action: { type: any; payload: any; }) {
let { type, payload } = action;

switch (type) {

case "ThemeChanger":
state = payload
return state

default:
return state;
}
}