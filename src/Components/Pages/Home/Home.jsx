import React from 'react';
import Slider from '../../Slider/Slider';
import Tabs from '../Tabs/Tabss';
import TravelCard from '../TravelCard/TravelCard';
import OffersCard from '../OffersCard/OffersCard';
import VisaProces from '../VisaProces/VisaProces';

const Home = () => {
    return (
        <div>
            <Slider/>
            <Tabs></Tabs>
            <TravelCard/>
            <VisaProces/>
            <OffersCard/>
        </div>
    );
};

export default Home;