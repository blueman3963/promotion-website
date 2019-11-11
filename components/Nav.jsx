import React, { Component } from 'react';

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nav: true,
    }
  }

  componentDidMount(){
  }

  toggleNav() {
    document.querySelector('.content').style.transform = 'translateX(80%)'
    document.querySelector('.CTA').style.right = 'calc(-80vw + 38px)'
  }

  render() {
    return (
      <div>
        <style jsx>
          {`

            .CTA {
              position: fixed;
              display: block;
              color: #000;
              background-color: #fff;
              font-size: 40px;
              padding: 16px 50px 26px;
              border: 3px solid #000;
              font-family: 'GR';
              right: 38px;
              bottom: 38px;
              border-radius: 60px;
              cursor: pointer;
              box-shadow: 0px 0px 0 #000;
              transition-duration: 0.2s;
              z-index: 9999;

              &:hover {
                transform: translate(-7px, -7px);
                box-shadow: 7px 7px 0 #000;
                font-family: 'GRI';
              }

              &:active {
                transform: translate(0px, 0px);
                box-shadow: 0px 0px 0 #000;
                color: #fff;
                background-color: #000;
              }
            }
          `}
        </style>
        <div className='CTA' onClick={() => this.toggleNav()}>tune me in</div>
      </div>
    )
  }
};

export default Nav;
