import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { useTheme } from '@mui/material/styles';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ActionAreaCard() {
  const theam = useTheme();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');

      const scrollToElement = () => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      };

      setTimeout(scrollToElement, 100);
    }
  }, [location]);
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: theam.palette.background.default,
        // mt: { xs: '10.5rem', md: '13rem' },
      }}
    >
      <Box
        sx={{
          px: { xs: 2, sm: 4, md: 16 }, // responsive padding
          // marginTop: { xs: 2, sm: 4, md: 6 },
        }}
      >
        <h2
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          Our Treatment Services
        </h2>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)', // ✅ 2 cards on mobile
              sm: 'repeat(2, 1fr)', // tablet
              md: 'repeat(3, 1fr)', // small laptop
              lg: 'repeat(4, 1fr)', // desktop
            },
            gap: 3,
          }}
        >
          <div id="bridge-treatment">
            <CardItem
              image="/service-bridgetreatment.jpg"
              title="Dental Bridge Treatment"
              description="A procedure involves preparing the adjacent teeth to support crowns.A dental bridge replaces missing teeth with false teeth. The bridge is attached to the teeth on either side of the gap. Bridges are usually made of metal,a mixture zirconia."
            />
          </div>
          <div id="implants">
            <CardItem
              image="/services-implant.jpg"
              title="Dental Implant"
              description="Dental implant surgery replaces tooth roots with metal. A dental embed is a screw produced using titanium which is set in the jaw at the site of the missing teeth. The material utilized for a dental embed is titanium since it is a bio-viable material.                                             "
            />
          </div>
          <div id="teeth-cleaning">
            <CardItem
              image="/services-teethwhitining.jpg"
              title="Teeth cleaning"
              description="Teeth cleaning is a standard dental methodology. We prompt our patients for a customary teeth cleaning like clockwork to 1 year. Other than that, anybody with a stained teeth, awful breath or draining gums ought to quickly complete a teeth cleaning.              "
            />
          </div>
          <div id="root-canal">
            <CardItem
              image="/services-rootcanal.jpg"
              title="Root canal treatment"
              description="A root canal is the normal pit inside the foundations of the tooth. It comprises of pulp(nerves of the tooth. A root canal treatment is the treatment of the tooth root.This procedure helps to save a badly infected or damaged tooth from extraction                                                                                            "
            />
          </div>
          <div id="child-treatment">
            <CardItem
              image="/services-childdental.jpg"
              title="Child teeth treatment"
              description="We treat babies, little children to guarantee that your kids can appreciate great dental wellbeing all through the entirety of their early stages.Early intervention is crucial to prevent more serious problems as children's teeth develop.Uses small instruments to remove the tooth"
            />
          </div>
          <div id="smile-designing">
            <CardItem
              image="/services-smiledesining.jpeg"
              title="Smile designing"
              description="Smile designing in dentistry, also known as smile makeover, is a comprehensive approach to enhancing the appearance of a person's smile through a combination of cosmetic and restorative dental procedures.The duration of a smile design can be between 5 and 20 years"
            />
          </div>
          <div id="denture">
            <CardItem
              image="/services-denture.jpg"
              title="Denture"
              description="Dentures (also known as false teeth).In dentistry, a denture is a removable appliance that replaces missing teeth and surrounding tissues. It is designed to restore functionality and aesthetics, allowing patients to chew, speak, and smile with confidence. Average lifespan of a denture is seven to 10 years. "
            />
          </div>
          <div id="wth">
            <CardItem
              image="/services-wtr.jpg"
              title="Wisdom tooth removal"
              description="Wisdom tooth removal is a common oral surgery procedure. Dentists may recommend this treatment to preserve your oral health and protect your other teeth from possible issues in the future.Your wisdom teeth are in the very back of your mouth.They erupt between ages of 17 and 25."
            />
          </div>
        </Box>
      </Box>
    </Box>
  );
}
function CardItem({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  const theam = useTheme();
  return (
    <CardActionArea
      sx={{
        // margin: '10px',
        boxShadow: '0 15px 35px hsla(202, 74.00%, 71.40%, 0.20);',
        borderBottom: '1px solid #06a3da',
        borderRadius: '10px 10px 10px 10px',
        '&:hover': {
          transform: 'scale(1.05)', // slight zoom
          boxShadow: '0 20px 40px hsla(202, 74%, 71%, 0.4)', // deeper shadow
          borderBottom: '2px solid #0d487c', // darker blue border
        },
      }}
    >
      <CardMedia component="img" image={image} sx={{ borderRadius: '10px 10px 0px 0px' }} />
      <CardContent>
        <Box>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color={theam.palette.text.primary}
            fontWeight={600}
            fontSize={'1rem'}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: theam.palette.text.secondary,
              fontSize: '.8rem',
              fontFamily: 'sans-serif',
              marginBottom: '1rem',
            }}
          >
            {description}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/ContactUs"
            sx={{
              backgroundColor: theam.palette.primary.light,
              '&:hover': {
                color: 'white',
              },
            }}
          >
            Contact Us
          </Button>
        </Box>
      </CardContent>
    </CardActionArea>
  );
}
