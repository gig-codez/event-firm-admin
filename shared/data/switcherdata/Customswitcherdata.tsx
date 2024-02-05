import store from "@/shared/redux/store";
import { ClassAttributes, InputHTMLAttributes, JSX, useState } from "react";

//LTR TO RTL
  export const LtrtoRtl = (): void => {
    document.querySelector("body")!.classList.add("rtl");
    document.querySelector("html")!.setAttribute("dir", "rtl");
    document.querySelector("body")!.classList.remove("ltr");
    localStorage.setItem("SpruhaLtrtoRtl", "true");
    localStorage.removeItem("SpruhaRtltoLtr");
  };
  //RTL TO LTR
  export const RtltoLtr = (actionfunction:any): void => {
    console.log("Working");
    
    const theme = store.getState()
    actionfunction({...theme,"dir":"rtl"})
    localStorage.setItem("SpruhaRtltoLtr", "true");
    localStorage.removeItem("SpruhaLtrtoRtl");
  };
  export function Dark(actionfunction:any) {
    const theme = store.getState()
    actionfunction({
      ...theme,
      "dataThemeMode": "dark",
      "dataHeaderStyles": "dark",
      "dataMenuStyles": "dark"
    })
    localStorage.setItem("Spruhadarktheme", "dark");
    localStorage.removeItem("Spruhalighttheme");
}
export function Light(actionfunction: any) {
    const theme = store.getState()
    actionfunction({
      ...theme,
      "dataThemeMode": "light",
      "dataHeaderStyles": "light",
      "dataMenuStyles": theme.dataNavLayout == 'horizontal' ? 'light' : "dark",
      class: ""
    })
    localStorage.setItem("Spruhalighttheme", "light");
    localStorage.removeItem("Spruhadarktheme")
}
export const HorizontalClick = (actionfunction: any) => {
  const theme = store.getState()
  actionfunction({...theme,
  "dataNavLayout":"horizontal",
  "dataMenuStyles": theme.dataThemeMode == 'dark' ? 'dark': "light",
  "dataVerticalStyle":""})
  localStorage.setItem("Spruhalayout", "horizontal");
};
export const Vertical = (actionfunction:any) => {
  const theme = store.getState()
  actionfunction({...theme,
      "dataNavLayout":"vertical",
      "dataMenuStyles":"dark",
      "dataVerticalStyle":"overlay",
      "dataToggled":""
  })
  localStorage.setItem("Spruhalayout", "vertical");
};
  //LIGHTHEADER
  export const Lightheader = (): void => {
    document.querySelector("body")!.classList.remove("color-header");
    document.querySelector("body")!.classList.remove("header-dark");
    document.querySelector("body")!.classList.add("light-header");
  };
  //COLORHEADER
  export const Colorheader = (): void => {
    document.querySelector("body")!.classList.remove("header-dark");
    document.querySelector("body")!.classList.remove("light-header");
    document.querySelector("body")!.classList.add("color-header");
  };
export const Menuclick = (actionfunction: any) => {
  const theme = store.getState()
  actionfunction({...theme,
      "dataNavStyle":"menu-click",
      "dataVerticalStyle":"",
      "dataToggled":"menu-click-closed",
  })
  localStorage.setItem("Spruhanavstyles", "menu-click");
};
export const MenuHover = (actionfunction: any) => {
  const theme = store.getState()
  actionfunction({...theme,
      "dataNavStyle":"menu-hover",
      "dataVerticalStyle":"",
      "dataToggled":"menu-hover-closed",
      "horStyle":""
  })
  localStorage.setItem("Spruhanavstyles", "menu-hover");
};
export const IconClick = (actionfunction: any) => {
  const theme = store.getState()
  actionfunction({...theme,
      "dataNavStyle":"icon-click",
      "dataVerticalStyle":"",
      "dataToggled":"icon-click-closed",
  })
  localStorage.setItem("Spruhanavstyles", "icon-click");
};
export const IconHover = (actionfunction: any) => {
  const theme = store.getState()
  actionfunction({...theme,
      "dataNavStyle":"icon-hover",
      "dataVerticalStyle":"",
      "dataToggled":"icon-hover-closed"
  })
  localStorage.setItem("Spruhanavstyles", "icon-hover");
};
export const Regular = (actionfunction: any) => {
  const theme = store.getState()
  actionfunction({...theme,
      "dataPageStyle":"regular"
  })
  localStorage.setItem("Spruharegular", "Regular");
  localStorage.removeItem("Spruhaclassic");
  localStorage.removeItem("Spruhamodern");

};
export const Classic = (actionfunction: any) => {
  const theme = store.getState()
  actionfunction({...theme,
      "dataPageStyle":"classic",
  })
  localStorage.setItem("Spruhaclassic", "Classic");
  localStorage.removeItem("Spruharegular");
  localStorage.removeItem("Spruhamodern");

};
export const Modern = (actionfunction: any) => {
  const theme = store.getState()
  actionfunction({...theme,
      "dataPageStyle":"modern",
  })
  localStorage.setItem("Spruhamodern", "Modern");
  localStorage.removeItem("Spruhaclassic");
  localStorage.removeItem("Spruharegular");
};
export const Fullwidth = (actionfunction: any) => {
  const theme = store.getState()
  actionfunction({...theme,
      "dataWidth":"fullwidth",
  })
  localStorage.setItem("Spruhafullwidth", "Fullwidth");
  localStorage.removeItem("Spruhaboxed");

};
export const Boxed = (actionfunction: (any)) => {
  const theme = store.getState()
  actionfunction({...theme,
      "dataWidth":"boxed",
  })
  localStorage.setItem("Spruhaboxed", "Boxed");
  localStorage.removeItem("Spruhafullwidth");
};
export const FixedMenu = (actionfunction:any) => {
  const theme = store.getState()
  actionfunction({...theme,
      "dataMenuPosition":"fixed",
  })
  localStorage.setItem("Spruhamenufixed", "MenuFixed");
  localStorage.removeItem("Spruhamenuscrollable");
};
export const scrollMenu = (actionfunction:any) => {
  const theme = store.getState()
  actionfunction({...theme,
      "dataMenuPosition":"scrollable",
  })
  localStorage.setItem("Spruhamenuscrollable", "Menuscrolled");
  localStorage.removeItem("Spruhamenufixed")
};
export const Headerpostionfixed = (actionfunction: any) => {
  const theme = store.getState()
  actionfunction({...theme,
      "dataHeaderPosition":"fixed",
  })
  localStorage.setItem("Spruhaheaderfixed", 'FixedHeader');
  localStorage.removeItem("Spruhaheaderscrollable");
};
export const Headerpostionscroll = (actionfunction: any) => {
  const theme = store.getState()
  actionfunction({...theme,
      "dataHeaderPosition":"scrollable",
  })
  localStorage.setItem("Spruhaheaderscrollable", "ScrollableHeader");
  localStorage.removeItem("Spruhaheaderfixed");
};
export const lightMenu = (actionfunction:any) => {
  const theme = store.getState()
  actionfunction({...theme,
      "dataMenuStyles":"light",
  })
  localStorage.setItem("SpruhaMenu", "light");
  localStorage.removeItem("light");
};

