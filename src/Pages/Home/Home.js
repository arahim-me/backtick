import React from 'react';
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
            <Footer></Footer>
        </div>
    );
};

export default Home;