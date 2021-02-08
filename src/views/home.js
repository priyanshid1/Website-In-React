import React from 'react';
import AppAbout from '../components/home/about';
import AppHero from '../components/home/hero';
import AppFeatures from '../components/home/features';
import AppWorks from '../components/home/works';


function AppHome(){
    return(
        <div className = "main">
            <AppHero/>
            <AppAbout/>
            <AppFeatures/>
            <AppWorks/>
        </div>

    );
}

export default AppHome;