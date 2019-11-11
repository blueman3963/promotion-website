import React, { Component } from 'react'

import Nav from './Nav'
import Ticket from './purchase'

class Layout extends Component {

  componentDidMount() {
    window.addEventListener('resize', () => this.resize())
    this.resize()
  }

  resize() {
    document.querySelector('#curve').setAttribute("d", `M${window.innerWidth-100} 0 L${window.innerWidth-100} ${window.innerHeight-100} L0 ${window.innerHeight-100} L0 0 L${window.innerWidth-100} 0`);
  }


  render() {
    return (
      <div>
        <style jsx global>
          {`
            .rolling {
              width: calc( 100vw - 100px );
              height: calc( 100vh - 100px );
              position: fixed;
              left: 50px;
              top: 50px;
              overflow: visible;
              z-index: -1;
              pointer-events: none;
              color: #fff;
            }

            #curve {
              fill: rgba(0,0,0,0);
              stroke: rgba(0,0,0,0);
            }

            .content {
              transition-duration: 0.5s;
            }

            body {
                margin: 0;
                padding: 0;
            }
          `}
        </style>
<Nav />
        <div className='content'>

        {this.props.children}
        <div>
          <svg className='rolling'>
            <path id="curve" d="M0 0 L0 0" />

            <text>
              <textPath xlinkHref="#curve" style={{fontSize: '50px', fontFamily: 'GRI', color: 'white'}}>
                jazzin 2019 jazzin 2019 jazzin 2019 jazzin 2019 jazzin 2019 jazzin 2019 jazzin 2019 jazzin 2019 jazzin 2019 jazzin 2019 jazzin 2019 jazzin 2019 jazzin 2019 jazzin 2019 jazzin 2019 jazzin 2019 jazzin 2019 jazzin 2019 jazzin 2019 jazzin 2019 jazzin 2019 jazzin 2019 jazzin 2019 jazzin 2019 jazzin 2019 jazzin 2019 jazzin 2019 jazzin 2019 jazzin 2019 jazzin 2019 jazzin 2019 jazzin 2019 jazzin 2019 jazzin 2019 jazzin 2019 jazzin 2019
                <animate attributeName="startOffset" from="-258px" to ="0px" begin="0s" dur="6s" repeatCount="indefinite"/>
              </textPath>
            </text>
          </svg>
        </div>
        <Ticket />
        </div>

      </div>
    )
  }
}

export default Layout;
