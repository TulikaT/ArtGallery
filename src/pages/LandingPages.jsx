import React from "react";
import Header from "../components/Header.jsx";
import Cards from "../components/Cards.jsx";
import News from "../components/News.jsx";
import Testimonial from "../components/Testimonial.jsx";
import "./LandingPage.css";

const LandingPages = () => {
  let array1 = [
    "https://wallpaperaccess.com/full/354672.jpg",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.-Q-a3SWGHQ-Wmr1zoBLfIwHaE-%3Fpid%3DApi&f=1&ipt=5002f77ff65db0e187672da9e17ca4bfc01212fbc238be0a83257ccf9213dcba&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP._W--DWmCHTg80BvPE5mNkwHaNK%3Fpid%3DApi&f=1&ipt=7504f74ae2d9d42c63c1c99a1e29e86c911e5127a0ca56d5012ff9b542a65372",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F63%2F61%2F81%2F636181a396ef0b989e23fa3d24c615b5.jpg&f=1&nofb=1&ipt=4d3e86a9b84c1caef1a2621254cc38416f06bf1ffbda07537f64cb98a3a5d109",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcp14.nevsepic.com.ua%2F227%2F22676%2F1396459353-s-elayaraja-12-3500x5206.jpg&f=1&nofb=1&ipt=cffd5c40c95d9a6f415a0c86275cc40f5e1c5c679d4a899f1eac3590745ee9fc",
  ];
  let array2 = [
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.fineartamerica.com%2Fimages%2Fartworkimages%2Fmediumlarge%2F1%2Ffrightened-horses-before-a-storm-rudolf-koller.jpg&f=1&nofb=1&ipt=a58f2046b2996efcec4d04408edcb076b8252da3f4fb44830ed9de0fcfac32e5",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpic1.zhimg.com%2Fv2-a38ca2bfea8a3d4a7cde7abdf999b648_r.jpg&f=1&nofb=1&ipt=5f00d3cfdeb48db31b5697afe2a30db22e026f36e55672295cd47923006c54cb",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F50%2F78%2F9e%2F50789ecc83354fb2575c8ef65855a5b1.png&f=1&nofb=1&ipt=0969e0364eed39cf0f69c0542bf96d12f6f778b125930b96fc107786e48f75f1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.explicit.bing.net%2Fth%2Fid%2FOIP.RxAL8-JstAYsEvoRSSheawAAAA%3Fpid%3DApi&f=1&ipt=d577cdbfbeebe91cdadda877798483e7fd10eb25476260be6ce679fcb856cc90&ipo=images",
    "https://www.vallartadaily.com/wp-content/uploads/2016/02/drums-and-friends.jpg",
  ];

  return (
    <div>
      <Header />
      <div className="horizontal"></div>
      <Cards heading="New Arrivals" array={array1} />
      <div className="horizontal"></div>
      <Cards heading="Art on Deal!" array={array2} />
      <div className="horizontal"></div>
      <News />
      <Testimonial />
    </div>
  );
};

export default LandingPages;
