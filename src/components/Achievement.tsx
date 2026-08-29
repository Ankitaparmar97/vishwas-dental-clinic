import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useTheme } from '@mui/material/styles';

function CardWithImage({ src }: { src: string }) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        width: '100%',
        overflow: 'hidden',
        backgroundColor: theme.palette.primary.main,
        boxShadow: '0 15px 35px rgba(15, 70, 143, 0.2)',
      }}
    >
      <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
        <img
          src={src}
          alt="Card"
          style={{
            display: 'block',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </CardContent>
    </Card>
  );
}

export default function OutlinedCard() {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(2, minmax(0, 1fr))',
          md: 'repeat(3, minmax(0, 1fr))',
        },
        gap: 3,
        mb: 1,
      }}
    >
      <CardWithImage src="achieve-image1.jpg" />
      <CardWithImage src="achieve-image2.jpg" />
      <CardWithImage src="achieve-image3.jpg" />
    </Box>
  );
}
