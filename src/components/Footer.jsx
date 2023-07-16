import React from "react";
import logo from "../assets/images/logo.png.webp";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="container">
        <div class="footerContent">
          <div class="footerConnect">
            <div className="footerImg">
              <img src={logo} alt="logo" />
            </div>
            <ul class="socialList">
              <li class="socialItem">
                <i class="fa-solid fa-envelope"></i>
                <a href="#">Info.colorlib@gmail.com</a>
              </li>
              <li class="socialItem">
                <i class="fa-regular fa-paste"></i>
                <a href="#">+(12) 345 6789 10</a>
              </li>{" "}
              <li class="socialItem">
                <i class="fa-solid fa-thumbtack"></i>
                <a href="#">40 Baria Sreet 133/2 New York City, United State</a>
              </li>
            </ul>
            <div className="iconList">
              <div className="icon">
                <a href="#">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
              </div>
              <div className="icon">
                <a href="#">
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </div>
              <div className="icon">
                <a href="#">
                  <i class="fa-brands fa-tumblr"></i>
                </a>
              </div>
              <div className="icon">
                <a href="#">
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
              <div className="icon">
                <a href="#">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="footerStates">
            <h3 class="footerCardTitle">Top Clup</h3>
            <div className="stateContent">
              <ul className="leftStates">
                <li className="leftState">
                  <a href="#">Brazil</a>
                </li>
                <li className="leftState">
                  <a href="#">Germany</a>
                </li>
                <li className="leftState">
                  <a href="#">Italy</a>
                </li>
                <li className="leftState">
                  <a href="#">Argentina</a>
                </li>
                <li className="leftState">
                  <a href="#">france</a>
                </li>
              </ul>
              <ul className="rightStates">
                <li className="rightState">
                  <a href="#">England</a>
                </li>
                <li className="rightState">
                  <a href="#">Netherlands</a>
                </li>
                <li className="rightState">
                  <a href="#">Hungary</a>
                </li>
                <li className="rightState">
                  <a href="#">Croatia</a>
                </li>
                <li className="rightState">
                  <a href="#">Poland</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="footerNews">
            <h3 class="footerCardTitle">Recent News</h3>
            <div className="footerCardPart">
              <h5 className="newsCardInfo">
                <a href="#">
                  England win shows they have the spark to go far at World Cup
                </a>
              </h5>
              <ul className='cardList'>
              <li className='cardDate'> <i class="fa-solid fa-calendar-days"></i>May 19, 2019</li>
              <li className='cardDate'><i class="fa-sharp fa-regular fa-pen-to-square"></i>3 comment</li>
            </ul>
            </div>
            <div className="footerCardPart">
              <h5 className="newsCardInfo">
                <a href="#">
                Sri Lanka v Australia: Cricket World Cup 2019 – live!
                </a>
              </h5>
              <ul className='cardList'>
              <li className='cardDate'> <i class="fa-solid fa-calendar-days"></i>May 19, 2019</li>
              <li className='cardDate'><i class="fa-sharp fa-regular fa-pen-to-square"></i>3 comment</li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
