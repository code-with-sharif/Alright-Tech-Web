import Binners from './Components/Header/Binners';
import Blogs from './Components/Header/Blogs';


import Latestwork from './Components/Header/Latestwork';
import Ourservices from './Components/Header/Ourservices';
import Faqs from './Components/Header/Faqs';
import  Footer  from './Components/Header/Footer';


const Home = () => {
  return (
   
   <>
     <Binners />
     <Ourservices />
     <Latestwork />
     <Blogs />
     <Faqs />
     <Footer />
   
 
   </>
  )
}

export default Home;