import React from 'react';
import TheNavbar from 'components/template/TheNavbar';
import TheHeader from 'components/template/TheHeader';
import TheBreadCrumb from 'components/template/TheBreadCrumb';

const Home = () => {
    return (
        <div>
            <TheHeader />
            <TheNavbar />
            <TheBreadCrumb />
        </div>);
}

export default Home;