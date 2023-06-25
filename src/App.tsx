import {useState, useEffect} from 'react';
import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import Benefits from "@/scenes/benefits";
import OurClasses from "@/scenes/ourClasses";
import ContactUs from "@/scenes/contactUs";
import Footer from "@/scenes/footer";
import { SelectedPage } from '@/shared/types';


function App() {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        // Detect if at top of page (for highlighting current page and navigation)
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else if (window.scrollY !== 0) {
        setIsTopOfPage(false)
      }
    }    
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  },[]);

  return (
      <div className='app bg-gray-20'>
        <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}  />
        
        <Home setSelectedPage={setSelectedPage} />

        <Benefits setSelectedPage={setSelectedPage} />

        <OurClasses setSelectedPage={setSelectedPage} />

        <ContactUs setSelectedPage={setSelectedPage} />

        <Footer />

      </div>
  )
}

export default App
