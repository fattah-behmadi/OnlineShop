import React from 'react';
import TheNavbar from 'components/template/TheNavbar';
import TheHeader from 'components/template/TheHeader';
import TheBreadCrumb from 'components/template/TheBreadCrumb';
import TheProperty from './../template/TheProperty';

const Home = () => {
    return (
        <div>
            <TheHeader />
            <TheNavbar />
            <hr />
            <TheBreadCrumb />
            <TheProperty />
        </div>);
}

export default Home;