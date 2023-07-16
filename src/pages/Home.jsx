import React from "react";
import { NavLink } from "react-router-dom";
// components
import SoccerCard from "../components/SoccerCard";

// images
import flag1 from "../assets/images/tf-1.jpg.webp";
import flag2 from "../assets/images/tf-2.jpg.webp";
import flag3 from "../assets/images/tf-3.jpg.webp";
import flag4 from "../assets/images/tf-4.jpg.webp";
import flag5 from "../assets/images/tf-5.jpg.webp";
import flag6 from "../assets/images/tf-6.jpg.webp";
import news1 from "../assets/images/ln-1.jpg.webp";
const Home = () => {
  return (
    <>
      <section className="home">
        <div className="container">
          <div className="row">
            <p className="contentDate">30 september 2019 / 9:00 GMT+0000</p>
            <h1 className="contentTitle">Airrosten VS Lerenort in London</h1>
            <div className="contentBtn">
              <NavLink to="/">MORE DETAILS</NavLink>
            </div>
          </div>
        </div>
        <div className="slideNews">
          <div className="leftSide">
            <i className="fa-solid fa-play"></i>
            <p>Trending News</p>
          </div>
          <div className="rightSide">
            <p>Banners With Its Different Types Kinds And Applications</p>
          </div>
          <div className="slideBtn">
            <i class="fa-regular fa-square-caret-left"></i>
            <i class="fa-regular fa-square-caret-right"></i>
          </div>
        </div>
      </section>
      <section className="match">
        <div className="container">
          <div className="row">
            <div className="next">
              <h4 className="leftTitle">Next Match</h4>
              <div className="matchCard">
                <div className="leftFlag">
                  <img src={flag1} alt="flag" />
                  <p className="stateName">Cambodia</p>
                </div>
                <div className="states">
                  <p className="stateTitle">Ucraina vs England</p>
                  <h4 className="vs">VS</h4>
                  <p className="date">15 September 2019</p>
                </div>
                <div className="rightFlag">
                  <p className="stateName">Qatar</p>
                  <img src={flag2} alt="flag" />
                </div>
              </div>
              <div className="matchCard">
                <div className="leftFlag">
                  <img src={flag3} alt="flag" />
                  <p className="stateName">Cambodia</p>
                </div>
                <div className="states">
                  <p className="stateTitle">Ucraina vs England</p>
                  <h4 className="vs">VS</h4>
                  <p className="date">15 September 2019</p>
                </div>
                <div className="rightFlag">
                  <p className="stateName">Qatar</p>
                  <img src={flag4} alt="flag" />
                </div>
              </div>
              <div className="matchCard">
                <div className="leftFlag">
                  <img src={flag5} alt="flag" />
                  <p className="stateName">Cambodia</p>
                </div>
                <div className="states">
                  <p className="stateTitle">Ucraina vs England</p>
                  <h4 className="vs">VS</h4>
                  <p className="date">15 September 2019</p>
                </div>
                <div className="rightFlag">
                  <p className="stateName">Qatar</p>
                  <img src={flag6} alt="flag" />
                </div>
              </div>
            </div>
            <div className="recent">
              <h4 className="rightTitle">Recent Resuls</h4>
              <div className="matchCard">
                <div className="leftFlag">
                  <img src={flag1} alt="flag" />
                  <p className="stateName">Darussalam</p>
                </div>
                <div className="states">
                  <p className="stateTitle">Ucraina vs England</p>
                  <h4 className="vs">VS</h4>
                  <p className="date">15 September 2019</p>
                </div>
                <div className="rightFlag">
                  <p className="stateName">Ucraina</p>
                  <img src={flag2} alt="flag" />
                </div>
              </div>
              <div className="matchCard">
                <div className="leftFlag">
                  <img src={flag3} alt="flag" />
                  <p className="stateName">Cambodia</p>
                </div>
                <div className="states">
                  <p className="stateTitle">Ucraina vs England</p>
                  <h4 className="vs">VS</h4>
                  <p className="date">15 September 2019</p>
                </div>
                <div className="rightFlag">
                  <p className="stateName">Qatar</p>
                  <img src={flag4} alt="flag" />
                </div>
              </div>
              <div className="matchCard">
                <div className="leftFlag">
                  <img src={flag5} alt="flag" />
                  <p className="stateName">Cambodia</p>
                </div>
                <div className="states">
                  <p className="stateTitle">Ucraina vs England</p>
                  <h4 className="vs">VS</h4>
                  <p className="date">15 September 2019</p>
                </div>
                <div className="rightFlag">
                  <p className="stateName">Qatar</p>
                  <img src={flag6} alt="flag" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="feed">
        <div className="container">
          <h3 className="feedTitle">Soccer Feed</h3>
          <div className="row">
            <SoccerCard />
            <SoccerCard />
            <SoccerCard />
            <SoccerCard />
          </div>
        </div>
      </section>
      {/* <section className="news">
        <div className="container">
          <div className="row">
            <div className="lastestNews">
              <div className="aside">
                <div className="asideImg"></div>
                <div className="asideInfo">
                  <h4>
                    Once You Learn These Hard Truths About Life, You'll Become
                  </h4>
                  <ul className="cardList">
                    <li className="cardDate">
                      {" "}
                      <i class="fa-solid fa-calendar-days"></i>May 19, 2019
                    </li>
                    <li className="cardDate">
                      <i class="fa-sharp fa-regular fa-pen-to-square"></i>3
                      comment
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bside">
                <img src={news1} alt="cup" />
                <div className="bsideInfo">
                  <p>How To Quit Smoking Using Zyban</p>
                  <ul className="cardList">
                    <li className="cardDate">
                      {" "}
                      <i class="fa-solid fa-calendar-days"></i>May 19, 2019
                    </li>
                    <li className="cardDate">
                      <i class="fa-sharp fa-regular fa-pen-to-square"></i>3
                      comment
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="clupRank">
              <tr>
                <td>Pos</td>
                <td>Team</td>
                <td>P</td>
                <td>W</td>
                <td>L</td>
                <td>PTS</td>
              </tr>
              <tr>
              <td>Pos</td>
              <td>Pos</td>
              <td>Pos</td>
              <td>Pos</td>
              <td>Pos</td>
              <td>Pos</td>
              </tr>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Home;
