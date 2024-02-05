
interface Basic {
  src: string
  text: string
  id: number

}
export const BasicButtons: Basic[] = [
  { id: 1, src: "../../../assets/images/faces/1.jpg", text: 'Alicia Sierra' },
  { id: 2, src: "../../../assets/images/faces/3.jpg", text: 'Samantha Mery' },
  { id: 3, src: "../../../assets/images/faces/6.jpg", text: 'Juliana Pena' },
  { id: 4, src: "../../../assets/images/faces/15.jpg", text: 'Adam Smith' },
  { id: 5, src: "../../../assets/images/faces/13.jpg", text: 'Farhaan Amhed' },
];

interface Active {
  class: string
  class1: string
  text: string
  id: number

}
export const ActiveButtons: Active[] = [
  { id: 1, class: 'house-door', text: 'Home', class1: 'active' },
  { id: 2, class: 'bell', text: 'Notifications', class1: '' },
  { id: 3, class: 'gift', text: 'Sent Messages', class1: '' },
  { id: 4, class: 'person', text: 'New Requests', class1: '' },
  { id: 5, class: 'trash3', text: 'Deleted Messages', class1: '' },
];
interface Links {
  class: string
  color: string
  text: string
  text1: string
  id: number

}
export const LinksButtons: Links[] = [
  { id: 1, class: 'white', text: 'California',  text1: 'C', color: 'default' },
  { id: 2, class: 'secondary', text: 'New Jersey', text1: 'N', color: '' },
  { id: 3, class: 'info', text: 'Los Angeles', text1: 'L', color: '' },
  { id: 4, class: 'warning', text: 'Miami Florida', text1: 'M', color: '' },
  { id: 5, class: 'success', text: 'Washington D.C', text1: 'W', color: '' },
];
interface Contextual {
  class: string
  class1: string
  text: string
  id: number

}
export const ContextualButtons: Contextual[] = [
  { id: 1, text: 'A simple default list group item', class: 'light',class1:"" },
  { id: 2, text: 'A simple primary list group item', class: 'primary',class1:"" },
  { id: 3, text: 'A simple secondary list group item', class: 'secondary',class1:"" },
  { id: 4, text: 'A simple success list group item', class: 'success',class1:"" },
  { id: 5, text: 'A simple danger list group item', class: 'danger',class1:"" },
  { id: 6, text: 'A simple warning list group item', class: 'warning',class1:"" },
  { id: 7, text: 'A simple info list group item', class: 'info',class1:"" },
  { id: 8, text: 'A simple light list group item', class: 'light',class1:"" },
  { id: 9, text: 'A simple dark list group item', class: 'dark ',class1:"text-white" }
];

interface Custom {
  class: string | undefined;
  text: string;
  heading: string
  class1: string
  class2: string
  text1: string
  text2: string
  text3: string
  id: number

}
export const CustomButtons: Custom[] = [
  { id: 1, heading: 'Web page editors now use Lorem Ipsum?',text:'primary',class:'', text1: '3 days ago', class1: 'active', text2: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.', text3: "24,Nov 2022", class2: '' },
  { id: 2, heading: 'Richard McClintock, a Latin professor?', text:'secondary',class:'',  text1: '4 hrs ago', class1: '', text2: 'Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots in a piece of classical Latin literature.', text3: "30,Nov 2022.", class2: 'text-muted' },
  { id: 3, heading: 'It uses a dictionary of over 200 Latin words?', text:'info',class:'',  text1: '15 hrs ago', class1: '', text2: 'Lorem Ipsum has been the industry s standard dummy text ever since the 1500s.', text3: "4,Nov 2022.", class2: 'text-muted' },
  { id: 4, heading: 'The standard Lorem Ipsum used since the 1500s?', text:'warning', class:'', text1: '45 mins ago', class1: '', text2: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,making this the first true generator on the Internet.', text3: "28,Oct 2022.", class2: 'text-muted' },
];
interface Subheadings {
  class: string
  text1: string
  text2: string
  text3: string
  id: number

}
export const SubheadingsButtons: Subheadings[] = [
  { id: 1, text1: "What Happened?", text2: "Many experts have recently suggested may exist.", text3: "32 Views", class: 'primary-transparent' },
  { id: 2, text1: "It Was Amazing!", text2: " His idea involved taking red.", text3: "52 Views", class: 'secondary-transparent' },
  { id: 3, text1: "News Is A Great Weapon.", text2: "News can influence in many ways.", text3: "1,204 Views", class: 'success-transparent' },
  { id: 4, text1: "majority have suffered.", text2: " If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.", text3: "14 Views", class: 'danger-transparent' }
];
interface Checkboxes {
  text: string
  id: number

}
export const CheckboxesButtons: Checkboxes[] = [
  { id: 1, text: "Accurate information at any given point." },
  { id: 2, text: "Hearing the information and responding." },
  { id: 3, text: "Setting up and customizing your own sales." },
  { id: 4, text: "New Admin Launched." },
  { id: 5, text: "To maximize profits and improve productivity." },
  { id: 6, text: "To have a complete 360° overview of sales information, having." },
];
interface Listbadges {
  text1: string
  text2: string
  class: string
  color: string
  id: number

}
export const ListbadgesButtons: Listbadges[] = [
  { id: 1, text1: 'Grocies', text2: 'Available', class: 'primary', color: '' },
  { id: 2, text1: 'Furniture', text2: 'Buy', class: 'secondary', color: '' },
  { id: 3, text1: 'Beauty', text2: '32', class: 'danger', color: '' },
  { id: 4, text1: 'Books', text2: 'New', class: 'light', color: 'text-default' },
  { id: 5, text1: 'Toys', text2: 'Hot', class: 'info-gradient', color: '' },
  { id: 6, text1: 'Mobiles', text2: 'Sold Out', class: 'warning', color: '' },
];
interface Horizontal {
  class: string
  id: number

}
export const HorizontalButtons: Horizontal[] = [
  { id: 1, class: '' },
  { id: 2, class: '-sm' },
  { id: 3, class: '-md' },
  { id: 4, class: '-lg' },
  { id: 5, class: '-xl' },
  { id: 6, class: '-xxl' },
];
