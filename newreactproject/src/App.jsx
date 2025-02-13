import Navbar from "./component/navbar/Navbar";
import { Header } from "./component/hedear/Header";
import { MainSection } from "./component/mainSecton/mainSection";
import { Footer } from "./component/footer/footer";

function App(){
  return(
   <div>
     <Navbar/>
     <Header/>
     <MainSection />
     <Footer/>
   </div>
  )
}
export default App