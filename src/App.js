import logo from './logo.svg';
import './App.css';
import Header from "./Components/header"
import Searchbar from './Components/searchbar';
import InfoCard from './Components/infocards';
import Footer from './Components/footer';
import Samoa5 from "./Assets/samoa5.jpg"
import Style from "./Styling/app.module.css"
import { style } from '@mui/system';

function App() {
  return (
    <div>
      <Header></Header>
      <div className={Style.searchbar}><Searchbar></Searchbar></div>
      <div className={Style.container}><img src={Samoa5} alt='tourism image for samoa' />
        
        <div className={Style.infocard}><InfoCard></InfoCard></div>
      <Footer></Footer>
      
        </div>
      </div>
  
  )
};

export default App;
