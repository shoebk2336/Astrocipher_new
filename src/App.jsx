import { Mantine_Navbar } from './Mantine_Comp/Navbar/Navbar';
import root from 'react-shadow'
import { HeroHeader } from "./Mantine_Comp/HeroHeader/HeroHeader";
import { NeonGradientCardDemo } from './Mantine_Comp/Grid/Card';
import { Features } from './Mantine_Comp/Feature_section/Features';
import { GradientText } from './components/ui/gradient_text';
import { MarqueeDemo } from './components/ui/text_crousel';
import { FooterLinks } from './Mantine_Comp/Footer/Footer';



function App() {

  return (
    <div
    style={{border:"0px solid red",
      width:"95%",
      margin:"auto",


    }}
    >
    <Mantine_Navbar/>
    <HeroHeader/>
    <Features/>
    <MarqueeDemo/>
    <FooterLinks/>
    </div>
  )
}

export default App