export const darkMenu = (actionfunction: (arg0: {
    dataMenuStyles: string; lang: string //LTR TO RTL
      ; dir: string; dataThemeMode: string; dataNavLayout: string;
  }) => void) => {
  const theme = store.getState()
  actionfunction({...theme,
      "dataMenuStyles":"dark",
  })
  localStorage.setItem("SpruhaMenu", "dark");
  localStorage.removeItem("light");
};
export const colorMenu = (actionfunction:any) => {
  const theme = store.getState()
  actionfunction({...theme,
      "dataMenuStyles":"color",
  })
  localStorage.setItem("SpruhaMenu", "color");
  localStorage.removeItem("light");
  localStorage.removeItem("dark");
  localStorage.removeItem("gradient");
};
export const gradientMenu = (actionfunction:any) => {
  const theme = store.getState()
  actionfunction({...theme,
      "dataMenuStyles":"gradient",
  })
  localStorage.setItem("SpruhaMenu", "gradient");
  localStorage.removeItem("color");
};
export const transparentMenu = (actionfunction:any) => {
  const theme = store.getState()
  actionfunction({...theme,
      "dataMenuStyles":"transparent",
  })
  localStorage.setItem("SpruhaMenu", "transparent");
  localStorage.removeItem("gradient");
};


export const lightHeader = (actionfunction: any) => {
  const theme = store.getState()
  actionfunction({...theme,
      "dataHeaderStyles":"light",
  })
  localStorage.setItem("SpruhaHeader", "light");
  localStorage.removeItem("dark");
};
export const darkHeader = (actionfunction: any) => {
  const theme = store.getState()
  actionfunction({...theme,
      "dataHeaderStyles":"dark",
  })
  localStorage.setItem("SpruhaHeader", "dark");
  localStorage.removeItem("light");
};
export const colorHeader = (actionfunction: any) => {
  const theme = store.getState()
  actionfunction({...theme,
      "dataHeaderStyles":"color",
  })
  localStorage.removeItem("dark");
  localStorage.setItem("SpruhaHeader", "color");
};
export const gradientHeader = (actionfunction: any) => {
  const theme = store.getState()
  actionfunction({...theme,
      "dataHeaderStyles":"gradient",
  })
  localStorage.removeItem("transparent");
  localStorage.setItem("SpruhaHeader", "gradient");
};
export const transparentHeader = (actionfunction: any) => {
  const theme = store.getState()
  actionfunction({...theme,
      "dataHeaderStyles":"transparent",
  })
  localStorage.removeItem("gradient");
  localStorage.setItem("SpruhaHeader", "transparent");
};

export const primaryColor1 = (actionfunction: any) => {
  const theme = store.getState()
  actionfunction({...theme,
      "colorPrimaryRgb":"58, 88, 146",
  })
  localStorage.setItem("primaryRGB", "58, 88, 146");
  localStorage.setItem("primaryRGB1", "58 88 146");
};
export const primaryColor2 = (actionfunction: any) => {
  const theme = store.getState()
  actionfunction({...theme,
      "colorPrimaryRgb":"92, 144, 163",
  })
  localStorage.setItem("primaryRGB", "92, 144, 163");
  localStorage.setItem("primaryRGB1", "92 144 163");
};
export const primaryColor3 = (actionfunction: any) => {
  const theme = store.getState()
  actionfunction({...theme,
    "colorPrimaryRgb":"161, 90, 223",
})
localStorage.setItem("primaryRGB", "161, 90, 223");
localStorage.setItem("primaryRGB1", "161, 90, 223");
};
export const primaryColor4 = (actionfunction: any) => {
  const theme = store.getState()
  actionfunction({...theme,
      "colorPrimaryRgb":"78, 172, 96",
  })
  localStorage.setItem("primaryRGB", "78, 172, 96");
  localStorage.setItem("primaryRGB1", "78, 172, 96");
};
export const primaryColor5 = (actionfunction: any) => {
  const theme = store.getState()
  actionfunction({...theme,
      "colorPrimaryRgb":"223, 90, 90",
  })
  localStorage.setItem("primaryRGB", "87, 68, 117");
  localStorage.setItem("primaryRGB1", "87 68 117");
};

