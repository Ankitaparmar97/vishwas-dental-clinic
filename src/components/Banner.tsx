import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AddCallIcon from '@mui/icons-material/AddCall';
// import EmailIcon from '@mui/icons-material/Email';
import { useTheme } from '@mui/material/styles';
import { CONTACT } from '../constants';

export default function ButtonAppBar() {
  const theam = useTheme();
  const message = 'Hello!';
  const whatsappLink = `https://wa.me/${CONTACT.Whatsapp}?text=${encodeURIComponent(message)}`;
  const instagramLink = 'https://www.instagram.com/bhavnagar_dental_clinic/';

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          height: { xs: '40px', sm: '45px', md: '2.5rem' },
          position: 'fixed',
          backgroundColor: theam.palette.background.default,
          zIndex: '1000',
          px: { xs: 2, sm: 4, md: 16 }, // responsive padding
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* ADDRESS → show only on tablet & desktop */}
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              alignItems: 'center',
            }}
          >
            <AddLocationIcon sx={{ color: theam.palette.primary.light, fontSize: '1.125rem' }} />
            <Typography sx={{ fontSize: '0.75rem', ml: 0.5 }}>{CONTACT.Address}</Typography>
          </Box>

          {/* MOBILE + EMAIL → show only on mobile */}
          <Box
            sx={{
              display: { xs: 'flex', sm: 'none' },
              // flexDirection: 'column',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Box
                sx={{
                  height: '1.875rem',
                  width: '1.875rem',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <AddCallIcon sx={{ color: theam.palette.primary.light, fontSize: '1.25rem' }} />
              </Box>
              <Typography sx={{ fontSize: '1rem', fontWeight: '700', marginLeft: '.5rem' }}>
                {CONTACT.Mobile}
              </Typography>
            </Box>
            {/* <Box sx={{ display: 'flex' }}>
              <EmailIcon sx={{ color: theam.palette.primary.light, fontSize: '1.25rem' }} />
              <Typography sx={{ fontSize: '0.7rem' }}>{CONTACT.Email}</Typography>
            </Box> */}
          </Box>
        </Box>

        <Box sx={{ display: 'flex' }}>
          <Box
            sx={{
              height: '1.875rem',
              width: '1.875rem',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              marginLeft: '0.5rem', // 8px
            }}
          >
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
              }}
            >
              <InstagramIcon sx={{ color: theam.palette.primary.light, fontSize: '1.25rem' }} />
            </a>
          </Box>

          <Box
            sx={{
              height: '1.875rem',
              width: '1.875rem',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              marginLeft: '0.5rem',
            }}
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
              }}
            >
              <WhatsAppIcon sx={{ color: theam.palette.primary.light, fontSize: '1.25rem' }} />
            </a>
          </Box>

          <Box
            sx={{
              height: '1.875rem',
              width: '1.875rem',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              marginLeft: '0.5rem',
            }}
          >
            <a
              href={`tel:${CONTACT.Mobile}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
              }}
            >
              <AddCallIcon sx={{ color: theam.palette.primary.light, fontSize: '1.25rem' }} />
            </a>
          </Box>
        </Box>
      </Box>
    </>
  );
}
