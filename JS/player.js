class player extends partisan{
    constructor(layer,x,y,type){
        super(layer,x,y,type,30,50)
        this.offset={position:{x:0,y:0}}
        this.anim={direction:0,rate:0}
        this.movement={speed:0.4,jump:12}
        this.base.movement={jump:this.movement.jump}
        this.reload=0
        this.jumps=0
        this.hype=false
        this.jumped=false
    }
    display(){
        if(this.fade>0&&this.size>0){
            this.layer.translate(this.position.x+this.offset.position.x,this.position.y+this.offset.position.y)
            this.layer.scale(this.size)
            switch(this.type){
                case 0:
                    this.layer.fill(255,235,0,this.fade)
                break
                case 1:
                    this.layer.fill(150,255,255,this.fade)
                break
                case 2:
                    this.layer.fill(100,0,0,this.fade)
                break
                case 3:
                    this.layer.fill(200,100,0,this.fade)
                break
                case 4:
                    this.layer.fill(0,255,75,this.fade)
                break
                case 5:
                    this.layer.fill(150,0,100,this.fade)
                break
            }
            this.layer.noStroke()
            this.layer.ellipse(-cos(this.anim.rate*5)-8,22,16,16)
            this.layer.ellipse(cos(this.anim.rate*5)+8,22,16,16)
            this.layer.translate(0,sin(this.time*10)*2)
            this.layer.ellipse(0,-15,30,30)
            this.layer.ellipse(0,5,18,28)
            this.layer.translate(-5+max(0,this.anim.direction)*10,5)
            this.layer.rotate(sin(this.time*10)*20)
            this.layer.ellipse(-10+max(0,this.anim.direction)*20,0,20,14)
            this.layer.rotate(sin(this.time*10)*-20)
            this.layer.translate(10-max(0,this.anim.direction)*10+min(0,this.anim.direction)*10,0)
            this.layer.rotate(sin(this.time*10)*-20)
            this.layer.ellipse(10+min(0,this.anim.direction)*20,0,20,14)
            this.layer.rotate(sin(this.time*10)*20)
            this.layer.translate(-5-min(0,this.anim.direction)*10,-5)
            switch(this.type){
                case 0:
                    this.layer.fill(255,125,0,this.fade)
                break
                case 1:
                    this.layer.fill(50,255,255,this.fade)
                break
                case 2:
                    this.layer.fill(225,25,25,this.fade)
                break
                case 3:
                    this.layer.fill(150,75,50,this.fade)
                break
                case 4:
                    this.layer.fill(25,100,0,this.fade)
                break
                case 5:
                    this.layer.fill(255,0,255,this.fade)
                break
            }
            this.layer.ellipse(this.anim.direction*16,-10,20,12)
            switch(this.type){
                case 0:
                    this.layer.stroke(0,this.fade)
                break
                case 1:
                    this.layer.stroke(0,150,255,this.fade)
                break
                case 2:
                    this.layer.stroke(255,50,50,this.fade)
                break
                case 3:
                    this.layer.stroke(255,125,25,this.fade)
                break
                case 4:
                    this.layer.stroke(150,255,150,this.fade)
                break
                case 5:
                    this.layer.stroke(255,100,255,this.fade)
                break
            }
            this.layer.strokeWeight(1)
            this.layer.line(-9+this.anim.direction*16,-10,9+this.anim.direction*16,-10)
            if(this.anim.direction>-0.7){
                this.layer.line(-4+this.anim.direction*24,-12,-4+this.anim.direction*24,-14-min(0,this.anim.direction+0.5)*10)
            }
            if(this.anim.direction<0.7){
                this.layer.line(4+this.anim.direction*24,-12,4+this.anim.direction*24,-14+max(0,this.anim.direction-0.5)*10)
            }
            if(this.anim.direction>-0.95){
                this.layer.strokeWeight(3+min(0,this.anim.direction+0.75)*15)
                this.layer.point(-4+this.anim.direction*12,-19)
            }
            if(this.anim.direction<0.95){
                this.layer.strokeWeight(3-max(0,this.anim.direction-0.75)*15)
                this.layer.point(4+this.anim.direction*12,-19)
            }
            if(this.jumps>0){
                this.layer.fill(255,255,200,this.fade)
                this.layer.noStroke()
                for(a=0,la=this.jumps;a<la;a++){
                    this.layer.ellipse(6-la*6+a*12,-90,8,8)
                }
            }
            this.layer.translate(0,sin(this.time*10)*-2)
            this.layer.scale(1/this.size)
            this.layer.translate(-this.position.x-this.offset.position.x,-this.position.y-this.offset.position.y)
        }
    }
    update(){
        if(this.dead&&this.fade<=0){
            transition.trigger=true
            transition.scene='level'
            transition.dead=true
        }
        if(inputs.keys[0][0]||inputs.keys[1][0]){
            this.velocity.x-=this.movement.speed
            if(this.hype>0){
                this.velocity.x-=this.movement.speed/2
            }
            if(this.anim.direction>-1){
                this.anim.direction-=0.1
            }
        }
        if(inputs.keys[0][1]||inputs.keys[1][1]){
            this.velocity.x+=this.movement.speed
            if(this.hype>0){
                this.velocity.x+=this.movement.speed/2
            }
            if(this.anim.direction<1){
                this.anim.direction+=0.1
            }
        }
        if(!inputs.keys[0][0]&&!inputs.keys[1][0]&&!inputs.keys[0][1]&&!inputs.keys[1][1]){
            this.anim.direction*=0.95
        }
        if((inputs.keys[0][2]||inputs.keys[1][2])&&(this.timers[0]>0||this.jumps>0&&!this.jumped)){
            if(this.timers[0]>0){
                this.timers[0]=0
            }else{
                this.jumps--
                this.jumped=true
            }
            this.velocity.y=-this.movement.jump
            if(this.hype>0){
                this.velocity.y-=this.movement.jump/2
            }
            this.timers[1]=1
        }
        if(this.hype>0){
            this.hype--
        }
        this.movement.jump=this.base.movement.jump
        switch(game.level){
            case 0:
                stage.focus.x=game.edge.x/2
                stage.focus.y=game.edge.y/2
            break
            case 1: case 2:
                stage.focus.x=this.position.x
                stage.focus.y=game.edge.y/2
            break
        }
        if(this.reload>0){
            this.reload--
        }
        if(this.type==4&&this.reload<=0&&(inputs.keys[0][3]||inputs.keys[1][3])){
            if(inputs.keys[0][0]||inputs.keys[1][0]){
                entities.particles.push(new particle(this.layer,this.position.x,this.position.y,0,[0,255,50]))
                this.velocity.x-=20
                this.reload=15
            }
            if(inputs.keys[0][1]||inputs.keys[1][1]){
                entities.particles.push(new particle(this.layer,this.position.x,this.position.y,0,[0,255,50]))
                this.velocity.x+=20
                this.reload=15
            }
        }
        if(this.type==3){
            this.velocity.y=constrain(this.velocity.y-physics.gravity/4,-10,1.5)
        }
        if(this.type==2){
            this.velocity.x*=0.975
        }
        if(this.type==1){
            this.velocity.x*=1.05
            this.trigger.physics.friction=false
        }else{
            this.trigger.physics.friction=true
        }
        super.update()
    }
}