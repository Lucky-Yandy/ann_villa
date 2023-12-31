import RootSection from "../HomePageFistSection/RootSection.js";
import InfoSection from '../InfoSection/InfoSection.js';
import PictureSection from "../PictureSection/PictureSection.js";
import BookingSection from '../BookingSection/BookingSection.js';
import ReviewSection from '../ReviewSection/ReviewSection.js';

import Location from "../Location/Location.js";
//import PriceSection from '../PriceSection/PriceSection.js';
import ContactMe from "../ContactMe/ContactMe.js";
import Footer from '../Footer/Footer.js';
export default function Home(){
  return (
      <div>
       <RootSection />  
       <InfoSection />  
       <PictureSection />
       <BookingSection />
       <ReviewSection />
       <Location />
       <ContactMe />
       <Footer />
     </div>
  )
}

