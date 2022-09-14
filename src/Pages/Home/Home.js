import React from 'react';
import About from '../../Components/About/About';
import AllTechnologies from '../../Components/AllTechnologies/AllTechnologies';
import Contacts from '../../Components/Contacts/Contacts';
import Custom from '../../Components/Custom/Custom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import Subscribe from '../../Components/Subscribe/Subscribe';
import Technologies from '../../Components/Technologies/Technologies';
const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Custom></Custom>
            <Subscribe></Subscribe>
            <Technologies></Technologies>
            <AllTechnologies></AllTechnologies>
            <About></About>
            <Contacts></Contacts>
            <Footer></Footer>
        </div>
    );
};

export default Home;