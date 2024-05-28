import React from 'react';
import Slider from '../../Slider/Slider';
import Tabs from '../Tabs/Tabss';
import TravelCard from '../TravelCard/TravelCard';
import OffersCard from '../OffersCard/OffersCard';
import VisaProces from '../VisaProces/VisaProces';
import LetsTravel from '../LetsTravel/LetsTravel';
import TourChoose from '../TourChoose/TourChoose';

const Home = () => {
    return (
        <div>
            <Slider/>
            <Tabs></Tabs>
            <TravelCard/>
            <VisaProces/>
            <LetsTravel/>
            <TourChoose/>
            
            <OffersCard/>
        </div>
    );
};

export default Home;