import * as PIXI from 'pixi.js';

var app,
    w, h, mobile,
    noteW, noteH,
    noteTexs = [],
    notes = [],
    goals = [],
    finishTexs = [],
    answer = [
      [0.2,0.4,0.6,0.7,0.2,0.2,0.5,0.7,0.8,0.4,0.1,0.6],
      [0.4,0.6,0.7,0.1,0.1,0.5,0.7,0.8,0.4,0.1,0.6,0.5],
    ],
    content = [
      ['Original 1959', 'Paul Desmond', '2019 Brooklyn', 'jazzin', 'HOP IN', '\"Take Five\"'],
      ['Original 1958', 'Art Blakey', '2019 Brooklyn', 'jazzin', 'HOP IN', '\"Moanin\'\"']
    ],
    set = 0,
    origX, origY,
    origD = null,
    distance = null,
    progress = 0


class pixiRender {

  init() {

    //define app
    app = new PIXI.Application({ resolution: 1, antialias: true, transparent: true });
    document.querySelector('.bg-container').appendChild(app.view);
    //end

    //define app position and scale
    app.view.style.position = 'fixed';
    app.view.width = window.innerWidth;
    app.view.height = window.innerHeight;
    app.view.style.top = 0;
    app.view.style.left = 0;
    app.view.style.zIndex = -999;
    //end

    //resize behavior
    window.addEventListener('resize', resize);

    function resize () {
      w = window.innerWidth
      h = window.innerHeight
      app.view.width = w
      app.view.height = h
      mobile = window.innerWidth < 600 ? true: false
      noteW = .1*w
      noteH = .18*w
    }
    resize()
    //end

    //create goal
    for( var i = 0; i < 6; i++ ) {
      let goal = PIXI.Sprite.from(`/static/goal_${i+1}.png`)
      goal.width = noteW
      goal.height = noteH
      goal.anchor.set(0.5)
      goal.x = answer[0][i*2]*w
      goal.y = answer[0][i*2+1]*h
      goal.alpha = 0
      goal.index = i

      app.stage.addChild(goal)
      goals.push(goal)
    }
    //end

    //create notes
    for( var i = 0; i < 6; i++ ) {
      let tex = PIXI.Texture.from(`/static/note_${i+1}.png`)
      noteTexs.push(tex)
      let finishTex =  PIXI.Texture.from(`/static/done_${i+1}.png`)
      finishTexs.push(finishTex)
      let note = new PIXI.Sprite(tex)
      note.width = noteW
      note.height = noteH
      note.anchor.set(0.5)
      note.x = .5*w + (i - 3)*.06*w + .025*w
      note.y = .5*h
      note.active = true
      note.index = i
      note.interactive = true
      note.cursor = 'grab'

      //draggable
      note
        .on('pointerdown',dragStart)
        .on('pointerup',dragEnd)
        .on('pointerupoutside',dragEnd)
        .on('pointermove',drag)

      app.stage.addChild(note)
      notes.push(note)
    }
    //end

    //notes draggable
    function dragStart(event) {
      this.data = event.data
      if(this.active){
        this.dragging = true
      }
      this.cursor = 'grabbing'
      origX = this.data.getLocalPosition(this.parent).x - this.x
      origY = this.data.getLocalPosition(this.parent).y - this.y

      //get distance to goal
      let i = this.index
      origD = Math.hypot(notes[i].x - goals[i].x, notes[i].y - goals[i].y)
    }

    function dragEnd() {
      this.dragging = false
      origD = null
      goals[this.index].alpha = 0
      this.cursor = 'grab'
    }

    function drag() {
      if(this.dragging){

        const newPosition = this.data.getLocalPosition(this.parent);
        if(this.x > w-.5*noteW){
          this.x = w-.5*noteW
        }else if(this.x < .5*noteW) {
          this.x = .5*noteW
        }else {
          this.x = newPosition.x - origX;
        }
        if(this.y > h-.5*noteH){
          this.y = h-.5*noteH
        }else if(this.y < .5*noteH) {
          this.y = .5*noteH
        }else {
          this.y = newPosition.y - origY;
        }


        //measure
        let i = this.index
        distance = Math.hypot(this.x - goals[i].x, this.y - goals[i].y)
        goals[i].alpha = (origD - distance)/origD + 0.5
        if(progress < 6 && document.querySelector(`#track${progress}`)){
          document.querySelector(`#track${progress}`).volume = ((origD - distance)/origD > 0.02 ? (origD - distance)/origD : 0.02)*.5
        }

        if(distance < 50) {
          this.x = goals[i].x
          this.y = goals[i].y
          this.texture = finishTexs[i]
          goals[i].alpha = 0
          this.active = false
          this.dragging = false
          origD = null
          progress++
          this.cursor = 'default'
          let div = document.createElement('div');
          div.innerHTML = content[set][progress-1];
          div.style.fontSize = '50px'
          div.style.zIndex = '999999'
          div.style.transform = 'translate(-50%, -50%) rotate('+(Math.random()*360)+'deg)'
          div.style.fontFamily = 'GRI'
          div.style.position = 'fixed'
          div.style.left = this.x+'px'
          div.style.top = this.y+'px'
          document.querySelector('.text').appendChild(div);

          if(progress === 6) {
            document.querySelectorAll('.track').forEach(i => {
              i.volume = 1
            })
            document.querySelector('.vid').style.opacity = 1
            app.view.style.mixBlendMode = 'exclusion'
          }
        }
      }
    }
    //end
  }



  switch() {
    document.querySelector('.text').innerHTML = '';

    set++
    if(set === answer.length) {
      set = 0
    }

    //reset notes
    notes.forEach((note,i) => {
      note.x = .5*w + (i - 3)*.06*w + .025*w
      note.y = .5*h
      note.active = true
      note.cursor = 'grab'
      note.texture = noteTexs[i]
    })
    //end

    //reset goals
    goals.forEach((goal,i) => {
      goal.alpha = 0
      goal.x = answer[set][i*2]*w
      goal.y = answer[set][i*2+1]*h
    })
    //end
  }




}

export { pixiRender }
