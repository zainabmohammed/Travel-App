import React from 'react'
import '../Style/style.css'

export default function Booking() {
  return (
    <div class="container">
    <div class="contact-box">
        <div class="left"></div>
        <div class="right">
            <h2>Booking  Now</h2>
            <input type="text" class="field" placeholder="Your Name"/>
            <input type="text" class="field" placeholder="Your Location"/>
            <input type="text" class="field" placeholder="Phone"/>
            <input type="text" class="field" placeholder="Travel Name"/>
            <button class="btn">Send</button>
        </div>
    </div>
</div>
  )
}