export const backgroundColor1 = (actionfunction:any) => {
  const theme = store.getState()
  actionfunction({...theme,
    "bodyBg":"20 30 96",
    "bodyBg1":"43 52 111",
    "formControl":"43 52 111",
    "inputBorder":"255 255 255 0.1",
    "sidemenuActiveBgcolor":"43 52 111",
    "dataThemeMode":"dark",
    "dataHeaderStyles":"dark"
  })
  localStorage.setItem('darkBgRGB', "20, 30, 96");
  localStorage.removeItem("darkBgRGB");
};
export const backgroundColor2 = (actionfunction: any) => {
  const theme = store.getState()
  actionfunction({...theme,
    "bodyBg":"8 78 115",
    "bodyBg1":"32 95 128",
    "formControl":"32 95 128",
    "inputBorder":"255 255 255 0.1",
    "sidemenuActiveBgcolor":"32 95 128",
    "dataThemeMode":"dark",
    "dataHeaderStyles":"dark"
  })
  localStorage.setItem('darkBgRGB', "8 78 115");
  localStorage.removeItem("50 62 93");
};
export const backgroundColor3 = (actionfunction:any) => {
  const theme = store.getState()
  actionfunction({...theme,
    "bodyBg":"90 37 135",
    "bodyBg1":"106 58 146",
    "formControl":"106 58 146",
    "inputBorder":"255 255 255 0.1",
    "sidemenuActiveBgcolor":"106 58 146",
    "dataThemeMode":"dark",
    "dataHeaderStyles":"dark"
  })
  localStorage.setItem('bodyBg', "90 37 135");
  localStorage.setItem('bodyBg1', "106 58 146");
  localStorage.setItem('formControl', "90 37 135");
  localStorage.setItem('inputBorder', "106 58 146");
  localStorage.setItem('sidemenuActiveBgcolor', "90 37 135");
  localStorage.setItem('dataThemeMode', "106 58 146");
  

};
export const backgroundColor4 = (actionfunction: any) => {
  const theme = store.getState()
  actionfunction({...theme,
    "bodyBg":"24 101 51",
    "bodyBg1":"46 116 71",
    "formControl":"46 116 71",
    "inputBorder":"255 255 255 0.1",
    "sidemenuActiveBgcolor":"46 116 71",
    "dataThemeMode":"dark",
    "dataHeaderStyles":"dark"
  })
  localStorage.setItem('darkBgRGB', "24 101 51");
};
export const backgroundColor5 = (actionfunction: any) => {
  const theme = store.getState()
  actionfunction({...theme,
    "bodyBg":"120 66 20",
    "bodyBg1":"133 84 43",
    "formControl":"133 84 43",
    "inputBorder":"255 255 255 0.1",
    "sidemenuActiveBgcolor":"133 84 43",
    "dataThemeMode":"dark",
    "dataHeaderStyles":"dark"
   
  })
  localStorage.setItem('darkBgRGB', "107 64 64");
};
export const BgImage1 = (actionfunction:any) => {
  const theme = store.getState()
  actionfunction({...theme,
      "dataBgImage":"bgimg1",
  })
  localStorage.setItem("SpruhaImage","bgimg1");
};
export const BgImage2 = (actionfunction:any) => {
  const theme = store.getState()
  actionfunction({...theme,
      "dataBgImage":"bgimg2",
  })
  localStorage.setItem("SpruhaImage","bgimg3");
};
export const BgImage3 = (actionfunction:any) => {
  const theme = store.getState()
  actionfunction({...theme,
      "dataBgImage":"bgimg3",
  })
  localStorage.setItem("SpruhaImage","bgimg3");
};
export const BgImage4 = (actionfunction:any) => {
  const theme = store.getState()
  actionfunction({...theme,
      "dataBgImage":"bgimg4",
  })
  localStorage.setItem("SpruhaImage","bgimg4");
};
export const BgImage5 = (actionfunction:any) => {
  const theme = store.getState()
  actionfunction({...theme,
      "dataBgImage":"bgimg5",
  })
  localStorage.setItem("SpruhaImage","bgimg5");
};
const ColorPicker = (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLInputElement>) => {
  return (
      <div className="color-picker-input">
          <input type="color" {...props} />
      </div>
  );
};

function hexToRgb(hex: string) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
  } : null;
}
function hexToRgb1(hex: string) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
      a: parseInt(result[3], 0.1)
  } : null;
}
//themeprimarycolor
type RgbObject = { r: number; g: number; b: number } | null;

type ActionFunctionType = (theme: any) => void;
export const Themeprimarycolor = ({actionfunction}: { actionfunction: ActionFunctionType }) => {
  const theme = store.getState()
  const [state, updateState] = useState("#FFFFFF");
  const handleInput = (e:any) => {
    const result: RgbObject = hexToRgb(e.target.value);
if(result){

  let { r, g, b } = result
  updateState(e.target.value);
  actionfunction({...theme,
      "colorPrimaryRgb":`${r} ${g} ${b}`,
  })
  localStorage.setItem("dynamiccolor", `${r} ${g} ${b}`)
}
  };
  return (
      <div className="Themeprimarycolor">
          <ColorPicker onChange={handleInput} value={state} />
      </div>
  );
};
//themeBackground
type RgbObject1 = { r: number; g: number; b: number;a:number } | null;

