interface Tooltipdir {
    id:number
    text:string
    }
    export const Tooltipdirtooltip: Tooltipdir[] =[
    {id:1,text:'top'},
    {id:2,text:'right'},
    {id:3,text:'bottom'},
    {id:4,text:'left'}
    ];
    interface Colored {
      id:number
      dir:string
      text:string
      color:string
      }
      export const Coloredtooltip: Colored[] =[
      {id:1,dir:'top', color:'primary', text:'Primary'},
      {id:2,dir:'right', color:'secondary', text:'Secondary'},
      {id:3,dir:'bottom', color:'warning', text:'Warning'},
      {id:4,dir:'left', color:'info', text:'Info'},
      {id:5,dir:'top', color:'success', text:'Success'},
      {id:6,dir:'bottom', color:'danger', text:'Danger'},
      {id:7,dir:'bottom', color:'light', text:'Light'},
      {id:8,dir:'bottom', color:'dark', text:'Dark'}
      ];
    
      interface SVG {
        id:number
        class:string
        color:string
        text:string
        }
        export const SVGtooltip: SVG[] =[
       {id:1, class:'M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z', color:'primary', text:'Home'},
       {id:2, class:'M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z', color:'secondary', text:'Message'},
       {id:3, class:'M20,9V6h-2v3h-3v2h3v3h2v-3h3V9H20z M9,12c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4S5,5.79,5,8C5,10.21,6.79,12,9,12z M9,6 c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2S7,9.1,7,8C7,6.9,7.9,6,9,6z M15.39,14.56C13.71,13.7,11.53,13,9,13c-2.53,0-4.71,0.7-6.39,1.56  C1.61,15.07,1,16.1,1,17.22V20h16v-2.78C17,16.1,16.39,15.07,15.39,14.56z M15,18H3v-0.78c0-0.38,0.2-0.72,0.52-0.88 C4.71,15.73,6.63,15,9,15c2.37, 0,4.29,0.73,5.48,1.34C14.8,16.5,15,16.84,15,17.22V18z', color:'warning', text:'Add User'},
       {id:4, class:'M4.01 6.03l7.51 3.22-7.52-1 .01-2.22m7.5 8.72L4 17.97v-2.22l7.51-1M2.01 3L2 10l15 2-15 2 .01 7L23 12 2.01 3z', color:'info', text:'Send File'},
       {id:5, class:'M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z', color:'success', text:'Action'},
        ];
    