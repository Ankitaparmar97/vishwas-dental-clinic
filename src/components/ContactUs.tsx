import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import AddCallIcon from '@mui/icons-material/AddCall';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import EmailIcon from '@mui/icons-material/Email';
import { CONTACT, HOSPITAL_NAME } from '../constants';

export default function ContactPage() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: theme.palette.background.default,
        px: { xs: 2, sm: 4, md: 16 }, // responsive padding

        // mt: { xs: '8rem', md: '13rem' },
        pb: 6,
      }}
    >
      {/* <Container maxWidth="lg"> */}
      {/* Heading */}
      <h2
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        Contact Us
      </h2>

      {/* Map */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: '250px', md: '400px' },
          mb: 5,
        }}
      >
        <iframe
          title={HOSPITAL_NAME}
          src={CONTACT.AddressLink}
          style={{
            width: '100%',
            height: '100%',
            border: 0,
          }}
          loading="lazy"
        />

        <Box
          component="a"
          href={CONTACT.MapLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${HOSPITAL_NAME} in Google Maps`}
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            width: 'max-content',
            maxWidth: 'calc(100% - 32px)',
            px: { xs: 1.5, sm: 2 },
            py: 1.25,
            borderRadius: 2,
            backgroundColor: 'background.paper',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.22)',
            color: 'text.primary',
            textDecoration: 'none',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            '&:hover': {
              transform: 'translate(-50%, -50%) scale(1.02)',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.28)',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 48,
              height: 48,
              flexShrink: 0,
              borderRadius: '50%',
              backgroundColor: 'error.main',
              color: 'error.contrastText',
            }}
          >
            <AddLocationIcon />
          </Box>

          <Box sx={{ minWidth: 0 }}>
            <Typography sx={{ fontWeight: 700, lineHeight: 1.3 }}>{HOSPITAL_NAME}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Open in Google Maps
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Sub Heading */}
      <Typography sx={{ fontWeight: 700, mb: 3 }}>Drop Us Message for Any Query</Typography>

      {/* Main Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
        }}
      >
        {/* ================= FORM ================= */}
        <Box sx={{ flex: 1 }}>
          <form action={`https://formsubmit.co/${CONTACT.Email}`} method="POST">
            {/* Row 1 */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 2,
                mb: 2,
              }}
            >
              <TextField name="name" label="Name" fullWidth required sx={inputStyle} />
              <TextField name="email" label="Email" type="email" fullWidth sx={inputStyle} />
            </Box>

            {/* Row 2 */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 2,
                mb: 2,
              }}
            >
              <TextField name="phone" label="Phone" fullWidth required sx={inputStyle} />
              <TextField name="address" label="Address" fullWidth sx={inputStyle} />
            </Box>

            {/* Message */}
            <Box sx={{ mb: 2 }}>
              <TextField
                name="message"
                label="Message"
                multiline
                rows={4}
                fullWidth
                sx={inputStyle}
              />
            </Box>

            {/* Hidden Inputs */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="box" />
            <input type="hidden" name="_next" value="http://localhost:5174/ContactUs" />

            {/* Button */}
            <Box sx={{ textAlign: 'center' }}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: theme.palette.primary.light,
                  color: theme.palette.primary.contrastText,
                  px: 4,
                }}
              >
                Send Message
              </Button>
            </Box>
          </form>
        </Box>

        {/* ================= CONTACT INFO ================= */}
        <Box sx={{ flex: 0.8 }}>
          {/* Phone */}
          <ContactItem
            icon={<AddCallIcon />}
            title="Phone"
            value={CONTACT.Mobile}
            link={`tel:${CONTACT.Mobile}`}
            theme={theme}
          />

          {/* Email */}
          <ContactItem
            icon={<EmailIcon />}
            title="Email"
            value={CONTACT.Email}
            link={`mailto:${CONTACT.Email}`}
            theme={theme}
          />

          {/* Address */}
          <ContactItem
            icon={<AddLocationIcon />}
            title="Address"
            value={CONTACT.Address}
            link={CONTACT.MapLink}
            theme={theme}
          />
        </Box>
      </Box>
      {/* </Container> */}
    </Box>
  );
}

/* ================= REUSABLE COMPONENT ================= */
import { ReactNode } from 'react';

interface ContactItemProps {
  icon: ReactNode;
  title: string;
  value: string;
  link?: string;
  theme: unknown; // or Theme (better, see below)
}

function ContactItem({ icon, title, value, link }: ContactItemProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        mb: 3,
      }}
    >
      <Box
        sx={{
          height: 60,
          width: 60,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'theme.palette.primary.light',
          // color: 'theme.palette.primary.light',
          flexShrink: 0,
        }}
      >
        {icon}
      </Box>

      <Box sx={{ ml: 2 }}>
        <Typography sx={{ fontWeight: 700 }}>{title}</Typography>

        {link ? (
          <a
            href={link}
            style={{
              textDecoration: 'none',
              color: 'theme.palette.primary.light',
            }}
          >
            {value}
          </a>
        ) : (
          <Typography sx={{ color: 'theme.palette.primary.light' }}>{value}</Typography>
        )}
      </Box>
    </Box>
  );
}

/* ================= COMMON INPUT STYLE ================= */

const inputStyle = {
  boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
  backgroundColor: '#fff',
  borderRadius: 1,
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
};
