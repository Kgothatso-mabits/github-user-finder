import React from 'react';
import './Footer.css';
import { AiFillFacebook, AiFillInstagram, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';


const Footer = function() {
    return(
        <div className='footerContainer'>
            <div className='footerSection'>
                <a href='www.facebook.com/kgothatso.kg'><AiFillFacebook color={'#282c34'} size={'40px'}/></a>
                <a href='www.instagram.com/sliiqo.papii_ww'><AiFillInstagram color={'#282c34'} size={'40px'}/></a>
                <a href='www.linkedin.com/'><AiFillLinkedin color={'#282c34'} size={'40px'}/></a>
                <a href='www.github.com/'><AiFillGithub color={'#282c34'} size={'40px'}/></a>
            </div>
            <div className='copyright'>
                Copyright&copy; by Kgothatso Mabitsela
            </div>
        </div>
    )
}

export default Footer;