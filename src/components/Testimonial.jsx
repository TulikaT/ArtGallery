import React from "react";
import "./Testimonial.css";

function Testimonial() {
  let array3 = [
    {
      text: "Art you love has an exceptional eye for detail. The painting I received was more stunning in person, and the delivery was prompt and secure. It truly felt like owning a piece of Indian culture. Will definitely come back for more!",
      stars: "⭐️⭐️⭐️⭐️⭐️",
      name: "Ananya – Happy Client",
    },
    {
      text: "I’m thrilled with my purchase from Art you love. The website is beautifully curated and made the buying experience a breeze. From order to delivery, everything was seamless. A perfect place to discover unique and soulful artworks.",
      stars: "⭐️⭐️⭐️⭐️⭐️",
      name: "Rohan – Happy Client",
    },
    {
      text: "The artwork I bought from Art you love exceeded my expectations. The colors, the detailing, the emotion—it was all perfect. I loved how easy it was to browse through the collection and place my order. Truly a gem for art lovers!",
      stars: "⭐️⭐️⭐️⭐️⭐️",
      name: "Meera – Happy Client",
    },
  ];

  return (
    <div className="test">
      <h2>Testimonial</h2>
      <div className="comments">
        {array3.map((review, index) => (
          <div key={index} className="review">
            <p>{review.text}</p>
            <p>{review.stars}</p>
            <p>{review.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