export const Themebackgroundcolor = ({actionfunction}: { actionfunction: ActionFunctionType }) => {
  const theme = store.getState()
  const [state, updateState] = useState("#FFFFFF");
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      // let { r, g, b } = hexToRgb(e.target.value)
      const result: RgbObject1 = hexToRgb1(event.target.value);
if(result){

  let { r, g, b ,a} = result
  updateState(event.target.value);
  actionfunction({...theme,
      "bodyBg":`${r} ${g} ${b} ${a}`,
      "bodyBg1":`${r} ${g} ${b} `,
      "formControl":`${r} ${g} ${b}`,
      "inputBorder":`${r} ${g} ${b} ${a}`,
      "sidemenuActiveBgcolor":`${r} ${g} ${b}`,
      "dataThemeMode":"dark",
      "dataHeaderStyles":"dark"
  })
  localStorage.setItem("Dynamicbackground", `${r} ${g} ${b} ${a}`)
}

  };
  return (
      <div className="Themebackgroundcolor">
          <ColorPicker onChange={handleInput} value={state} />
      </div>
  );
}


  export function checkHoriMenu(): void {
    const menuWidth = document.querySelector(".hor-menu") as HTMLElement;
  const menuItems = document.querySelector(".menu-nav") as HTMLElement;
  const mainSidemenuWidth = document.querySelector(".main-sidemenu") as HTMLElement;
  const menuContainerWidth = menuWidth?.offsetWidth - mainSidemenuWidth?.offsetWidth;
  const marginLeftValue = Math.ceil(Number(window.getComputedStyle(menuItems).marginLeft.split("px")[0]));
  const marginRightValue = Math.ceil(Number(window.getComputedStyle(menuItems).marginRight.split("px")[0]));
  const check = menuItems.scrollWidth + (0 - (menuWidth?.offsetWidth ?? 0)) + (menuContainerWidth ?? 0);

  if (document.querySelector(".main-body")?.classList.contains("ltr")) {
    menuItems.style.marginRight = "0";
  } else {
    menuItems.style.marginLeft = "0";
  }

  if (menuItems.scrollWidth - 2 < (menuWidth?.offsetWidth ?? 0) - (menuContainerWidth ?? 0)) {
    document.querySelector(".slide-left")?.classList.add("d-none");
    document.querySelector(".slide-right")?.classList.add("d-none");
    document.querySelector(".slide-leftRTL")?.classList.add("d-none");
    document.querySelector(".slide-rightRTL")?.classList.add("d-none");
  } else if (marginLeftValue !== 0 || marginRightValue !== 0) {
    document.querySelector(".slide-right")?.classList.remove("d-none");
    document.querySelector(".slide-rightRTL")?.classList.remove("d-none");
  } else if (marginLeftValue !== -check || marginRightValue !== -check) {
    document.querySelector(".slide-left")?.classList.remove("d-none");
    document.querySelector(".slide-leftRTL")?.classList.remove("d-none");
  }

  if (menuItems.scrollWidth - 2 > (menuWidth?.offsetWidth ?? 0) - (menuContainerWidth ?? 0)) {
    document.querySelector(".slide-left")?.classList.remove("d-none");
    document.querySelector(".slide-right")?.classList.remove("d-none");
    document.querySelector(".slide-leftRTL")?.classList.remove("d-none");
    document.querySelector(".slide-rightRTL")?.classList.remove("d-none");
  }

  if (marginLeftValue === 0 || marginRightValue === 0) {
    document.querySelector(".slide-left")?.classList.add("d-none");
    document.querySelector(".slide-leftRTL")?.classList.add("d-none");
  }

  if (marginLeftValue !== 0 || marginRightValue !== 0) {
    document.querySelector(".slide-left")?.classList.remove("d-none");
    document.querySelector(".slide-leftRTL")?.classList.remove("d-none");
  }
  }

  export function handleThemeUpdate(cssVars: { [key: string]: string | null }): void {
    const root = document.querySelector(":root") as HTMLElement;
    if (root) {
      const keys = Object.keys(cssVars);
      keys.forEach((key) => {
        const value = cssVars[key];
        if (value !== null) {
          root.style.setProperty(key, value);
        }
      });
    }
  }
// to check the value is hexa or not
const isValidHex = (hexValue: string): boolean => /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hexValue);

const getChunksFromString = (st: string, chunkSize: number): RegExpMatchArray | null =>
  st.match(new RegExp(`.{${chunkSize}}`, "g"));
// convert hex value to 256
const convertHexUnitTo256 = (hexStr: string): number =>
  parseInt(hexStr.repeat(2 / hexStr.length), 16);
