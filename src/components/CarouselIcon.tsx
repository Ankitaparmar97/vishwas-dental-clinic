import Carousel from 'react-material-ui-carousel';
import { Paper, Box, Typography, useMediaQuery } from '@mui/material';
import Button from './Button';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import { HOSPITAL_NAME } from '../constants';

function Example() {
  const theme = useTheme();

  const items: CarouselItem[] = [
    {
      name: HOSPITAL_NAME,
      description:
        'A dental implant is a surgical component that interfaces with the bone of the jaw or skull to support a dental prosthesis such as a crown.',
      image: 'l-denture.jpg',
    },
    {
      name: 'Implant Center',
      description:
        'A dental implant is a surgical component that interfaces with the bone of the jaw or skull to support a dental prosthesis such as a crown.',
      image: 'l-homeimage.jpg',
    },
    {
      name: 'Root Canal',
      description:
        'A root canal treatment helps to save a badly infected or damaged tooth from extraction.',
      image: 'smile.jpg',
    },
    {
      name: 'Teeth Cleaning',
      description:
        'We recommend regular teeth cleaning every 6 months to 1 year to maintain oral hygiene.',
      image: 'l-teeth.jpg',
    },
  ];

  return (
    <Carousel
      animation="slide"
      indicators={false}
      navButtonsAlwaysVisible
      navButtonsProps={{
        style: {
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
        },
      }}
      swipe
      fullHeightHover={false}
    >
      {items.map((item) => (
        <Item key={item.image} item={item} />
      ))}
    </Carousel>
  );
}

type CarouselItem = {
  name: string;
  description: string;
  image: string;
};

function Item({ item }: { item: CarouselItem }) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Paper
      sx={{
        textAlign: { xs: 'center', md: 'left' },
        backgroundImage: `url(${item.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: { xs: '60vh', sm: '70vh', md: '80vh' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        // borderRadius: 2,
        position: 'relative',
      }}
    >
      {/* Overlay for readability */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.4)',
          // borderRadius: 2,
        }}
      />

      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          paddingLeft: { xs: 2, sm: 4, md: 16 },
          paddingBottom: { xs: 1, md: 10 },
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant={isDesktop ? 'h3' : 'h5'}
            sx={{
              color: '#fff',
              mb: 1,
            }}
          >
            {item.name}
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography
            sx={{
              width: { xs: '100%', sm: '80%', md: '50%' },
              color: '#fff',
              mb: 2,
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
            }}
          >
            {item.description}
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            display: 'flex',
            justifyContent: isDesktop ? 'flex-start' : 'center',
            width: '100%',
          }}
        >
          <Button />
        </motion.div>
      </Box>
    </Paper>
  );
}

export default Example;
