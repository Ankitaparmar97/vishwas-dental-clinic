import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Achieve from './Achievement';
import { HOSPITAL_NAME } from '../constants';

function AboutUs() {
  const theme = useTheme();

  const imgSrc = theme.palette.mode === 'dark' ? '/medical-symbol2.png' : '/medical-symbol.png';

  const imgsrc = theme.palette.mode === 'dark' ? '/dentist-chair2.png' : '/dentist-chair.png';

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: theme.palette.background.default,
        // mt: { xs: '9rem', sm: '10rem', md: '13rem' },
        px: { xs: 2, sm: 4, md: 16 },
      }}
    >
      {/* Heading */}
      <h2
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        About Us
      </h2>

      {/* Main Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
        }}
      >
        {/* LEFT CONTENT */}
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              color: theme.palette.primary.light,
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              fontWeight: 700,
              mb: 2,
            }}
          >
            {HOSPITAL_NAME}
          </Typography>

          <Typography
            sx={{
              fontFamily: 'poppins, sans-serif',
              color: theme.palette.text.secondary,
              fontSize: { xs: '0.9rem', md: '1rem' },
              mb: 3,
            }}
          >
            We have been at the forefront of dental healthcare, committed to providing world-class
            dental treatments in a friendly and comfortable environment. We offer comprehensive
            dental services tailored to each patient.
          </Typography>

          {/* SERVICES */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 4,
            }}
          >
            {/* COLUMN 1 */}
            <Box>
              {['Dental Implant', 'Dental Bridge Treatment', 'Root Canal Treatment'].map((item) => (
                <Box key={item} sx={{ display: 'flex', mb: 2 }}>
                  <CheckCircleIcon sx={{ color: theme.palette.primary.light }} />
                  <Typography ml={1}>{item}</Typography>
                </Box>
              ))}

              {/* EXPERIENCE */}
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                <Box
                  sx={{
                    height: 60,
                    width: 60,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                  }}
                >
                  <img src={imgSrc} width="30" />
                </Box>

                <Box ml={2}>
                  <Typography fontSize="1.5rem" fontWeight={600}>
                    5 years
                  </Typography>
                  <Typography fontSize="0.9rem">Dental Experience</Typography>
                </Box>
              </Box>
            </Box>

            {/* COLUMN 2 */}
            <Box>
              {['Teeth Whitening', 'Smile Designing', 'Routine Checkup'].map((item) => (
                <Box key={item} sx={{ display: 'flex', mb: 2 }}>
                  <CheckCircleIcon sx={{ color: theme.palette.primary.light }} />
                  <Typography ml={1}>{item}</Typography>
                </Box>
              ))}

              {/* SERVICES COUNT */}
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                <Box
                  sx={{
                    height: 60,
                    width: 60,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                  }}
                >
                  <img src={imgsrc} width="30" />
                </Box>

                <Box ml={2}>
                  <Typography fontSize="1.5rem" fontWeight={600}>
                    1800+
                  </Typography>
                  <Typography fontSize="0.9rem">Dental Services</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* RIGHT IMAGE */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Box
            component="img"
            src="/bhavnagar-clinic.jpg"
            sx={{
              width: '100%',
              maxWidth: { xs: '100%', sm: '400px', md: '565.5px' },
              height: { xs: 'auto', sm: 'auto', md: '550px' },
              display: 'block',
              borderRadius: 2,
            }}
          />
        </Box>
      </Box>

      {/* ACHIEVEMENTS */}
      <Typography fontWeight={700} fontSize={{ xs: '1.5rem', md: '2rem' }} mt={6} mb={2}>
        Our Achievements
      </Typography>

      <Achieve />
    </Box>
  );
}

export default AboutUs;
