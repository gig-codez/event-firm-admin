import React from 'react';
import './loader.css';

export default function Loader({text,height}: {text:String,height:number}) {

    return (
        <div className="cont" style={{height:`${height}vh`}}>
                    <div className="loader"></div>
                  <br />
                <p>{text}</p>
            </div>
    );
}