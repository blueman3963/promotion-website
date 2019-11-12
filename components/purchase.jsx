import React, { Component } from 'react';

class Ticket extends Component {
  constructor(props) {
    super(props)
  }

  toggleNav() {
    document.querySelector('.content').style.transform = 'translateX(0)'
    document.querySelector('.CTA').style.right = '38px'
  }

  render() {
    return (
      <div>
        <style jsx>
          {`
            .purchasePage {
              width: 80vw;
              height: 100vh;
              position: absolute;
              left: -80vw;
              top: 0;
              z-index: -9999999;
              background-color: #000;
              color: #fff;

              .bg {
                width: 100%;
                height: 100%;
                z-index: -9999;
              }
            }

            .logo {
              img {
                padding: 20px;
                width: 200px;
                position: absolute;
                top: 0px;
                left: 0px;
              }
            }

            .tm {
              font-family: 'GRI';
              font-size: 14px;
              text-align: right;
              position: absolute;
              transform: rotate(90deg);
              right: -100px;
              bottom: 150px;
            }

            .body {
              width: 100%;
              height: 100%;
              position: absolute;
              padding:  200px 20px 20px 20px;
              top: 0;
              left: 0;
              box-sizing: border-box;
              font-family: 'GR';
              font-size: 18px;
              box-sizing: boerder-box;


              .title {
                font-family: 'GRI';
                margin: 0 0 20px;
              }

              .col1 {
                display: inline-block;
                width: 15%;
                vertical-align: top;
                padding-right: 40px;

                .breif {
                }
              }
              .col2 {
                display: inline-block;
                width: 31%;
                vertical-align: top;
                padding-right: 40px;
              }
              .col3 {
                display: inline-block;
                width: 31%;
                vertical-align: top;
                padding-right: 40px;
              }
            }

            .back {
              position: absolute;
              right: 20px;
              top: 20px;
            }

            .tik {
              position: absolute;
              right: 100px;
              bottom: 100px;
              transform: rotate(-20deg);
              font-size: 40px;
              background-color: rgba(0,0,0,0);
              padding: 16px 20px 20px;
              font-family: 'GRI';
              border: 2px solid #fff;
            }
          `}
        </style>
        <div className='purchasePage'>
          <img src='static/bg.jpg' className='bg'/>
          <div className='logo'><img src='static/logo.png'/></div>
          <div className='tm'>Copyright &copy; 2019 jazzin All right reserved </div>
          <div className='body'>
            <div className='col1'>
              <div className='title'>
                jazzin 2019
              </div>
            </div>
            <div className='col2'>
              <div className='title'>
              Time <span style={{textDecoration: 'underline', fontSize:'14px'}}>detail schedule</span>
              </div>
              december 12,13,14<br/>
              2019<br/><br/>
              <div className='title'>
              Location
              </div>

            Randalls Island<br/>
            NYC<br/><br/>
              <div>
Jazzin is a jazz festival supporting local jazz bars and artists to raise awareness of their groups to the public in Randall’s island. This location will be easily accessible via car or public transport for the people who live in NYC. Jazzin will host various artists such as; Snarky puppy, Cory Henry, FKJ, Robert Glasper, Nils Frahm and a busking stage for any jazz musician can book prior to the festival to sign up.              </div>

            </div>
            <div className='col3'>
              <div>
                <div className='title'>
                Featuring (Joined by local artist)
                </div>
                12th December<br/>Snarky puppy, Shabaka Hutchings, Yazmin Lacey, Joe Armon-Jones,  Kamasi Washington, Christian Scott aTunde Adjuah, Oscar Jerome,, Daylight Robbery!,Wonky Logic
<br/><br/>
                13th December<br/>Cory Henry, Robert Glasper, Jazzmeia Horn, Miles Mosley, Joel Ross, lena Pinderhughes, Ashley Henry, Joseph Lawrence and the garden, Jordan Rakei<br/><br/>
              14th December<br/>Nils Frahm, FKJ, Blue lab beats, Kendrick Scott Oracle,
Esperanza Spalding, Nubya Garcia, Makaya McCraven, Binker And Moses, Nubiyan Twist
<br/><br/>

              </div>
              <div className='tik'>buy tickets</div>

            </div>
          </div>
          <svg onClick={() => this.toggleNav()} className='back' x="0px" y="0px" width='100px' viewBox="0 0 100 100" fill='none' strokeWidth='5px' stroke='#ffffff'>
            <g>
            	<circle class="st0" cx="50" cy="50" r="46"/>

            </g>
            <g>
            	<line class="st1" x1="24" y1="50" x2="78" y2="50"/>
            	<polyline class="st2" points="49.24,21.24 78,50 49.24,78.76 	"/>
            </g>
          </svg>
        </div>
      </div>
    )
  }
};

export default Ticket;
