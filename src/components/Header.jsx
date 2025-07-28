import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="container">
      <div className="vertical"></div>
      <div className="content">
        <div className="left">
          <div className="up">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F-Z8nsIz4nzgg%2FVVqkbcbboKI%2FAAAAAAAAPsM%2FLEDpjHabj5k%2Fs1600%2Ftranh-son-dau-phong-canh-dep-cua-Leonid-Afremov%252B5.jpg&f=1&nofb=1&ipt=55f4e331bba5b1c87e9c975e0825e84ed95311502d99b9e10492d9c2b817129c"
              alt=""
            />
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F50%2F56%2F47%2F50564741c7a582aacc3f62a8885d28dc.jpg&f=1&nofb=1&ipt=accdac36cde8b5fdfc163af0dcde94de50e3ef9aeb6bcde20196d812df914667"
              alt=""
            />
          </div>
          <div className="down">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwebneel.com%2Fdaily%2Fsites%2Fdefault%2Ffiles%2Fimages%2Fdaily%2F05-2015%2F9-watercolor-paintings-by-balakrishnan.jpg&f=1&nofb=1&ipt=a9aabe018dd169b01ffccd322cb578bf5d0a9f57e82685f102d73bbd527b10e2"
              alt=""
            />
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2016%2F12%2F08%2F410019-people-Claude_Joseph_Vernet-men-women-fisherman-artwork-classic_art-painting-sailing_ship-sea-clouds-night-Moon-house-rock-barrels-fire-dog-boat-748x445.jpg&f=1&nofb=1&ipt=c39124282afe292e5d26ba2ec3e1d7d527ab32dd611936d5aba9b5efdcd31c37"
              alt=""
            />
          </div>
        </div>
        <div className="right">
          <h1>DISCOVER ART YOU LOVE</h1>
          <div className="type">
            <div>Painting</div>
            <div>Landscape</div>
            <div>Modern Art</div>
            <div>Oil Painting</div>
            <div>Larger Work</div>
          </div>
          <button>Shop Collection</button>
        </div>
      </div>
      <div className="vertical"></div>
    </div>
  );
}

export default Header;
