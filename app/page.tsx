
export default function Home() {
  return (
    <main className="home-container">
      <div className="side-bar">
        <div className="profile">
        <img
          src="/display_pic.jpeg"
          alt="display pic"
          className="display_pic"
        />
        <h2>ALEX JOHNSON</h2>
        <p>alex.johnson@gmail.com</p>
        </div>
        <ul>
          <li><div><img src="/house.png"/></div>DASHBOARD</li>
          <li className="active"><div><img src="/flight.png"/></div>FLIGHTS</li>
          <li><div><img src="/wallet.png"/></div>WALLET</li>
          <li><div><img src="/book.png"/></div>REPORTS</li>
          <li><div><img src="/statistics.png"/></div>STATISTICS</li>
          <li><div><img src="/settings.png"/></div>SETTINGS</li>
        </ul>
        <h3>ACTIVE USERS</h3>
        <div className="images">
          <div>
            <span className="image-1"><img src="/1.jpeg"  /></span>
            <span className="image-2"><img src="/2.jpeg" /></span>
            <span className="image-3"><img src="/3.jpeg" /></span>
            <span className="image-4"><img src="/4.jpeg" /></span>
            <span className="image-5"><span></span></span>
          </div>
        </div>
        <div><img src="/world-2.png"/></div>
      </div>
      <div className="main-content">
        <div className="top">
          <div className="rows">
            <div>
              <span><div><img src="/location.png"/></div>NEW YORK (JFK)</span>
              <span><span className="transfer"><div><img src="/transfer.png"/></div></span></span>
              <span><div><img src="/location.png"/></div>MUMBAI (BOM)</span>
            </div>
            <div><span><div><img src="/calender.png"/></div>29 JULY 2019</span></div>
            <div><span><div><img src="/person.png"/></div>2 TRAVELLER</span></div>
          </div>
          <div className="rows">
            <div>
              <span className="activate"><span>ONE WAY</span></span>
              <span><span>ROUND TRIP</span></span>
              <span><span>MULTI CITY</span></span>
            </div>
            <div><span><div><img src="/chair.png"/></div>FIRST CLASS</span></div>
            <div className="activate"><span>SEARCH</span></div>
          </div>
        </div>
        <div className="middle">
          <div>
            <h3>RESULTS (25)</h3>
            <button>FILTER</button>
            <button style={{display: "flex", alignItems: "center"}}>TICKET OF CLASS<div><img src="/caret-down.png" style={{width: "40px"}}/></div></button>
          </div>
        </div>
        <div className="bottom">
          <div className="b-left">
            <ul>
              <li>
                <div className="cut-effect-top"></div>
                <div className="b-row">
                  <div>
                    <img src="/emirates.png"/>
                  </div>
                  <div>
                    <span>JFK</span>
                    <span>13:00</span>
                  </div>
                  <div>
                    <span>EMIRATES</span>
                    <span>11H 20M</span>
                    <span>NON_STOP</span>
                  </div>
                  <div>
                    <span>BOM</span>
                    <span>14:20</span>
                  </div>
                  <div>
                    <span>$1,572</span>
                    <button>BOOK NOW</button>
                  </div>
                </div>
                <div className="cut-effect-bottom"></div>
              </li>
              <li>
                <div className="cut-effect-top"></div>
                <div className="b-row">
                  <div>
                    <img src="/qatar.png"/>
                  </div>
                  <div>
                    <span>JFK</span>
                    <span>13:00</span>
                  </div>
                  <div>
                    <span>QATAR AIRWAYS</span>
                    <span>11H 20M</span>
                    <span>NON_STOP</span>
                  </div>
                  <div>
                    <span>BOM</span>
                    <span>14:20</span>
                  </div>
                  <div>
                    <span>$2,072</span>
                    <button>BOOK NOW</button>
                  </div>
                </div>
                <div className="cut-effect-bottom"></div>
              </li>
              <li>
                <div className="cut-effect-top"></div>
                <div className="b-row">
                  <div>
                    <img src="/lufthansa.png"/>
                  </div>
                  <div>
                    <span>JFK</span>
                    <span>13:00</span>
                  </div>
                  <div>
                    <span>LUFTHANSA</span>
                    <span>11H 20M</span>
                    <span>NON_STOP</span>
                  </div>
                  <div>
                    <span>BOM</span>
                    <span>14:20</span>
                  </div>
                  <div>
                    <span>$1,872</span>
                    <button>BOOK NOW</button>
                  </div>
                </div>
                <div className="cut-effect-bottom"></div>
              </li>
              <li>
                <div className="cut-effect-top"></div>
                <div className="b-row">
                  <div>
                    <img src="/emirates.png"/>
                  </div>
                  <div>
                    <span>JFK</span>
                    <span>13:00</span>
                  </div>
                  <div>
                    <span>EMIRATES</span>
                    <span>11H 20M</span>
                    <span>NON_STOP</span>
                  </div>
                  <div>
                    <span>BOM</span>
                    <span>14:20</span>
                  </div>
                  <div>
                    <span>$1,872</span>
                    <button>BOOK NOW</button>
                  </div>
                </div>
                <div className="cut-effect-bottom"></div>
              </li>
            </ul>
          </div>
          <div className="b-right">
            <div>
              <div>
                <span>FROM</span>
                <span>JFK</span>
              </div>
              <div>
                <span>NON-STOP</span>
              </div>
              <div>
                <span>TO</span>
                <span>BOM</span>
              </div>
            </div>
            <div>
              <img src="/w.png"/>
            </div>
            <div className="base">
              <div>
                <button className="activate">NON STOP</button>
                <button>ONE STOP</button>
                <button>MORE STOP</button>
              </div>
              <div>
                <h4>PRICE</h4>
              </div>
              <div>
                <hr/>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}