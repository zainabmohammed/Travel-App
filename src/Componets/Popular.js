import { useEffect, useState } from "react";
import "../Style/style.css";

const Popular = () => {
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
    <div id="top">
      <section class="popular" id={"popular"}>
        <div class="container">
          <p class="section-subtitle">Uncover place</p>

          <h2 class="h2 section-title">Popular destination</h2>

          <ul class="popular-list">
            {data?.slice(0, 3).map((el) => (
              <li>
                <div class="popular-card">
                  <figure class="card-img">
                    <img src={el?.img} />
                  </figure>

                  <div class="card-content">
                    <div class="card-rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>

                    <p class="card-subtitle">
                      <a href="#">{el?.place}</a>
                    </p>

                    <h3 class="h3 card-title">
                      <a href="#">{el?.title}</a>
                    </h3>

                    <p class="card-text">{el?.content}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Popular;
