import { Route, Routes } from 'react-router-dom';
import ContactUs from './ContactUs';
function ContactButton() {
  return (
    <>
      <Routes>
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default ContactButton;
