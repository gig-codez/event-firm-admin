interface Background {
    id: number
    src: string
    text1: string
    text2: string
    color: string
    class: string
  
  }
  export const Backgroundcards: Background[] = [
    { id: 1, src: "../../../assets/images/faces/11.jpg", text1: 'Adam Smith', text2: 'Finished by today', color: 'primary', class: 'white' },
    { id: 2, src: "../../../assets/images/faces/12.jpg", text1: 'Elisha Corner', text2: 'Completed 24 days back', color: 'secondary', class: 'white' },
    { id: 3, src: "../../../assets/images/faces/1.jpg", text1: 'Sarah Alina', text2: 'Completed today', color: 'warning', class: 'white' },
    { id: 4, src: "../../../assets/images/faces/8.jpg", text1: 'Monica Karen', text2: 'Pending from 4 days', color: 'info', class: 'white' },
    { id: 5, src: "../../../assets/images/faces/5.jpg", text1: 'Samantha sid', text2: 'In leave for 1 month', color: 'success', class: 'white' },
    { id: 6, src: "../../../assets/images/faces/14.jpg", text1: 'Sebastien steyn', text2: 'Completed by Tomorrow', color: 'danger', class: 'white' },
    { id: 7, src: "../../../assets/images/faces/13.jpg", text1: 'Jacob Smith', text2: 'Finished by 24,Nov', color: 'light', class: 'dark' },
    { id: 8, src: "../../../assets/images/faces/16.jpg", text1: 'Pope Adam', text2: 'Completed on 24,may', color: 'dark', class: 'white' }
  ];
  
  interface Grid {
    id: number
    src: string
    text1: string
  
  }
  export const Gridcards: Grid[] = [
    { id: 1, src: "../../../assets/images/media/media-44.jpg", text1: 'Morphology of a typical fruit.' },
    { id: 2, src: "../../../assets/images/media/media-43.jpg", text1: 'Research improves ability & agility !' },
    { id: 3, src: "../../../assets/images/media/media-45.jpg", text1: 'Most tropical areas are suitable' },
    { id: 4, src: "../../../assets/images/media/media-46.jpg", text1: 'Are They seasonal fruits ?' },
  ];
  interface Gridmarkup {
    id: number
    src: string
    text1: string
    color: string
  
  }
  export const Gridmarkupcards: Gridmarkup[] = [
    { id: 1, src: "../../../assets/images/media/media-25.jpg", text1: 'Product A', color: 'primary' },
    { id: 2, src: "../../../assets/images/media/media-26.jpg", text1: 'Product B', color: 'secondary' },
    { id: 3, src: "../../../assets/images/media/media-27.jpg", text1: 'Product-C', color: 'light' }
  ];
  interface Mountain {
    id: number
    src: string
    text1: string
    text2: string
    color: string
  
  }
  export const Mountaincards: Mountain[] = [
    { id: 1, src: "../../../assets/images/media/media-4.jpg", text1: 'Mountains', text2: 'New', color: 'primary' },
    { id: 2, src: "../../../assets/images/media/media-9.jpg", text1: 'Hills', text2: 'Hot', color: 'secondary' },
    { id: 3, src: "../../../assets/images/media/media-15.jpg", text1: 'Nature', text2: 'Offer', color: 'light' }
  ];