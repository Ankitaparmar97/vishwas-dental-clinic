import Header from './components/Header';
import Banner from './components/Banner';
import Nav from './components/Nav';
import { useTheme } from '@mui/material/styles';
import FooterPage from './components/FooterPage';
import { CONTACT } from './constants';
import React from 'react';

function App() {
  const [, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };
  const theam = useTheme();
  const message = 'Hello!';
  const whatsappLink = `https://wa.me/${CONTACT.Whatsapp}?text=${encodeURIComponent(message)}`;
  return (
    <>
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <img
          src="/whatsapp.png"
          style={{
            position: 'fixed',
            bottom: '100px',
            left: '40px',
            fontSize: '50px',
            color: theam.palette.primary.light,
            zIndex: 1000,
          }}
        ></img>
      </a>
      <a href={`tel:${CONTACT.Mobile}}`}>
        <img
          src="/telephone.png"
          style={{
            position: 'fixed',
            bottom: '40px',
            left: '40px',
            fontSize: '50px',
            color: theam.palette.primary.light,
            zIndex: 1000,
          }}
        ></img>
      </a>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
        <Banner />
        <Header toggleDrawer={toggleDrawer} />
      </div>
      <Nav />
      <FooterPage />
    </>
  );
}

export default App;
