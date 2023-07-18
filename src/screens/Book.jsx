import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BookScreen = () => {
  const { tripId } = useParams();
  const navigate = useNavigate()
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    if (!customerName || !customerAddress || !customerPhone) return;
    setLoading(true);
    let data = {
      customerName,
      customerAddress,
      customerPhone,
      status: "PENDING",
      tripId: Number(tripId),
    };
    fetch("https://travel-api-cpil.onrender.com/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setLoading(false);
        alert("Book Successfully.");
        setCustomerName('')
        setCustomerAddress('')
        setCustomerPhone('')
        navigate(-1)
      });
  };

  return (
    <div className="booking">
      {/* <h1>Book Screen {tripId}</h1> */}
      <div className="container">
        <div className="contact-box">
          <div className="left"></div>
          <div className="right">
            <h2>Booking Now</h2>
            <input
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              type="text"
              className="field"
              placeholder="Your Name"
            />
            <input
              value={customerAddress}
              onChange={(e) => setCustomerAddress(e.target.value)}
              type="text"
              className="field"
              placeholder="Your Location"
            />
            <input
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
              type="text"
              className="field"
              placeholder="Phone"
            />
            <button onClick={handleSubmit} className="btn">
              {loading ? "Loading..." : "Send"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookScreen;
