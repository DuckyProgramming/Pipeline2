class enemy extends partisan{
    constructor(layer,x,y,type){
        super(layer,x,y,type,30,50)
        this.offset={position:{x:0,y:0}}
        this.anim={direction:0,rate:0}
        this.movement={speed:0.1,jump:6}
        this.mode=0
        this.ice=0
        switch(this.type){
            case 2: case 4: case 6:
                this.trigger.physics.gravity=false
            break
            case 5:
                this.height+=10
            break
        }
    }
    display(){
        if(this.fade>0&&this.size>0){
            this.layer.translate(this.position.x+this.offset.position.x,this.position.y+this.offset.position.y)
            this.layer.scale(this.size)
            switch(this.type){
                case 1: case 2: case 3: case 4:
                    this.layer.fill(50,150,255,this.fade)
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
                    this.layer.fill(125,200,255,this.fade)
                    this.layer.ellipse(this.anim.direction*16,-10,20,12)
                    this.layer.stroke(0,50,200,this.fade)
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
                    if(this.type==2){
                        this.layer.strokeWeight(2)
                        this.layer.line(0,-30,0,-34)
                        this.layer.line(0,-34,sin(this.time*20)*12,-34+cos(this.time*20)*2)
                        this.layer.line(0,-34,sin(this.time*20)*-12,-34+cos(this.time*20)*-2)
                    }else if(this.type==3){
                        this.layer.strokeWeight(2)
                        this.layer.line(0,-30,0,-34)
                        this.layer.stroke(255,0,0,this.fade)
                        this.layer.strokeWeight(4)
                        this.layer.point(0,-34)
                    }else if(this.type==4){
                        this.layer.strokeWeight(2)
                        this.layer.line(0,-30,0,-34)
                        this.layer.line(0,-34,sin(this.time*20)*12,-34+cos(this.time*20)*2)
                        this.layer.line(0,-34,sin(this.time*20)*-12,-34+cos(this.time*20)*-2)
                        this.layer.stroke(255,0,0,this.fade)
                        this.layer.strokeWeight(4)
                        this.layer.point(0,-34)
                    }
                    this.layer.translate(0,sin(this.time*10)*-2)
                break
                case 5: case 6:
                    this.layer.noStroke()
                    if(this.type==6){
                        this.layer.fill(135,this.fade)
                        this.layer.rect(0,0,28,20,4)
                        this.layer.stroke(0,this.fade)
                        this.layer.strokeWeight(4)
                        this.layer.line(sin(this.time*15)*-18,-14,sin(this.time*15)*18,-14)
                        this.layer.noStroke()
                    }
                    this.layer.fill(0,this.fade)
                    this.layer.ellipse(0,0,18,28)
                    this.layer.stroke(0,this.fade)
                    this.layer.strokeWeight(4)
                    this.layer.line(-3,5,-cos(this.anim.rate*5)*2-8,32)
                    this.layer.line(3,5,cos(this.anim.rate*5)*2+8,32)
                    this.layer.line(-6,-6,-cos(this.anim.rate*5)*2-12,18)
                    this.layer.line(6,-6,cos(this.anim.rate*5)*2+12,18)
                    this.layer.fill(255,this.fade)
                    this.layer.noStroke()
                    this.layer.triangle(-6,-10,6,-10,this.anim.direction*4,-2)
                    this.layer.fill(0,205,255,this.fade)
                    this.layer.quad(0,-25,-3+this.anim.direction*4,-1,this.anim.direction*5,2,3+this.anim.direction*4,-1)
                    this.layer.fill(255,205,105,this.fade)
                    this.layer.ellipse(0,-20,25,25)
                    this.layer.stroke(0,this.fade)
                    this.layer.strokeWeight(2)
                    this.layer.line(max(-6+this.anim.direction*6,-10),-14,min(6+this.anim.direction*6,10),-14)
                    this.layer.strokeWeight(4)
                    this.layer.point(-4+this.anim.direction*6,-19)
                    this.layer.point(4+this.anim.direction*6,-19)
                    this.layer.line(-10,-30,10,-30)
                    this.layer.fill(0,this.fade)
                    this.layer.noStroke()
                    this.layer.rect(0,-36,16,12,3)
                break
            }
            if(this.ice>0){
                this.layer.fill(200,255,255,this.fade*min(this.ice/60,0.5))
                this.layer.noStroke()
                this.layer.rect(0,0,this.width*1.5,this.height*1.5)
            }
            this.layer.scale(1/this.size)
            this.layer.translate(-this.position.x-this.offset.position.x,-this.position.y-this.offset.position.y)
        }
    }
    update(){
        super.update()
        if(this.dead&&this.fade<=0){
            this.remove=true
        }
        if(this.mode==0){
            this.velocity.x-=this.movement.speed
            if(this.anim.direction>-1){
                this.anim.direction-=0.1
            }
        }
        if(this.mode==1){
            this.velocity.x+=this.movement.speed
            if(this.anim.direction<1){
                this.anim.direction+=0.1
            }
        }
        if(this.mode==0&&this.position.x<5){
            this.mode=1
        }else if(this.mode==1&&this.position.x>game.edge.x-5){
            this.mode=0
        }
        if(floor(random(0,60))==0){
            if(this.mode<0||this.mode>1){
                this.mode=floor(random(0,2))
            }else{
                this.mode=1-this.mode
            }
        }
        if(this.ice>0){
            this.ice--
            this.mode=2
        }
        else if(!this.dead){
            for(let a=0,la=entities.players.length;a<la;a++){
                if(boxInsideBox(entities.players[a],this)&&!entities.players[a].dead){
                    if(entities.players[a].type==2){
                        this.dead=true
                        entities.particles.push(new particle(this.layer,this.position.x,this.position.y,0,[180,0,0]))
                    }else if(entities.players[a].position.y<this.position.y-this.height/2&&entities.players[a].type!=3){
                        if(this.type!=3&&this.type!=4){
                            this.dead=true
                        }
                        if(inputs.keys[0][2]||inputs.keys[1][2]){
                            entities.players[a].velocity.y=-entities.players[a].movement.jump
                        }else{
                            entities.players[a].velocity.y=-entities.players[a].movement.jump*0.5
                        }
                    }else if(entities.players[a].type==1){
                        this.ice=300
                    }else{
                        entities.players[a].dead=true
                    }
                }
            }
        }
    }
}