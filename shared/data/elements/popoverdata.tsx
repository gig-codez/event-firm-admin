interface Default {
    class: string
    text: string
    id: number
  
  }
  export const Defaultalerts: Default[] = [
    { id: 1, text: 'Top', class: 'top' },
    { id: 2, text: 'Right', class: 'right' },
    { id: 3, text: 'Bottom', class: 'bottom' },
    { id: 4, text: 'Left', class: 'left' },
  ];
  
  interface Colorheader {
    class: string
    color: string
    color1: string
    text: string
    id: number
  
  }
  export const Colorheaderalerts: Colorheader[] = [
    { id: 1, text: 'Primary', class: 'top', color: 'outline-primary', color1: 'primary' },
    { id: 2, text: 'Secondary', class: 'right', color: 'outline-secondary', color1: 'secondary' },
    { id: 3, text: 'Info', class: 'bottom', color: 'outline-info', color1: 'info' },
    { id: 4, text: 'Warning', class: 'left', color: 'outline-warning', color1: 'warning' },
    { id: 5, text: 'Success', class: 'top', color: 'outline-success', color1: 'success' },
    { id: 6, text: 'Danger', class: 'top', color: 'outline-danger', color1: 'danger' },
  ];
  
  interface Colred {
    class: string
    color1: string
    text: string
    id: number
  
  }
  export const Colredalerts: Colred[] = [
      { id: 1, text: 'Secondary', class: 'top', color1: 'secondary' },
      { id: 2, text: 'Primary', class: 'right', color1: 'primary' },
    { id: 3, text: 'Info', class: 'bottom', color1: 'info' },
    { id: 4, text: 'Warning', class: 'left', color1: 'warning' },
    { id: 4, text: 'Success', class: 'top', color1: 'success' },
    { id: 4, text: 'Danger', class: 'right', color1: 'danger' },
    { id: 4, text: 'Teal', class: 'bottom', color1: 'teal' },
    { id: 4, text: 'Purple', class: 'left', color1: 'purple' },
  ];
  interface Dismissible {
    class: string
    color: string
    id: number
  
  }
  export const Dismissiblealerts: Dismissible[] = [
    { id: 1, color: 'primary', class: 'top' },
    { id: 2, color: 'secondary', class: 'right' },
    { id: 3, color: 'info', class: 'bottom' },
    { id: 4, color: 'warning', class: 'left' },
  ];
  