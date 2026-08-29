import AboutUs from './AboutUs';
import Gallery from './Gallery';
import ContactUs from './ContactUs';
import Carouselicon from './CarouselIcon';
import Dentalservices from './Dentalservices';
import { Box } from '@mui/material';

function HomePage() {
  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      <Carouselicon />
      <AboutUs />
      <Gallery />
      <Dentalservices />
      <ContactUs />
    </Box>
  );
}

export default HomePage;