// get alpha value is equla to 1 if there was no value is asigned to alpha in function
const getAlphafloat = (a: number | undefined, alpha: number): number => {
  if (typeof a !== "undefined") {
    return a / 255;
  }
  if (typeof alpha !== "number" || alpha < 0 || alpha > 1) {
    return 1;
  }
  return alpha;
};
  // convertion of hex code to rgba code
  export function hexToRgba(hexValue: string, alpha = 1): string | null {
    if (!isValidHex(hexValue)) {
      return null;
    }
    const chunkSize = Math.floor((hexValue.length - 1) / 3);
    const hexArr = getChunksFromString(hexValue.slice(1), chunkSize);
    if (!hexArr) {
      return null;
    }
    const [r, g, b, a] = hexArr.map(convertHexUnitTo256);
    return `rgba(${r}, ${g}, ${b}, ${getAlphafloat(a, alpha)})`;
  }

  
  export function resetData(actionfunction: { actionfunction: ActionFunctionType }): void {
    const li = document.querySelectorAll(".menu-icon");
    const body = document.querySelector("body");
    const mainContainer = document.querySelectorAll(".main-container");
    const mainContent = document.querySelector(".main-content");
    const mainMenu = document.querySelector(".main-menu");
    const mainHeader = document.querySelector(".main-header");

    const mainContainer1 = document.querySelector(".main-container-1");

    
  
    body?.classList.remove("dark-theme");
    mainContainer.forEach((e) => {
      e.classList.remove("container");
      e.classList.add("container-fluid");
    });
    body?.classList.add("leftmenu");
    body?.classList.add("main-body");
    mainContent?.classList.add("side-content");
    mainMenu?.classList.add("main-sidebar", "main-sidebar-sticky", "side-menu");
    mainContainer1?.classList.add("main-sidebar-header");
    document.querySelector(".main-body-1")?.classList.add("main-sidebar-body");
    const theme = store.getState()
    const Vertical = (actionfunction: {
        (arg0: {
          lang: string; dir: string; dataThemeMode: string; dataMenuStyles: string; dataNavLayout: string; dataHeaderStyles: string; dataVerticalStyle: string; StylebodyBg: string; StyleDarkBg: string; toggled: string; dataNavStyle: string; horStyle: string; dataPageStyle: string; dataWidth: string; dataMenuPosition: string; dataHeaderPosition: string; iconOverlay: string; colorPrimaryRgb: string; bodyBg: string; darkBg: string; bgImg: string; iconText: string; body //RTL TO LTR
            : { class: string; }; dataToggled: string; dataIconOverlay: string; bodyBg1: string; bgImg1: string; lightRgb: string; formControl: string; inputBorder: string; sidemenuActiveBgcolor: string; dataBgImage: string;
        }): void; actionfunction?: ActionFunctionType;
      }) => {
      const theme = store.getState();
    actionfunction({...theme,
        lang: "en",
        dir: "ltr",
        dataThemeMode: "light",
        dataMenuStyles: "dark",
        dataNavLayout: "vertical",
        dataHeaderStyles: "light",
        dataVerticalStyle: "overlay",
        StylebodyBg:"107 64 64",
        StyleDarkBg:"93 50 50",
        toggled:"closed",
        dataNavStyle:"",
        horStyle:"",
        dataPageStyle:"regular",
        dataWidth:"fullwidth",
        dataMenuPosition:"fixed",
        dataHeaderPosition:"fixed",
        iconOverlay:"",
        colorPrimaryRgb:"",
        bodyBg:"",
        darkBg:"",
        bgImg:"",
        iconText:"",
        body:{
            class:""
        }
    })
  }

    localStorage.clear();

    li.forEach((e) => e.classList.add("sidemenu-icon"));
  
    if (typeof window !== "undefined") {
      primaryOpacityVaue();
    }
  }
  export function primaryOpacityVaue(): void  {
    let primaryColorVal = getComputedStyle(document.documentElement)
    .getPropertyValue("--primary-bg-color")
    .trim();
    let myVarVal = localStorage.getItem("SpruhaprimaryColor") || localStorage.getItem("SpruhadarkPrimary") || primaryColorVal;

    let colorData05 = hexToRgba(myVarVal || primaryColorVal, 0.05);
    document.querySelector('html')!.style.setProperty('--primary005', colorData05);

    let colorData1 = hexToRgba(myVarVal || primaryColorVal, 0.2);
    document.querySelector('html')!.style.setProperty('--primary02', colorData1);

    let colorData2 = hexToRgba(myVarVal || primaryColorVal, 0.3);
    document.querySelector('html')!.style.setProperty('--primary03', colorData2);

    let colorData5 = hexToRgba(myVarVal || primaryColorVal, 0.5);
    document.querySelector('html')!.style.setProperty('--primary05', colorData5);

    let colorData3 = hexToRgba(myVarVal || primaryColorVal, 0.7);
    document.querySelector('html')!.style.setProperty('--primary07', colorData3);

    let colorData4 = hexToRgba(myVarVal || primaryColorVal, 0.8);
    document.querySelector('html')!.style.setProperty('--primary08', colorData4);

    let colorData6 = hexToRgba(myVarVal || primaryColorVal, 0.1);
    document.querySelector('html')!.style.setProperty('--primary01', colorData6);

    let colorData9 = hexToRgba(myVarVal || primaryColorVal, 0.9);
    document.querySelector('html')!.style.setProperty('--primary09', colorData9);
  }
  if (typeof window !== "undefined"){
    primaryOpacityVaue();
  }
  export const localStorageBackUp = (actionfunction:any)  => {
    (localStorage.Spruhadarktheme) ? Dark(actionfunction) : "";
    (localStorage.Spruhalighttheme) ? Light(actionfunction) : "";
    (localStorage.Spruhartl) ? RtltoLtr(actionfunction) : "";
    (localStorage.Spruharegular) ? Regular(actionfunction) : "";
    (localStorage.Spruhaclassic) ? Classic(actionfunction) : "";
    (localStorage.Spruhafullwidth) ? Fullwidth(actionfunction) : "";
    (localStorage.Spruhaboxed) ? Boxed(actionfunction) : "";
    (localStorage.Spruhamenufixed) ? FixedMenu(actionfunction) : "";
    (localStorage.Spruhamenuscrollable) ? scrollMenu(actionfunction) : "";
    (localStorage.Spruhaheaderfixed) ? Headerpostionfixed(actionfunction) : "";
    (localStorage.Spruhaheaderscrollable) ? Headerpostionscroll(actionfunction) : "";

    (localStorage.Spruhanavstyles === "menu-click") ? Menuclick(actionfunction) : '';
    (localStorage.Spruhanavstyles === "menu-hover") ? MenuHover(actionfunction) : '';
    (localStorage.Spruhanavstyles === "icon-click") ? IconClick(actionfunction) : '';
    (localStorage.Spruhanavstyles === "icon-hover") ? IconHover(actionfunction) : '';


    (localStorage.Spruhalayout == 'horizontal') && HorizontalClick(actionfunction);

    // ThemeColor MenuColor Start
    switch (localStorage.SpruhaMenu) {
        case 'light':
            // lightTheme();
            break;
        case 'dark':
            Dark(actionfunction);
    
            break;
        case 'color':
            colorMenu(actionfunction);
    
            break; 
        case 'gradient':
            gradientMenu(actionfunction);
    
            break;
        case 'transparent':
            transparentMenu(actionfunction);
    
            break;
        default:
            break;
    }
    // ThemeColor MenuColor End

    // ThemeColor Header Colors: start
    switch (localStorage.SpruhaHeader) {
        case 'light':
            lightHeader(actionfunction);
    
            break;
        case 'dark':
            darkHeader(actionfunction);
    
            break;
        case 'color':
            colorHeader(actionfunction);
    
            break;
        case 'gradient':
            gradientHeader(actionfunction);
    
            break;
        case 'transparent':
            transparentHeader(actionfunction);
    
            break;
        default:
            break;
    }
    // ThemeColor Header Colors: End

    // Theme Primary: Colors: Start
    switch (localStorage.primaryRGB) {
        case '58, 88, 146':
            primaryColor1(actionfunction);
    
            break;
        case '92, 144, 163':
            primaryColor2(actionfunction);
    
            break;
        case '161, 90, 223':
            primaryColor3(actionfunction);
    
            break;
        case '78, 172, 96':
            primaryColor4(actionfunction);
    
            break;
        case '223, 90, 90':
            primaryColor5(actionfunction);
    
            break;
        default:
            break;
    }
    // Theme Primary: Colors: End

    switch (localStorage.darkBgRGB) {
        case '20 ,30, 96':
            backgroundColor1(actionfunction);
    
            break;
        case '81 93 50':
            backgroundColor2(actionfunction);
    
            break;
        case '93 64 107':
            backgroundColor3(actionfunction);
    
            break;
        case '64 101 107':
            backgroundColor4(actionfunction);
    
            break;
        case '107 64 64':
            backgroundColor5(actionfunction);
    
            break;
        default:
            break;
    }



    //Theme Primary:
    if (localStorage.dynamiccolor) {
        const theme = store.getState()
        actionfunction({...theme,
            "colorPrimaryRgb":localStorage.dynamiccolor,
        })
    }
    //Theme BAckground:
    if (localStorage.Dynamicbackground) {
        const theme = store.getState()
        actionfunction({...theme,
            "bodyBg":localStorage.Dynamicbackground,
            "bodyBg1":localStorage.Dynamicbackground,
            "formControl":localStorage.Dynamicbackground,
            "inputBorder":localStorage.Dynamicbackground,
            "sidemenuActiveBgcolor":localStorage.Dynamicbackground,
            "dataThemeMode":"dark",
            "dataHeaderStyles":"dark"
        })
        Dark(actionfunction)
    }
}
 
  export function switcherArrowFn() {
    const slideLeft = document.querySelector(".slide-left") as HTMLElement;
  const slideRight = document.querySelector(".slide-right") as HTMLElement;
  slideLeft.addEventListener("click", () => {
    slideClick();
  });
  slideRight.addEventListener("click", () => {
    slideClick();
  });

  function slideClick(): void {
    const slide = document.querySelectorAll(".slide");
    const sideMenuitem = document.querySelectorAll(".slide-menu__item");
    const slideMenu = document.querySelectorAll(".slide-menu");
    slide.forEach((element) => {
      if (element.classList.contains("is-expanded")) {
        element.classList.remove("is-expanded");
      }
    });
    sideMenuitem.forEach((element) => {
      if (element.classList.contains("active")) {
        element.classList.remove("active");
      }
    });
    slideMenu.forEach((element) => {
      if (element) {
        (element as HTMLElement).style.display = "none";
      }
    });
  }

  window.addEventListener("resize", () => {
    const menuWidth = document.querySelector(".hor-menu") as HTMLElement;
    const menuItems = document.querySelector(".menu-nav") as HTMLElement;
    const mainSidemenuWidth = document.querySelector(".main-body-1") as HTMLElement;
    const menuContainerWidth = menuWidth.offsetWidth - mainSidemenuWidth.offsetWidth;
    const marginLeftValue = Math.ceil(Number(window.getComputedStyle(menuItems).marginLeft.split("px")[0]));
    const marginRightValue = Math.ceil(Number(window.getComputedStyle(menuItems).marginRight.split("px")[0]));
    const check = menuItems.scrollWidth + (0 - menuWidth.offsetWidth) + menuContainerWidth;

    if (menuWidth.offsetWidth > menuItems.scrollWidth) {
      (document.querySelector(".slide-left") as HTMLElement)?.classList.add("d-none");
      (document.querySelector(".slide-right") as HTMLElement)?.classList.add("d-none");
    }
    if (menuWidth.offsetWidth > menuItems.scrollWidth) {
      (document.querySelector(".slide-leftRTL") as HTMLElement)?.classList.add("d-none");
      (document.querySelector(".slide-rightRTL") as HTMLElement)?.classList.add("d-none");
    }

    if (document.querySelector("body")?.classList.contains("ltr")) {
      if (marginLeftValue >= -check && menuWidth.offsetWidth - menuContainerWidth < menuItems.scrollWidth) {
        menuItems.style.marginLeft = -check + "px";
      } else {
        menuItems.style.marginLeft = "0px";
      }
    } else {
      if (marginRightValue > -check && menuWidth.offsetWidth < menuItems.scrollWidth) {
        menuItems.style.marginRight = -check + "px";
      } else {
        menuItems.style.marginRight = "0px";
      }
    }

    if (document.querySelector("body")?.classList.contains("rtl")) {
      if (marginRightValue >= -check && menuWidth.offsetWidth - menuContainerWidth < menuItems.scrollWidth) {
        menuItems.style.marginRight = -check + "px";
      } else {
        menuItems.style.marginRight = "0px";
      }
    } else {
      if (marginLeftValue > -check && menuWidth.offsetWidth < menuItems.scrollWidth) {
        menuItems.style.marginLeft = -check + "px";
      } else {
        menuItems.style.marginLeft = "0px";
      }
    }
  });

  if (
    !document.querySelector("body")?.classList.contains("login-img") &&
    !document.querySelector("body")?.classList.contains("error-bg")
  ) {
    // Add your code here
  }

  const slideLeftLTR = document.querySelector(".slide-left") as HTMLElement;
  const slideRightLTR = document.querySelector(".slide-right") as HTMLElement;

  slideLeftLTR.addEventListener("click", () => {
    const menuWidth = document.querySelector(".hor-menu") as HTMLElement;
    const menuItems = document.querySelector(".menu-nav") as HTMLElement;
    const mainSidemenuWidth = document.querySelector(".main-body-1") as HTMLElement;
    const menuContainerWidth = menuWidth.offsetWidth - mainSidemenuWidth.offsetWidth;
    const marginLeftValue = Math.ceil(Number(window.getComputedStyle(menuItems).marginLeft.split("px")[0])) + 100;

    if (marginLeftValue < 0) {
      menuItems.style.marginLeft = (Number(menuItems.style.marginLeft.split("px")[0]) + 100) + "px";
      if (menuWidth.offsetWidth - menuContainerWidth < menuItems.scrollWidth) {
        (document.querySelector(".slide-left") as HTMLElement)?.classList.remove("d-none");
        (document.querySelector(".slide-right") as HTMLElement)?.classList.remove("d-none");
      }
    } else {
      (document.querySelector(".slide-left") as HTMLElement)?.classList.add("d-none");
    }

    if (marginLeftValue >= 0) {
      menuItems.style.marginLeft = "0px";
      if (menuWidth.offsetWidth < menuItems.scrollWidth) {
        (document.querySelector(".slide-left") as HTMLElement)?.classList.add("d-none");
      }
    }

    const subNavSub = document.querySelectorAll(".sub-nav-sub");
    subNavSub.forEach((e) => {
      (e as HTMLElement).style.display = "";
    });
    const subNav = document.querySelectorAll(".nav-sub");
    subNav.forEach((e) => {
      (e as HTMLElement).style.display = "";
    });
  });

  slideRightLTR.addEventListener("click", () => {
    const menuWidth = document.querySelector(".hor-menu") as HTMLElement;
    const menuItems = document.querySelector(".menu-nav") as HTMLElement;
    const mainSidemenuWidth = document.querySelector(".main-body-1") as HTMLElement;
    const menuContainerWidth = menuWidth.offsetWidth - mainSidemenuWidth.offsetWidth;
    const marginLeftValue = Math.ceil(Number(window.getComputedStyle(menuItems).marginLeft.split("px")[0])) - 100;
    const check = menuItems.scrollWidth + (0 - menuWidth.offsetWidth) + menuContainerWidth;

    if (marginLeftValue > -check) {
      menuItems.style.marginLeft = (Number(menuItems.style.marginLeft.split("px")[0]) - 100) + "px";
    } else {
      menuItems.style.marginLeft = -check + "px";
      (document.querySelector(".slide-right") as HTMLElement)?.classList.add("d-none");
    }

    if (marginLeftValue !== 0) {
      (document.querySelector(".slide-left") as HTMLElement)?.classList.remove("d-none");
    }

    const subNavSub = document.querySelectorAll(".sub-nav-sub");
    subNavSub.forEach((e) => {
      (e as HTMLElement).style.display = "";
    });
    const subNav = document.querySelectorAll(".nav-sub");
    subNav.forEach((e) => {
      (e as HTMLElement).style.display = "";
    });
  });

  const slideLeftRTL = document.querySelector(".slide-leftRTL") as HTMLElement;
  const slideRightRTL = document.querySelector(".slide-rightRTL") as HTMLElement;

  if(slideLeftRTL){
    slideLeftRTL.addEventListener("click", () => {
      slideClick();
      const menuItems = document.querySelector(".menu-nav") as HTMLElement;
      const marginRightValue = Math.ceil(Number(window.getComputedStyle(menuItems).marginRight.split("px")[0])) + 100;
  
      if (marginRightValue < 0) {
        menuItems.style.marginLeft = "0px";
        menuItems.style.marginRight = (Number(menuItems.style.marginRight.split("px")[0]) + 100) + "px";
        (document.querySelector(".slide-rightRTL") as HTMLElement)?.classList.remove("d-none");
        (document.querySelector(".slide-leftRTL") as HTMLElement)?.classList.remove("d-none");
      } else {
        (document.querySelector(".slide-leftRTL") as HTMLElement)?.classList.add("d-none");
      }
  
      if (marginRightValue >= 0) {
        menuItems.style.marginLeft = "0px";
        menuItems.style.marginRight = "0px";
      }
  
      const subNavSub = document.querySelectorAll(".sub-nav-sub");
      subNavSub.forEach((e) => {
        (e as HTMLElement).style.display = "";
      });
      const subNav = document.querySelectorAll(".nav-sub");
      subNav.forEach((e) => {
        (e as HTMLElement).style.display = "";
      });
    });
  }

  if(slideRightRTL){
    slideRightRTL.addEventListener("click", () => {
      slideClick();
      const menuWidth = document.querySelector(".hor-menu") as HTMLElement;
      const menuItems = document.querySelector(".menu-nav") as HTMLElement;
      const mainSidemenuWidth = document.querySelector(".main-body-1") as HTMLElement;
      const menuContainerWidth = menuWidth.offsetWidth - mainSidemenuWidth.offsetWidth;
      const marginRightValue = Math.ceil(Number(window.getComputedStyle(menuItems).marginRight.split("px")[0])) - 100;
      const check = menuItems.scrollWidth + (0 - menuWidth.offsetWidth) + menuContainerWidth;
  
      if (marginRightValue > -check) {
        menuItems.style.marginLeft = "0px";
        menuItems.style.marginRight = (Number(menuItems.style.marginRight.split("px")[0]) - 100) + "px";
      } else {
        menuItems.style.marginLeft = "0px";
        menuItems.style.marginRight = -check + "px";
        (document.querySelector(".slide-rightRTL") as HTMLElement)?.classList.add("d-none");
      }
  
      if (marginRightValue !== 0) {
        (document.querySelector(".slide-leftRTL") as HTMLElement)?.classList.remove("d-none");
      }
  
      const subNavSub = document.querySelectorAll(".sub-nav-sub");
      subNavSub.forEach((e) => {
        (e as HTMLElement).style.display = "";
      });
      const subNav = document.querySelectorAll(".nav-sub");
      subNav.forEach((e) => {
        (e as HTMLElement).style.display = "";
      });
    });
  }
  }

  export const responsiveSidebarclose = () => {
    // leftsidemenu
   (document.querySelector(".main-body") as HTMLElement)?.classList.remove("sidenav-dataToggled");
   // rightsidebar
   (document.querySelector(".sidebar-right") as HTMLElement)?.classList.remove("sidebar-open");
   // swichermainright
   (document.querySelector(".demo_changer") as HTMLElement)?.classList.remove("active");
   (document.querySelector(".demo_changer") as HTMLElement).style.right = "-270px";
  };
  //horizontalmenusticky
  export const horizontalmenusticky : any = () => {
    // console.log("Working", window.scrollY > 30);
    if (window.scrollY > 30 == true) {
      if(document.body.classList.contains("scrollable-layout")!= true){
        let Scolls = document.querySelectorAll(".sticky");
        Scolls.forEach((e) => {
          e.classList.add("sticky-pin");
        });
      }
    } 
    else {
      if(document.body.classList.contains("scrollable-layout")!= true){
        let Scolls = document.querySelectorAll(".sticky");
        Scolls.forEach((e) => {
          e.classList.remove("sticky-pin");
        });
      }
    }
  };

    if (typeof window !== "undefined"){
      window.addEventListener("scroll", horizontalmenusticky);
    }

  function Horizontalmenudefultclose(): void {
    const slide = document.querySelectorAll(".nav-item");
  const sideMenuitem = document.querySelectorAll(".nav-sub-item");
  const slideMenu = document.querySelectorAll(".nav-sub");

  slide.forEach((element) => {
    if (element.classList.contains("active") && element.classList.contains("show")) {
      element.classList.remove("active", "show");
    }
  });

  sideMenuitem.forEach((element) => {
    if (element.classList.contains("active") && element.classList.contains("show")) {
      element.classList.remove("active", "show");
    }
  });

  slideMenu.forEach((element) => {
    if (element.classList.contains("open")) {
      element.classList.remove("open");
    }

    if (element) {
      (element as HTMLElement).style.display = "none";
    }
  });
  }

  export const landingpages = () => {
    if (window.scrollY > 30 && document.querySelector(".landing-page")) {
      let Scolls = document.querySelectorAll(".sticky");
      Scolls.forEach((e) => {
        e.classList.add("sticky-pin");
      });
    } else {
      let Scolls = document.querySelectorAll(".sticky");
      Scolls.forEach((e) => {
        e.classList.remove("sticky-pin");
      });
    }
  };
  // window.addEventListener("scroll", landingpages);