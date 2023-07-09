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

    <section  id={"Packages"} class="package" >
      <div class="container">
        <p class="section-subtitle">Popular Packeges</p>

        <h2 class="h2 section-title">Checkout Our Packeges</h2>

        <ul class="package-list">
          {data?.map((el) => (
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
                  <h3 class=" card-title">{el?.title}</h3>

                  <p class="card-text">
                  {el?.content}
                  </p>

                  <ul class="card-meta-list">
                    <li class="card-meta-item">
                      <div class="meta-box">
                        <ion-icon name="time"></ion-icon>

                       
                        <span class="text-day">أيــام</span>
                        <p class="text">{el?.days}</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div class="card-price">
                  <p class="price">
                  <b>{Number(el?.price).toLocaleString("en")} IQD</b>
                                       {/* <span>/ per person</span> */}
                  </p>

                  <button id={"Book Now"} class="btn btn-secondary">Book Now</button>
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
