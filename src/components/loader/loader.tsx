import React from 'react';
import './loader.css';
import nb from 'date-fns/esm/locale/nb/index.js';
export default function Loader({text,height}: {text:String,height:number}) {

    return (
        <>
        <div className="cont" style={{height:`${height}vh`}}>
                    <div className="loader"></div>
                  <br />
                <p>{text}</p>
            </div>
            
        </>
    );
}