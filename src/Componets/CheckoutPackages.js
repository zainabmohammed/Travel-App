import { useEffect, useState } from "react";
import "../Style/style.css";

import image1 from "../assets/images/dubai.jpg";

const Packages = () => {
  const [data, setData] = useState([]);

  const getTraveltable = () => {
    fetch("https://travel-api-cpil.onrender.com/api/trips")
      .then((res) => res.json())
      .then((datatable) => {
        setData(datatable?.records);
        console.log(datatable);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getTraveltable();
  }, []);

  return (
    //    Header

    <section class="package" id="package">
      <div class="container">
        <p class="section-subtitle">Popular Packeges</p>

        <h2 class="h2 section-title">Checkout Our Packeges</h2>

        <ul class="package-list">
          {data?.map((el) =>(
          <li>
            <div class="package-card">
              <figure class="card-banner">
                <img
                  src={el?.img}
                  alt="Experience The Great Holiday On Beach"
                  loading="lazy"
                />
              </figure>

              <div class="card-content">
                <h3 class="h3 card-title">{el?.title}</h3>

                <p class="card-text">
                  يشمل الطيران ذهاب وعودة ,تأشيرة دخول,ألاقامة,رحلة سفاري,رحلة
                  بحرية,عشاء في خور دبي ,رحلة في المدينة
                </p>

                <ul class="card-meta-list">
                  <li class="card-meta-item">
                    <div class="meta-box">
                      <ion-icon name="time"></ion-icon>

                      <p class="text">8 Days/7 Nights</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div class="card-price">
                <p class="price">
                  $685
                  <span>/ per person</span>
                </p>

                <button class="btn btn-secondary">Book Now</button>
              </div>
            </div>
          </li>
          ))}

        

              </ul>

              
               </div>
    </section>
  );
};

export default Packages;
