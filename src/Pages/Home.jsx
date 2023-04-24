import React from "react";
import NewNav from "../Components/NewNav";
import Footer from '../Components/Footer';
import Image from '../Components/BgImage';
import CardSection from '../Components/CardSection';

const Home = () => {
    return (
        <React.StrictMode>
            <NewNav />
            <Image />
            <CardSection />
            <Footer />
        </React.StrictMode>
    )
}

export default Home;