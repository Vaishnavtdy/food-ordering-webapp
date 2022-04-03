import React from 'react'
import Menu from '../Components/Menu/Menu';
import Navbar from '../Components/Navbar/Navbar';
import Order from '../Components/Order/Order';

function Home() {
    return (
        <div>
            <Navbar />
            <Menu />
            <Order />
        </div>
    )
}

export default Home