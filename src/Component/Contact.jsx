import React from 'react';
import Contactimg from '../images/images/contact.png'

export default function Contact(){
    return(
        <>
            <div className="contact" id='contact'>
                <div className='contcontainer'>
                    <div className='contimg'>
                        <img src={Contactimg} height= "550" />
                    </div>
                    <div className="contline"></div>
                    <div className="contdetail">
                        <p className='contheading'>Contact</p>
                        <div className='conttexts'>
                            <p className='contheadname'>Location</p> 
                                <p className='conttext'>Dhungedhara, Vanasthali</p>

                            <p className='contheadname'>Phone</p>
                                <p className='conttext'>+977-9818044464,</p>
                                <p className='conttext'>+977-9841665403</p>  

                            <p className='contheadname'> Email</p> 
                                <p className='conttext'>yatrainfosys@gmail.com</p> 

                            <p className='contheadname'>Socials</p> 
                                <a href="#"><img src="" /></a> 
                                <a href="#"><img src="" /></a>
                                <a href="#"><img src="" /></a>
                                <a href="#"><img src="" /></a>
                                <a href="#"><img src="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}