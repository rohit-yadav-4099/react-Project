import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import Bollywood from '../ProjectCompo/Bollywood';
import Hollywood from '../ProjectCompo/Hollywood';
import FoodCom from '../ProjectCompo/Food';
import Homecom from '../ProjectCompo/Home';
import Fitness from '../ProjectCompo/Fitness';
import ConntextStore from './ContexApi';
import Technology from '../ProjectCompo/Technology';
import Navigate from '../ProjectCompo/DynamicRout';
import Footer from './Footer';


function RoutingCom() {
    const [isHamburger, setisHamburger] = useState(false);

    const toggleMenu = () => {
        setisHamburger(!isHamburger);
    };
    const closenavigate = () => {
        setisHamburger(false);
    }

    return (
        <>
            <div className='navcontain'>
                <div className='hambuger-title'>
                    <div className='head'>
                        <span className='The'>The</span>
                        <h1 className='Siren'> Siren</h1>
                    </div>
                    <div className='hamburger'>

                        <button className='hamburgerbtn'>
                           {isHamburger} ___ ___ ___
                        </button>

                    </div>

                </div>
                <div className='navbar'>

                    <BrowserRouter>
                        <div className='nav'>
                            <div className='main-nav'>
                                <ul type='none' className={isHamburger ? "hamburgerbtn":"main-nav"}>
                                    <li><NavLink to="/" className='navtxt' onClick={closenavigate}>Home</NavLink></li>
                                    <li> <NavLink to="/Bollywood" className='navtxt' onClick={closenavigate}>Bollywood</NavLink></li>
                                    <li><NavLink to="/Technology" className='navtxt' onClick={closenavigate}>Technology</NavLink></li>
                                    <li> <NavLink to="/Hollywood" className='navtxt' onClick={closenavigate}>Hollywood</NavLink></li>
                                    <li><NavLink to="/Fitness" className='navtxt' onClick={closenavigate}>Fitness</NavLink></li>
                                    <li><NavLink to="/Food" className='navtxt' onClick={closenavigate}>Food</NavLink></li>

                                </ul>
                            </div>
                        </div>
                        <hr />
                        <ConntextStore>
                            <Routes>
                                <Route path='/' element={<Homecom />} />
                                <Route path='/Bollywood' element={<Bollywood />} />
                                <Route path='/Hollywood' element={<Hollywood />} />
                                <Route path='/Food' element={<FoodCom />} />
                                <Route path='/Technology' element={<Technology />} />
                                <Route path='/Fitness' element={<Fitness />} />
                                <Route path="/Navigate/:id" element={<Navigate />} />
                            </Routes>
                        </ConntextStore>
                    </BrowserRouter>
                </div>
                <Footer></Footer>
            </div>
        </>
    );
}

export default RoutingCom;
