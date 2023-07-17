import React from 'react';
import "../Style/style.css";
import {SlPhone} from 'react-icons/sl';
import { GiCommercialAirplane } from 'react-icons/gi';
import {CgMail  } from 'react-icons/cg';
import {MdOutlineLocationOn } from 'react-icons/md';
    

    

export default function Footer() {

  return (
   
    <footer  id = {"contact"}class="footer">
      
    

    <div class="footer-top">
      <div class="container">

        <div class="footer-brand">

          <a href="#" class="logo">
          
          <GiCommercialAirplane/>  Travel
         
          </a>

          <p class="footer-text">
          Contact us if you need any inquiries, we are always available to serve you .
          </p>

        </div>

        <div class="footer-contact">

          <h4 class="contact-title">Contact Us</h4>

          <p class="contact-text">
            Feel free to contact and reach us !!
          </p>

          <ul>

            <li class="contact-item">
              <ion-icon name="call-outline"></ion-icon>
              <span><SlPhone/></span>

              <a href="tel:07712567898" class="contact-link">    tel : 07712567898</a>
            </li>

            <li class="contact-item">
              <ion-icon name="mail-outline"></ion-icon>
             <span><CgMail/></span> 

              <a href="mailto:info.tourly.com" class="contact-link">travell@gamil.com</a>
            </li>

            <li class="contact-item">
              <ion-icon name="location-outline"></ion-icon>
             

              <address>  <MdOutlineLocationOn/> Baghdad , Karrada </address>
            </li>

          </ul>

        </div>

        <div class="footer-form">

          <p class="form-text">
            Subscribe our newsletter for more update & news !!
          </p>

          <form action="" class="form-wrapper">
            <input type="email" name="email" class="input-field" placeholder="Enter Your Email" required/>

            <button type="submit" class="btn btn-secondary">Subscribe</button>
          </form>

        </div>

      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">

        <p class="copyright">
          &copy; 2023 <a href="">codewithsadee</a>. All rights reserved
        </p>

        <ul class="footer-bottom-list">

          <li>
            <a href="#" class="footer-bottom-link">Privacy Policy</a>
          </li>

          <li>
            <a href="#" class="footer-bottom-link">Term & Condition</a>
          </li>

          <li>
            <a href="#" class="footer-bottom-link">FAQ</a>
          </li>

        </ul>

      </div>
    </div>

  </footer>
  )
  }