import { Box, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import AddCallIcon from '@mui/icons-material/AddCall';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import EmailIcon from '@mui/icons-material/Email';
import { CONTACT, HOSPITAL_NAME } from '../constants';

export default function FooterPage() {
  const theme = useTheme();

  return (
    <Box sx={{ width: '100%', backgroundColor: theme.palette.primary.dark }}>
      {/* Main Container */}
      <Box
        sx={{
          px: { xs: 2, sm: 4, md: 16 }, // responsive padding
          py: 5,
          display: 'flex',
          flexWrap: 'wrap',
          color: theme.palette.primary.contrastText,
          gap: 4,
        }}
      >
        {/* Column 1 */}
        <Box sx={{ width: { xs: '100%', sm: '45%', md: '22%' } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <img src="/header-teeth.png" style={{ width: '40px', height: '40px' }} />
            <Typography variant="h6">{HOSPITAL_NAME}</Typography>
          </Box>

          <Typography sx={{ mt: 2, textAlign: 'justify', fontSize: '0.9rem' }}>
            Welcome To {HOSPITAL_NAME}, one of the best dental clinics in Bhavnagar. We offer
            advanced dental treatments for all ages with expert care.
          </Typography>
        </Box>

        {/* Column 2 */}
        <Box sx={{ width: { xs: '100%', sm: '45%', md: '22%' } }}>
          <Typography variant="h6" gutterBottom>
            Useful Links
          </Typography>

          {[
            { name: 'Home', path: '/' },
            { name: 'About Us', path: '/AboutUs' },
            { name: 'Dental Services', path: '/Dentalservices' },
            { name: 'Gallery', path: '/Gallery' },
            { name: 'Contact Us', path: '/ContactUs' },
          ].map((item) => (
            <Box key={item.name} sx={{ mb: 1 }}>
              <Link
                to={item.path}
                style={{ color: theme.palette.primary.contrastText, textDecoration: 'none' }}
                onClick={() => window.scrollTo(0, 0)}
              >
                {item.name}
              </Link>
            </Box>
          ))}
        </Box>

        {/* Column 3 */}
        <Box sx={{ width: { xs: '100%', sm: '45%', md: '22%' } }}>
          <Typography variant="h6" gutterBottom>
            Our Services
          </Typography>

          {[
            { name: 'Dental Implant', link: '#implants' },
            { name: 'Dental Bridge', link: '#bridge-treatment' },
            { name: 'Smile Designing', link: '#smile-desining' },
            { name: 'Teeth Cleaning', link: '#teeth-cleaning' },
            { name: 'Denture', link: '#denture' },
            { name: 'Child Treatment', link: '#child-treatment' },
            { name: 'Root Canal', link: '#root-canal' },
            { name: 'Wisdom Tooth Removal', link: '#wth' },
          ].map((item) => (
            <Box key={item.name} sx={{ mb: 1 }}>
              <Link
                to={`/Dentalservices${item.link}`}
                style={{ color: theme.palette.primary.contrastText, textDecoration: 'none' }}
              >
                {item.name}
              </Link>
            </Box>
          ))}
        </Box>

        {/* Column 4 */}
        <Box sx={{ width: { xs: '100%', sm: '45%', md: '22%' } }}>
          <Typography variant="h6" gutterBottom>
            Contact Info
          </Typography>

          {/* Phone */}
          <Box sx={{ display: 'flex', mb: 2 }}>
            <AddCallIcon />
            <Box sx={{ ml: 2 }}>
              <Typography fontWeight="bold">Phone</Typography>
              <a
                href={`tel:${CONTACT.Mobile}`}
                style={{ color: theme.palette.primary.light, textDecoration: 'none' }}
              >
                {CONTACT.Mobile}
              </a>
            </Box>
          </Box>

          {/* Email */}
          <Box sx={{ display: 'flex', mb: 2 }}>
            <EmailIcon />
            <Box sx={{ ml: 2 }}>
              <Typography fontWeight="bold">Email</Typography>
              <a
                href={`mailto:${CONTACT.Email}`}
                style={{ color: theme.palette.primary.light, textDecoration: 'none' }}
              >
                {CONTACT.Email}
              </a>
            </Box>
          </Box>

          {/* Address */}
          <Box sx={{ display: 'flex' }}>
            <AddLocationIcon />
            <Box sx={{ ml: 2 }}>
              <Typography fontWeight="bold">Address</Typography>
              <Typography color={theme.palette.primary.light}>{CONTACT.Address}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Divider */}
      <Box
        sx={{
          height: '1px',
          backgroundColor: theme.palette.primary.contrastText,
          mx: { xs: 2, sm: 4, md: 10 },
        }}
      />

      {/* Footer Bottom */}
      <Typography
        sx={{
          textAlign: 'center',
          py: 2,
          px: 2,
          fontSize: { xs: '0.8rem', md: '0.9rem' },
          color: theme.palette.primary.contrastText,
        }}
      >
        © {HOSPITAL_NAME} All Rights Reserved. Design & Developed by Ankita Parmar & Darshan
        Kapadiya
      </Typography>
    </Box>
  );
}
