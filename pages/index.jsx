import Layout from '../components/layout';
import React, { Component } from 'react';
import '../style/style.css'

import Lottie from 'react-lottie';
import * as animationData from '../static/animation/data.json'

class Homepage extends Component {
  constructor(props) {
    super(props)
    this.state={
    }
    this.audioInit = false
    this.audioCount = 0

    this.tracks = []

    this.overlay = React.createRef()
  }

  componentDidMount(){

    let pixiRender = require('../components/render.js').pixiRender;
    let render = new pixiRender;

    this.setState({render},() => {
      this.state.render.init()
    })

    if(!this.audioInit){
      for(let i = 0 ; i < 5 ; i++ ){
        var track = document.createElement('audio');
        track.src = `/static/music/01/track${i+1}.mp3`;
        track.loop = true
        track.type = 'audio/mpeg'
        track.className = 'track'
        track.id = `track${i}`
        track.volume = .01
        track.onCanPlayThrough = this.loaded()
        this.tracks.push(track)
        document.querySelector('body').appendChild(track);
      }
      var vid = document.createElement('video');
      vid.src = `../static/music/01/Comp.mp4`;
      vid.loop = true
      vid.className = 'vid'
      vid.style.zIndex = -9999999
      vid.style.position = 'fixed'
      vid.style.width = '100vw'
      vid.style.height = '100vh'
      vid.style.top = '0'
      vid.style.left = '0'
      vid.style.objectFit = 'cover'
      vid.style.opacity = '0'
      vid.style.transitionDuration = '0.2s'

      vid.style.backgroundColor = '#000'
      document.querySelector('.bg-container').appendChild(vid);
      //init finished
      this.audioInit = true
    }


  }

  loaded() {
    this.audioCount ++
    if(this.audioCount > 5){
    }
  }

  start() {
    document.querySelectorAll('.track').forEach(i => {
      i.play()
    })
    document.querySelector('.vid').play()
    document.querySelector('.vid').style.opacity = 0.2
    this.overlay.current.style.opacity = 0
    setTimeout(this.overlay.current.style.zIndex = -9999,500)
  }

  hoverSwitch() {
    document.querySelector('.switch').classList.add('hover')
  }

  endSwitch() {
    document.querySelector('.switch').classList.remove('hover')

    if(document.querySelector('.switch').classList.contains('active')){
      document.querySelector('.bundle').classList.add('reset')
      document.querySelector('.switch').classList.remove('active')
      setTimeout(() => document.querySelector('.bundle').classList.remove('reset'), 1000)
    }
  }

  retune() {
    //this.state.render.switch()
    document.querySelector('.switch').classList.add('active')
  }

  render() {

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData.default,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return (
      <div>
      <Layout>
        <style jsx>
          {`

            * {
              font-family:'GR';
              user-select: none;
            }

            .overlay {
              z-index: 9999;
              transition-duration: 0.5s;
              background-color: rgba(0,0,0,0.9);
              position: fixed;
              left: 0;
              top: 0;
              width: 100vw;
              height: 100vh;
              display: flex;
              justify-content: center;
              align-items: center;
              color: white;
              font-size: 18px;
              text-align: center;
              letter-spacing: 1px;

              .button {
                  margin-top: 40px;
                  padding: 16px 40px 24px;
                  border: 3px solid #fff;
                  border-radius: 40px;
                  transition-duration: 0.2s;
                  cursor: pointer;
                  box-shadow: 0 0 0 rgba(255,255,255,1);
                  font-family: "GR";
                  font-size: 24px;
                  letter-spacing: 3px;
                  display: inline-block;

                  &:hover {
                    transform: translate(-7px, -7px);
                    box-shadow: 7px 7px 0 rgba(255,255,255,1);
                    font-family: "GRI";
                  }

                  &:active {
                    transform: translate(0px, 0px);
                    box-shadow: 0px 0px 0 rgba(255,255,255,1);
                    color: #000;
                    background-color: #fff;
                  }
              }
            }

            .switch {
              position: fixed;
              z-index: 999;
              right: 20px;
              top: 20px;
              width: 150px;
              height: 150px;

              img {
                position: absolute;
                left: 0;
                top: 0;
              }

              .hand {
                width: 100px;
                transform: rotate(-15deg) translate(90px, 70px);
                transition: transform 0.5s 0.5s;
              }
              .thumb {
                width: 100px;
                transform: rotate(-15deg) translate(90px, 70px);
                transition: transform 0.5s 0.5s;
              }
              .disc {
                width: 150px;
              }
              .pin {
                width: 150px;
                transform: translate(0px, 0px) rotate(0deg);
                transition-duration: 0.3s;
              }
              .bundle {
                position: absolute;
                transform: translate(140px, 120px) rotate(-20deg);
                transition: transform 0.5s;
              }

              &:hover {
                .pin {
                  transform: translate(30px, 0px) rotate(-30deg);
                }
              }

            }

            .hover {
              .bundle {
                transform: translate(20px, 20px) rotate(-2deg);
              }
            }

            .active {
              .bundle {
                transform: translate(0px, 0px) rotate(0deg);

                .hand, .thumb {
                  transform: rotate(-45deg) translate(230px, 190px);
                }
              }
            }

            .reset {
              opacity: 0;
            }

            .text {
              font-family: 'GRI';
              font-size: 40px;
            }

            .caption {
              font-size: 24px;
              font-family: 'GR';
              position: fixed;
              left: 80px;
              bottom: 80px;

              span {
                margin-right: 10px;
                cursor: pointer;
                &:hover {
                  font-family: 'GRI';
                }
              }
            }

          `}
        </style>
        <div className='bg-container'></div>
        <div ref={this.overlay} className='overlay' onClick={() => this.start()}>

          <div>
            <div className='tutorial'>
              <Lottie options={defaultOptions}
                height={140}
                width={210}/>
            </div>
            <div>
              Drag notes around to find jazz!<br/>
            *Turn on the sound for full experience.
            </div>
            <div className='button'>lets jazzin</div>
          </div>

        </div>

        <div className='text'>
        </div>

        <div className='caption'>
          <span>tw</span> <span>fb</span> <span>ig</span>
        </div>

        <div onClick={() => this.retune()} className='switch' onMouseEnter={() => this.hoverSwitch()} onMouseLeave={() => this.endSwitch()}>
          <img className='disc1' src='/static/animation/disc.png' />

          <div className='bundle'>
            <img className='hand' src='/static/animation/hand.png' />
            <img className='disc2' src='/static/animation/disc.png' />
            <img className='thumb' src='/static/animation/thumb.png' />
          </div>

          <img className='pin' src='/static/animation/pin.png' />

        </div>


      </Layout>
      </div>

    )
  }
}

export default Homepage;
