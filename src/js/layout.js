import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './component/scrollToTop';

import { Contacts } from './views/Contacts';
import { AddContact } from './views/AddContact';
import { Single } from './views/single';
import injectContext from './store/appContext';

import { Navbar } from './component/navbar';
import { Footer } from './component/footer';
import { UpdateContact } from './views/UpdateContact';

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || '';

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Contacts />} />
            <Route path="/addcontact" element={<AddContact />} />
            <Route path="/update-contact/:id" element={<UpdateContact />} />
            <Route path="/single/:theid" element={<Single />} />
            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
