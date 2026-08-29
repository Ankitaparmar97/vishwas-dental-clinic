import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useTheme } from '@mui/material/styles';

function CardWithImage({ src }: { src: string }) {
  return (
    <Card
      sx={{
        overflow: 'hidden',
        boxShadow: '0 15px 35px rgba(15, 70, 143, 0.2)',
      }}
    >
      <CardContent>
        <Box
          component="img"
          src={src}
          alt="Card"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.2)', // zoom effect
            },
          }}
        />
      </CardContent>
    </Card>
  );
}
export default function Gallery() {
  const theam = useTheme();
  return (
    <>
      <Box
        sx={{
          width: '100%',
          backgroundColor: theam.palette.background.default,
          // mt: { xs: '10.5rem', md: '13rem' },
          px: { xs: 2, sm: 4, md: 16 }, // responsive padding
        }}
      >
        <Box
          component="h2"
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          Our Gallery
        </Box>
        <Box
          sx={{
            display: 'grid',
            justifyContent: 'center',
            // mx: { xs: 6, sm: 10, md: 16 }, // responsive margin
            gap: 2,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)', // ✅ 2 cards on mobile
              sm: 'repeat(2, 1fr)', // tablet
              md: 'repeat(3, 1fr)', // small laptop
              lg: 'repeat(4, 1fr)', // desktop
            },
          }}
        >
          <CardWithImage src="gallery-image1.jpg" />
          <CardWithImage src="gallery-image2.jpg" />
          <CardWithImage src="gallery-image3.jpg" />
          <CardWithImage src="gallery-image4.jpg" />
          <CardWithImage src="gallery-image5.jpg" />
          <CardWithImage src="gallery-image6.jpg" />
          <CardWithImage src="gallery-image7.jpg" />
          <CardWithImage src="gallery-image8.jpg" />
          <CardWithImage src="gallery-image9.jpg" />
          <CardWithImage src="gallery-image10.jpg" />
        </Box>
      </Box>
    </>
  );
}
