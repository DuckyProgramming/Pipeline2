class wall extends physical{
	constructor(layer,x,y,type,width,height){
		super(layer,x,y,type,width,height)
		this.collide=[entities.enemies,entities.players]
        switch(this.type){
            case 3: case 32: case 41: case 43: case 47:
                this.position.y+=game.tileSize*0.3
                this.width-=10
                this.height*=0.4
            break
            case 5:
                this.timers=[0]
            break
            case 6: case 24:
                this.z=1
            break
            case 9:
                this.position.y-=game.tileSize*0.375
                this.width+=20
                this.height*=0.25
            break
            case 10:
                this.z=1
                this.width*=0.2
            break
            case 23:
                this.width-=4
                this.height-=4
            break
            case 26:
                this.position.y-=game.tileSize*0.375
                this.height*=0.25
            break
            case 30:
                this.width*=0.75
            break
            case 36:
                this.width+=5
                this.position.x+=2.5
                this.height-=10
            break
            case 37:
                this.hit=false
            break
            case 52: case 53:
                if(this.position.y>550){
                    for(a=0;a<4;a++){
                        entities.walls.push(new wall(this.layer,this.position.x,this.position.y-144-144*a,this.type,this.width,this.height))
                    }
                }
                this.height/=2
            break
            case 54:
                this.break=false
                this.height/=2
            break
            case 55:
                this.height/=2
            break
            case 59:
                this.width/=4
                this.height/=4
                this.timers=[0]
            break
            case 60:
                this.turn=false
            break
        }
	}
	display(){
		this.layer.translate(this.position.x,this.position.y)
		this.layer.noStroke()
		switch(this.type){
            case 2:
                this.layer.fill(150,this.fade)
                this.layer.rect(-this.width/2+1.5,0,3,this.height)
                this.layer.rect(this.width/2-1.5,0,3,this.height)
                this.layer.rect(0,-this.height/2+1.5,this.width,3)
                this.layer.rect(0,this.height/2-1.5,this.width,3)
                for(let a=0,la=this.width/game.tileSize*2-1;a<la;a++){
                    this.layer.rect(-this.width/2+this.width*(a+1)/(la+1),0,6,this.height)
                }
                for(let a=0,la=this.height/game.tileSize*2-1;a<la;a++){
                    this.layer.rect(0,-this.height/2+this.height*(a+1)/(la+1),this.width,6)
                }
            break
            case 3:
                for(let a=0,la=this.width/game.tileSize;a<la;a++){
                    this.layer.stroke(255,145,0,this.fade)
                    this.layer.strokeWeight(8)
                    this.layer.fill(255,145,0,this.fade)
                    this.layer.line(-this.width/2+this.width*a/la+game.tileSize/2-21,6,-this.width/2+this.width*a/la+game.tileSize/2+11,6)
                    this.layer.triangle(-this.width/2+this.width*a/la+game.tileSize/2-17,6,-this.width/2+this.width*a/la+game.tileSize/2+7,6,-this.width/2+this.width*a/la+game.tileSize/2-5,-19)
                    this.layer.noStroke()
                    this.layer.fill(255,this.fade)
                    this.layer.quad(-this.width/2+this.width*a/la+game.tileSize/2-17,-3,-this.width/2+this.width*a/la+game.tileSize/2+7,-3,-this.width/2+this.width*a/la+game.tileSize/2+3,-12,-this.width/2+this.width*a/la+game.tileSize/2-13,-12)
                }
            break
            case 4:
                this.layer.fill(0,125,0,this.fade)
                this.layer.noStroke()
                for(let a=0,la=this.width/game.tileSize;a<la;a++){
                    this.layer.ellipse(-this.width/2+this.width*a/la+game.tileSize/2-9,-11,30,30)
                    this.layer.ellipse(-this.width/2+this.width*a/la+game.tileSize/2+9,-9,30,30)
                    this.layer.ellipse(-this.width/2+this.width*a/la+game.tileSize/2-8,10,30,30)
                    this.layer.ellipse(-this.width/2+this.width*a/la+game.tileSize/2+11,13,30,30)
                }
            break
            case 5:
                this.layer.fill(225,this.fade*min(1,max(2-this.timers[0]/15,-15+this.timers[0]/15)))
                this.layer.stroke(255,this.fade*min(1,max(2-this.timers[0]/15,-15+this.timers[0]/15)))
                this.layer.strokeWeight(8)
                this.layer.rect(0,0,this.width-8,this.height-8,8)
            break
            case 6:
                this.layer.fill(100+this.z*50,this.fade)
                this.layer.rect(-this.width/2+1.5,0,3,this.height)
                this.layer.rect(this.width/2-1.5,0,3,this.height)
                this.layer.rect(0,-this.height/2+1.5,this.width,3)
                this.layer.rect(0,this.height/2-1.5,this.width,3)
                for(let a=0,la=this.width/game.tileSize*2-1;a<la;a++){
                    this.layer.rect(-this.width/2+this.width*(a+1)/(la+1),0,6,this.height)
                }
                for(let a=0,la=this.height/game.tileSize*2-1;a<la;a++){
                    this.layer.rect(0,-this.height/2+this.height*(a+1)/(la+1),this.width,6)
                }
                this.layer.stroke(200+this.z*55,this.fade)
                this.layer.fill(200+this.z*5,0,0,this.fade)
                this.layer.strokeWeight(3)
                regPoly(this.layer,0,0,8,12,22.5)
                this.layer.line(-3,-3,3,3)
                this.layer.line(-3,3,3,-3)
            break
            case 7:
                this.layer.fill(180,120,0,this.fade)
                this.layer.rect(0,0,this.width,this.height)
                this.layer.fill(90,60,0,this.fade)
                for(let a=0,la=this.height/game.tileSize*4;a<la;a++){
                    this.layer.rect(0,-this.height/2+this.height*a/la+game.tileSize/8,this.width,1.5)
                }
            break
            case 8:
                this.layer.fill(50,255,255,this.fade*0.6)
                this.layer.rect(0,0,this.width,this.height)
                this.layer.stroke(255,this.fade)
                this.layer.strokeWeight(2)
                for(let a=0,la=this.width/game.tileSize;a<la;a++){
                    this.layer.line(-this.width/2+this.width*a/la+game.tileSize/2-10,-10,-this.width/2+this.width*a/la+game.tileSize/2+10,10)
                    this.layer.line(-this.width/2+this.width*a/la+game.tileSize/2-10,5,-this.width/2+this.width*a/la+game.tileSize/2-5,10)
                    this.layer.line(-this.width/2+this.width*a/la+game.tileSize/2+10,-5,-this.width/2+this.width*a/la+game.tileSize/2+5,-10)
                }
            break
            case 9: case 26:
                this.layer.fill(150,this.fade)
                this.layer.rect(-this.width/2+1.5,0,3,this.height)
                this.layer.rect(this.width/2-1.5,0,3,this.height)
                this.layer.rect(0,-this.height/2+1.5,this.width,3)
                this.layer.rect(0,this.height/2-1.5,this.width,3)
            break
            case 10:
                this.layer.fill(125+this.z*130,0,0,this.fade)
                this.layer.rect(0,0,this.width+this.z*2,this.height)
                this.layer.fill(150+this.z*105,this.z*50,this.z*50,this.fade)
                this.layer.rect(0,0,this.width/3+this.z*2,this.height)
            break
            case 11:
                this.layer.fill(150,75,0,this.fade)
                this.layer.rect(0,0,this.width,this.height)
                this.layer.fill(0,200,0,this.fade)
                this.layer.rect(0,-this.height/2+8,this.width,16)
            break
            case 12: case 13:
                this.layer.fill(135)
                this.layer.rect(0,0,this.width,this.height)
                if(this.type==13){
                    this.layer.rotate(-30)
                    this.layer.fill(255,this.fade)
                    this.layer.textSize(12)
                    this.layer.text('Hatch',0,-12)
                    this.layer.textSize(30)
                    this.layer.text('A',0,6)
                    this.layer.rotate(30)
                }
            break
            case 14:
            break
            case 15: case 20:
                this.layer.fill(255,255,0,this.fade)
                this.layer.rect(0,0,this.width,this.height)
                this.layer.fill(0,this.fade)
                this.layer.quad(-20,-20,20,20,20,20/3,-20/3,-20)
                this.layer.quad(-20,-20/3,20/3,20,-20/3,20,-20,20/3)
                this.layer.triangle(20/3,-20,20,-20/3,20,-20)
                this.layer.stroke(75,this.fade)
                this.layer.strokeWeight(2)
                if(this.type==15){
                    this.layer.line(0,this.base.position.y-this.position.y-game.tileSize*3,0,this.base.position.y-this.position.y)
                    this.layer.strokeWeight(6)
                    this.layer.point(0,this.base.position.y-this.position.y-game.tileSize*3)
                    this.layer.point(0,this.base.position.y-this.position.y)
                }else{
                    this.layer.noFill()
                    this.layer.ellipse(this.base.position.x-this.position.x,this.base.position.y-this.position.y,80,80)
                }
            break
            case 16: case 17:
                this.layer.fill(95,this.fade)
                this.layer.stroke(60,this.fade)
                this.layer.strokeWeight(2)
                this.layer.rect(0,0,this.width-2,this.height-2)
                for(let a=0,la=this.width/10;a<la;a++){
                    if(this.type==16){
                        this.layer.line(-this.width/2+a*10+this.time%10,-this.height/2+1,-this.width/2+a*10+this.time%10,this.height/2-1)
                    }else {
                        this.layer.line(-this.width/2+a*10+10-this.time%10,-this.height/2+1,-this.width/2+a*10+10-this.time%10,this.height/2-1)
                    }
                }
            break
            case 18:
                this.layer.fill(0,this.fade*0.2)
                this.layer.rect(0,0,this.width,this.height)
                this.layer.fill(0,this.fade*0.1)
                for(let a=0;a<5;a++){
                    this.layer.rect(0,0,this.width-8-a*8,this.height-8-a*8)
                }
            break
            case 19:
                this.layer.fill(0,75,150,this.fade*0.6)
                this.layer.rect(0,0,this.width,this.height)
                this.layer.stroke(0,this.fade)
                this.layer.strokeWeight(2)
                for(let a=0,la=this.width/game.tileSize;a<la;a++){
                    this.layer.line(-this.width/2+this.width*a/la+game.tileSize/2-10,-10,-this.width/2+this.width*a/la+game.tileSize/2+10,10)
                    this.layer.line(-this.width/2+this.width*a/la+game.tileSize/2-10,5,-this.width/2+this.width*a/la+game.tileSize/2-5,10)
                    this.layer.line(-this.width/2+this.width*a/la+game.tileSize/2+10,-5,-this.width/2+this.width*a/la+game.tileSize/2+5,-10)
                }
            break
            case 21:
                this.layer.translate(0,sin(this.time*4)*3)
                this.layer.fill(255,0.4*this.fade)
                this.layer.noStroke()
                this.layer.rotate(this.time*3)
                for(let a=0;a<10;a++){
                    this.layer.arc(0,0,this.width+10,this.height+10,a*36-9,a*36+9)
                    this.layer.arc(0,0,this.width,this.height,a*36-3,a*36+3)
                }
                this.layer.rotate(this.time*-3)
                this.layer.fill(255,125,0,this.fade)
                this.layer.noStroke()
                this.layer.ellipse(0,0,25,25)
                this.layer.stroke(0,255,0,this.fade)
                this.layer.strokeWeight(5)
                this.layer.noFill()
                this.layer.bezier(0,-12,-2,-16,-5,-18,-7,-19)
                this.layer.bezier(0,-12,2,-14,6,-15,8,-15)
                this.layer.bezier(0,-12,-1,-13,-3,-10,-4,-6)
                this.layer.bezier(0,-12,3,-14,5,-8,10,-3)
                this.layer.translate(0,sin(this.time*4)*-3)
            break
            case 22:
                this.layer.fill(255,this.fade*0.6)
                if(this.width==game.tileSize){
                    this.layer.rect(0,0,this.width+10,this.height+10)
                }else{
                    this.layer.rect(0,0,this.width,this.height+10)
                }
                this.layer.fill(225,this.fade)
                this.layer.stroke(255,this.fade)
                this.layer.strokeWeight(3)
                for(let a=0,la=this.width/game.tileSize;a<la;a++){
                    this.layer.rect(-this.width/2+game.tileSize/2+this.width*a/la,0,game.tileSize-3,this.height-3)
                }
            break
            case 23:
                this.layer.fill(150,0,0,this.fade*0.6)
                this.layer.rect(0,0,this.width+4,this.height+4)
            break
            case 24:
                this.layer.fill(150,0,0,this.fade*(0.2+this.z*0.4))
                this.layer.rect(0,0,this.width*this.z,this.height)
            break
            case 25:
                this.layer.fill(35,this.fade)
                this.layer.rect(0,0,this.width,this.height)
                this.layer.fill(70,this.fade)
                for(let a=0,la=this.width/game.tileSize;a<la;a++){
                    this.layer.ellipse(-this.width/2+this.width*a/la+game.tileSize/2-10,-6,10,10)
                    this.layer.ellipse(-this.width/2+this.width*a/la+game.tileSize/2+8,-2,16,16)
                    this.layer.ellipse(-this.width/2+this.width*a/la+game.tileSize/2-5,11,14,14)
                }
            break
            case 27:
                this.layer.translate(0,sin(this.time*4)*3)
                this.layer.fill(255,0.4*this.fade)
                this.layer.noStroke()
                this.layer.rotate(this.time*3)
                for(let a=0;a<10;a++){
                    this.layer.arc(0,0,this.width+10,this.height+10,a*36-9,a*36+9)
                    this.layer.arc(0,0,this.width,this.height,a*36-3,a*36+3)
                }
                this.layer.rotate(this.time*-3)
                this.layer.fill(255,this.fade)
                this.layer.rect(-8,0,24,8)
                this.layer.triangle(4,-12,4,12,20,0)
                this.layer.translate(0,sin(this.time*4)*-3)
            break
            case 28:
                this.layer.stroke(105,this.fade)
                this.layer.strokeWeight(6)
                this.layer.noFill()
                if(this.width>game.tileSize){
                    for(let a=0,la=this.width/game.tileSize;a<la;a++){
                        this.layer.rect(-this.width/2+this.width*a/la+game.tileSize/2,0,34,34)
                        this.layer.line(-this.width/2+this.width*a/la+game.tileSize/2-17,-17,-this.width/2+this.width*a/la+game.tileSize/2+17,17)
                        this.layer.line(-this.width/2+this.width*a/la+game.tileSize/2+17,-17,-this.width/2+this.width*a/la+game.tileSize/2-17,17)
                    }
                }else{
                    for(let a=0,la=this.height/game.tileSize;a<la;a++){
                        this.layer.rect(0,-this.height/2+this.height*a/la+game.tileSize/2,34,34)
                        this.layer.line(-17,-this.height/2+this.height*a/la+game.tileSize/2-17,17,-this.height/2+this.height*a/la+game.tileSize/2+17)
                        this.layer.line(17,-this.height/2+this.height*a/la+game.tileSize/2-17,-17,-this.height/2+this.height*a/la+game.tileSize/2+17)
                    }
                }
            break
            case 29:
                this.layer.fill(155,85,0,this.fade)
                this.layer.rect(0,0,this.width,this.height)
                this.layer.fill(0,255,0,this.fade)
                this.layer.rect(0,-this.height/2+5,this.width,10)
                for(let a=0,la=this.width/game.tileSize;a<la;a++){
                    this.layer.triangle(-this.width/2+this.width*a/la+game.tileSize/2-20,-this.height/2+10,-this.width/2+this.width*a/la+game.tileSize/2-10,-this.height/2+17,-this.width/2+this.width*a/la+game.tileSize/2,-this.height/2+10)
                    this.layer.triangle(-this.width/2+this.width*a/la+game.tileSize/2-5,-this.height/2+10,-this.width/2+this.width*a/la+game.tileSize/2+3,-this.height/2+15,-this.width/2+this.width*a/la+game.tileSize/2+20,-this.height/2+10)
                }
            break
            case 30: case 36:
                this.layer.fill(105,45,0,this.fade)
                this.layer.rect(0,0,this.width,this.height)
            break
            case 31:
                this.layer.fill(25,175,25,this.fade)
                this.layer.noStroke()
                for(let a=0,la=this.width/game.tileSize;a<la;a++){
                    for(let b=0,lb=this.height/game.tileSize;b<lb;b++){
                        this.layer.ellipse(-this.width/2+this.width*a/la+game.tileSize/2-9,-this.height/2+this.height*b/lb+game.tileSize/2-11,30,30)
                        this.layer.ellipse(-this.width/2+this.width*a/la+game.tileSize/2+9,-this.height/2+this.height*b/lb+game.tileSize/2-9,30,30)
                        this.layer.ellipse(-this.width/2+this.width*a/la+game.tileSize/2-8,-this.height/2+this.height*b/lb+game.tileSize/2+10,30,30)
                        this.layer.ellipse(-this.width/2+this.width*a/la+game.tileSize/2+11,-this.height/2+this.height*b/lb+game.tileSize/2+13,30,30)
                    }
                }
            break
            case 32: case 41: case 43:
                if(this.type==32){
                    this.layer.stroke(105,this.fade)
                    this.layer.strokeWeight(6)
                    this.layer.noFill()
                }else if(this.type==41){
                    this.layer.stroke(200,255,255,this.fade)
                    this.layer.strokeWeight(6)
                    this.layer.noFill()
                }else if(this.type==43){
                    this.layer.stroke(120,0,0,this.fade)
                    this.layer.strokeWeight(6)
                    this.layer.noFill()
                }
                for(let a=0,la=this.width/game.tileSize;a<la;a++){
                    this.layer.line(-this.width/2+this.width*a/la+game.tileSize/2-5,-15,-this.width/2+this.width*a/la+game.tileSize/2-5,10)
                    this.layer.line(-this.width/2+this.width*a/la+game.tileSize/2-5,5,-this.width/2+this.width*a/la+game.tileSize/2-15,10)
                    this.layer.line(-this.width/2+this.width*a/la+game.tileSize/2-5,5,-this.width/2+this.width*a/la+game.tileSize/2+5,10)
                    this.layer.line(-this.width/2+this.width*a/la+game.tileSize/2-13,0,-this.width/2+this.width*a/la+game.tileSize/2-13,10)
                    this.layer.line(-this.width/2+this.width*a/la+game.tileSize/2+3,0,-this.width/2+this.width*a/la+game.tileSize/2+3,10)
                }
            break
            case 33:
                this.layer.fill(0,0,255,this.fade*0.5)
                this.layer.rect(0,0,this.width,this.height)
            break
            case 34:
                this.layer.fill(155,85,0,this.fade)
                this.layer.rect(0,0,this.width,this.height)
            break
            case 35:
                this.layer.fill(155,85,0,this.fade)
                this.layer.stroke(105,55,0,this.fade)
                this.layer.strokeWeight(3)
                this.layer.rect(0,15,10,10)
                if(!this.hit){
                    this.layer.rect(0,0,30,20)
                    this.layer.fill(255,this.fade)
                    this.layer.noStroke()
                    this.layer.textSize(8)
                    this.layer.text('No',0,-3)
                    this.layer.text('Ducks',0,3)
                }
            break
            case 37:
                this.layer.fill(155,85,0,this.fade)
                this.layer.stroke(105,55,0,this.fade)
                this.layer.strokeWeight(3)
                this.layer.rect(0,15,10,10)
                this.layer.rect(0,0,30,20)
                this.layer.fill(255,this.fade)
                this.layer.noStroke()
                this.layer.textSize(8)
                this.layer.text('Exit',0,0)
            break
            case 38:
                this.layer.fill(200,255,255,this.fade*0.6)
                this.layer.rect(0,0,this.width,this.height)
                this.layer.stroke(255,this.fade)
                this.layer.strokeWeight(2)
                for(let a=0,la=this.width/game.tileSize;a<la;a++){
                    this.layer.line(-this.width/2+this.width*a/la+game.tileSize/2-10,-10,-this.width/2+this.width*a/la+game.tileSize/2+10,10)
                    this.layer.line(-this.width/2+this.width*a/la+game.tileSize/2-10,5,-this.width/2+this.width*a/la+game.tileSize/2-5,10)
                    this.layer.line(-this.width/2+this.width*a/la+game.tileSize/2+10,-5,-this.width/2+this.width*a/la+game.tileSize/2+5,-10)
                }
            break
            case 39:
                this.layer.fill(255,0,255,this.fade*0.5)
                this.layer.rect(0,0,this.width,this.height)
            break
            case 40:
                this.layer.fill(0,this.fade*0.4)
                this.layer.rect(0,0,this.width,this.height)
                this.layer.fill(255,this.fade*0.1)
                for(let a=0;a<5;a++){
                    this.layer.rect(0,0,this.width-8-a*8,this.height-8-a*8)
                }
            break
            case 42:
                this.layer.fill(180,0,0,this.fade)
                this.layer.rect(0,0,this.width,this.height)
                for(let a=0;a<5;a++){
                    this.layer.fill(150-a*30,0,0,this.fade)
                    for(let b=0,lb=this.width/game.tileSize;b<lb;b++){
                        this.layer.rect(-this.width/2+this.width*b/lb+game.tileSize/2,0,game.tileSize-8-a*8,game.tileSize-8-a*8)
                    }
                }
            break
            case 44:
                this.layer.fill(200,100,0,this.fade*0.6)
                this.layer.rect(0,0,this.width,this.height)
                for(let a=0;a<5;a++){
                    this.layer.fill(200,100,0,this.fade*(0.1+a*0.1))
                    for(let b=0,lb=this.width/game.tileSize;b<lb;b++){
                        this.layer.rect(-this.width/2+this.width*b/lb+game.tileSize/2,0,game.tileSize-8-a*8,game.tileSize-8-a*8)
                    }
                }
            break
            case 45:
                this.layer.fill(50,255,50,this.fade*0.2)
                this.layer.rect(0,0,this.width,this.height)
                this.layer.strokeWeight(4)
                this.layer.noFill()
                for(let a=0;a<6;a++){
                    this.layer.stroke(50,255,50,this.fade*(0.9-a*0.15))
                    for(let b=0,lb=this.width/game.tileSize;b<lb;b++){
                        this.layer.rect(-this.width/2+this.width*b/lb+game.tileSize/2,0,game.tileSize-4-a*8,game.tileSize-4-a*8)
                    }
                }
            break
            case 46:
                this.layer.fill(150,50,150,this.fade*0.2)
                this.layer.rect(0,0,this.width,this.height)
                this.layer.strokeWeight(4)
                this.layer.noFill()
                for(let a=0;a<6;a++){
                    this.layer.stroke(150,50,150,this.fade*(0.9-a*0.15))
                    for(let b=0,lb=this.width/game.tileSize;b<lb;b++){
                        this.layer.rect(-this.width/2+this.width*b/lb+game.tileSize/2,0,game.tileSize-4-a*8,game.tileSize-4-a*8)
                    }
                }
            break
            case 47:
                this.layer.fill(200,150,100,this.fade)
                this.layer.rect(0,0,this.width,this.height)
                this.layer.fill(160,120,80,this.fade)
                this.layer.ellipse(-this.width/4,0,10,10)
                this.layer.ellipse(this.width/4,0,10,10)
            break
            case 48:
                this.layer.fill(35,65,95,this.fade)
                this.layer.rect(0,0,this.width,this.height)
            break
            case 49: case 55:
                this.layer.fill(35,65,95,this.fade)
                this.layer.rect(0,0,this.width,this.height)
                this.layer.stroke(20,40,60,this.fade)
                this.layer.strokeWeight(8)
                this.layer.line(-this.width/2+2,-this.height/2+3,this.width/2-2,-this.height/2+3)
            break
            case 50: case 54:
                this.layer.fill(50,100,150,this.fade)
                for(let a=0,la=this.height/game.tileSize*4;a<la;a++){
                    if(a%2==0){
                        for(let b=0,lb=this.width/game.tileSize*2;b<lb;b++){
                            this.layer.rect(-this.width/2+this.width*b/lb+game.tileSize/4,-this.height/2+this.height*a/la+game.tileSize/8,game.tileSize/2-1.5,game.tileSize/4-1.5,1.5)
                        }
                    }else{
                        this.layer.rect(-this.width/2+game.tileSize/8,-this.height/2+this.height*a/la+game.tileSize/8,game.tileSize/4-1.5,game.tileSize/4-1.5,1.5)
                        this.layer.rect(this.width/2-game.tileSize/8,-this.height/2+this.height*a/la+game.tileSize/8,game.tileSize/4-1.5,game.tileSize/4-1.5,1.5)
                        for(let b=0,lb=this.width/game.tileSize*2-1;b<lb;b++){
                            this.layer.rect(-this.width/2+this.width*b/(lb+1)+game.tileSize/2,-this.height/2+this.height*a/la+game.tileSize/8,game.tileSize/2-1.5,game.tileSize/4-1.5,1.5)
                        }
                    }
                }
            break
            case 51:
                this.layer.fill(255,this.fade*0.075)
                this.layer.rotate(this.time*3)
                for(let a=0;a<12;a++){
                    this.layer.rotate(5)
                    for(let b=0;b<10;b++){
                        this.layer.arc(0,0,a*4+4,a*4+4,b*36,b*36+18)
                    }
                }
                this.layer.rotate(-this.time*3-60)
            break
            case 52: case 53:
                this.layer.fill(235,120,0,this.fade)
                this.layer.rect(0,-this.height*0.4,this.width,this.height*0.2)
                this.layer.rect(0,this.height*0.4,this.width,this.height*0.2)
                for(let a=0;a<5;a++){
                    this.layer.rect(-this.width/2+a*this.width*9/40+this.width*0.05,0,this.width*0.1,this.height)
                }
            break
            case 56:
                this.layer.fill(180,this.fade)
                for(let a=0,la=this.width/game.tileSize;a<la;a++){
                    for(let b=0,lb=this.height/game.tileSize;b<lb;b++){
                        this.layer.ellipse(-this.width/2+this.width*a/la+game.tileSize/2,-this.height/2+this.height*b/lb+game.tileSize/2,12,12)
                        for(let c=0;c<8;c++){
                            this.layer.triangle(
                                -this.width/2+this.width*a/la+game.tileSize/2+sin(this.time*4+c*45)*32*((c%2)*0.2+0.8),-this.height/2+this.height*b/lb+game.tileSize/2+cos(this.time*4+c*45)*32*((c%2)*0.2+0.8),
                                -this.width/2+this.width*a/la+game.tileSize/2+cos(this.time*4+c*45)*4*((c%2)*0.2+0.8),-this.height/2+this.height*b/lb+game.tileSize/2-sin(this.time*4+c*45)*4*((c%2)*0.2+0.8),
                                -this.width/2+this.width*a/la+game.tileSize/2-cos(this.time*4+c*45)*4*((c%2)*0.2+0.8),-this.height/2+this.height*b/lb+game.tileSize/2+sin(this.time*4+c*45)*4*((c%2)*0.2+0.8),
                            )
                        }
                    }
                }
            break
            case 57: case 58:
                this.layer.fill(25,50,75,this.fade)
                this.layer.rect(0,0,this.width,this.height)
                this.layer.fill(30,60,90,this.fade)
                this.layer.triangle(-this.width/2,-this.height/2,-this.width/2,this.height/2,-this.width/2+game.tileSize/4,-this.height/2)
                for(a=0,la=this.width/game.tileSize*2-1;a<la;a++){
                    this.layer.quad(
                        -this.width/2+game.tileSize/2+a*game.tileSize/2,-this.height/2,
                        -this.width/2+game.tileSize*3/4+a*game.tileSize/2,-this.height/2,
                        -this.width/2+game.tileSize/2+a*game.tileSize/2,this.height/2,
                        -this.width/2+game.tileSize/4+a*game.tileSize/2,this.height/2,
                    )
                }
                this.layer.triangle(this.width/2,this.height/2,this.width/2,-this.height/2,this.width/2-game.tileSize/4,this.height/2)
            break
            case 59:
                this.layer.stroke(255,255,200,this.fade*min(1,max(1-this.timers[0]/15,-15+this.timers[0]/15)))
                this.layer.strokeWeight(4)
                this.layer.noFill()
                regPoly(this.layer,0,0,3,this.width*0.8,60)
            break
            case 60:
                this.layer.rotate(this.position.x*3)
                this.layer.fill(225,185,0,this.fade)
                this.layer.ellipse(0,0,80,80)
                this.layer.beginShape()
                this.layer.vertex(-34,-34)
                this.layer.bezierVertex(10,-36,18,-30,28,-28)
                this.layer.vertex(-28,28)
                this.layer.bezierVertex(-30,18,-36,10,-34,-34)
                this.layer.endShape()
                this.layer.beginShape()
                this.layer.vertex(34,34)
                this.layer.bezierVertex(-10,36,-18,30,-28,28)
                this.layer.vertex(28,-28)
                this.layer.bezierVertex(30,-18,36,-10,34,34)
                this.layer.endShape()
                for(let a=0;a<9;a++){
                    this.layer.fill(225-a*6,185-a*5,0)
                    this.layer.ellipse(0,0,72-a*8,72-a*8)
                }
                this.layer.rotate(this.position.x*-3)
            break
            case 61:
                this.layer.fill(125,200,255,this.fade)
                this.layer.rect(0,0,this.width,this.height)
                this.layer.stroke(150,225,255,this.fade)
                this.layer.strokeWeight(4)
                for(let a=0,la=this.width/game.tileSize;a<la;a++){
                    this.layer.line(-this.width/2+this.width*a/la+game.tileSize/2-10,-10,-this.width/2+this.width*a/la+game.tileSize/2+10,10)
                    this.layer.line(-this.width/2+this.width*a/la+game.tileSize/2-10,5,-this.width/2+this.width*a/la+game.tileSize/2-5,10)
                    this.layer.line(-this.width/2+this.width*a/la+game.tileSize/2+10,-5,-this.width/2+this.width*a/la+game.tileSize/2+5,-10)
                }
            break
            case 62:
                this.layer.fill(155,85,0,this.fade)
                this.layer.stroke(105,55,0,this.fade)
                this.layer.strokeWeight(3)
                this.layer.rect(0,15,10,10)
                this.layer.rect(0,0,30,20)
                this.layer.fill(255,this.fade)
                this.layer.noStroke()
                this.layer.textSize(8)
                this.layer.text('Press',0,-3)
                this.layer.text('Down',0,3)
            break
		}
		this.layer.translate(-this.position.x,-this.position.y)
	}
	update(){
        switch(this.type){
            case 5: case 59:
                if(this.timers[0]>0){
                    this.timers[0]++
                    if(this.timers[0]>=240){
                        this.timers[0]=0
                    }
                }
            break
            case 6: case 10: case 24:
                if(this.time%180<30){
                    this.z=round(this.z*30-1)/30
                }else if(this.time%180>=90&&this.time%180<120){
                    this.z=round(this.z*30+1)/30
                }
            break
            case 15:
                if(this.time%240<60){
                    this.position.y-=2
                }else if(this.time%240>=120&&this.time%240<180){
                    this.position.y+=2
                }
            break
            case 20:
                this.position.x=this.base.position.x+sin(this.time*2)*40
                this.position.y=this.base.position.y+cos(this.time*2)*40
            break
            case 52:
                this.position.y++
                if(this.position.y>660){
                    this.position.y-=720
                }
            break
            case 53:
                this.position.y--
                if(this.position.y<-60){
                    this.position.y+=720
                }
            break
            case 54:
                if(this.break){
                    this.status=1
                    if(this.fade<=0){
                        this.remove=true
                    }
                }
            break
            case 57:
                if(this.time%180<60){
                    this.position.y+=4/3
                }else if(this.time%180>=90&&this.time%180<150){
                    this.position.y-=4/3
                }
            break
            case 58:
                if(this.time%180<60){
                    this.position.y+=2/3
                }else if(this.time%180>=90&&this.time%180<150){
                    this.position.y-=2/3
                }
            break
            case 60:
                if(this.turn){
                    this.position.x-=2
                }else{
                    this.position.x+=2
                }
                for(let a=0,la=entities.walls.length;a<la;a++){
                    if(boxInsideBox(this,entities.walls[a])){
                        if(this.turn&&entities.walls[a].position.x<this.position.x){
                            this.turn=false
                        }else if(!this.turn&&entities.walls[a].position.x>this.position.x){
                            this.turn=true
                        }
                    }
                }
            break
        }
		for(let a=0,la=this.collide.length;a<la;a++){
            for(let b=0,lb=this.collide[a].length;b<lb;b++){
                if(boxInsideBox(this,this.collide[a][b])&&this.collide[a][b].timers[1]<=0&&!(a==1&&this.type==1)&&!(this.type==5&&this.timers[0]>30)&&!(this.type==6&&this.z<0.5)&&!((this.type==10||this.type==24)&&this.z<0.9)&&!(this.type==59&&this.timers[0]>0)&&this.type!=62&&!this.collide[a][b].dead){
                    switch(this.type){
                        case 3: case 10: case 23: case 24: case 32: case 56:
                            this.collide[a][b].dead=true
                        break
                        case 5: case 59:
                            if(this.timers[0]==0){
                                this.timers[0]++
                            }
                        break
                        case 6:
                            if(this.z==0.5){
                                this.collide[a][b].dead=true
                            }
                        break
                        case 21: case 37: case 51:
                            if(a==1){
                                transition.trigger++
                                transition.scene='level'
                                transition.zone=game.zone+1
                                transition.dead=false
                            }
                        break
                        case 22:
                            if(a==1){
                                this.collide[a][b].hype=5
                            }
                        break
                        case 27:
                            if(a==1){
                                transition.trigger++
                                transition.scene='menu'
                            }
                        break
                        case 38:
                            if(a==1&&this.collide[a][b].type!=1){
                                this.collide[a][b].type=1
                                entities.particles.push(new particle(this.layer,this.collide[a][b].position.x,this.collide[a][b].position.y,0,[200,255,255]))
                            }
                        break
                        case 40:
                            if(a==1&&this.collide[a][b].type!=0){
                                this.collide[a][b].type=0
                                entities.particles.push(new particle(this.layer,this.collide[a][b].position.x,this.collide[a][b].position.y,0,[0,0,0]))
                            }
                        break
                        case 41:
                            if(this.collide[a][b].type!=1){
                                this.collide[a][b].dead=true
                            }
                        break
                        case 42:
                            if(a==1&&this.collide[a][b].type!=2){
                                this.collide[a][b].type=2
                                entities.particles.push(new particle(this.layer,this.collide[a][b].position.x,this.collide[a][b].position.y,0,[180,0,0]))
                            }
                        break
                        case 43:
                            if(this.collide[a][b].type!=2){
                                this.collide[a][b].dead=true
                            }
                        break
                        case 44:
                            if(a==1&&this.collide[a][b].type!=3){
                                this.collide[a][b].type=3
                                entities.particles.push(new particle(this.layer,this.collide[a][b].position.x,this.collide[a][b].position.y,0,[200,100,0]))
                            }
                        break
                        case 45:
                            if(a==1&&this.collide[a][b].type!=4){
                                this.collide[a][b].type=4
                                entities.particles.push(new particle(this.layer,this.collide[a][b].position.x,this.collide[a][b].position.y,0,[0,255,75]))
                            }
                        break
                        case 46:
                            if(a==1&&this.collide[a][b].type!=5){
                                this.collide[a][b].type=5
                                entities.particles.push(new particle(this.layer,this.collide[a][b].position.x,this.collide[a][b].position.y,0,[150,50,150]))
                            }
                        break
                        case 54:
                            this.break=true
                        break
                    }
                    if(!this.collide[a][b].dead){
                        if(this.type==18){
                            this.collide[a][b].timers[0]=5
                            this.collide[a][b].velocity.x*=0.9
                            this.collide[a][b].velocity.y=constrain(this.collide[a][b].velocity.y,-1.2,0.4)
                            this.collide[a][b].movement.jump=1.2
                        }else if(this.type==33){
                            this.collide[a][b].timers[0]=5
                            this.collide[a][b].velocity.y=constrain(this.collide[a][b].velocity.y,-2.4,0.8)
                            this.collide[a][b].movement.jump=2.4
                        }else if(this.type==39){
                            this.collide[a][b].timers[0]=5
                            this.collide[a][b].velocity.y=constrain(this.collide[a][b].velocity.y,-2.4,0.8)
                            this.collide[a][b].movement.jump=2.4
                            if(this.collide[a][b].type!=0&&this.collide[a][b].type!=5){
                                this.collide[a][b].dead=true
                            }
                        }else if(this.type==35){
                            if(!this.hit&&a==1){
                                game.check.x=this.position.x
                                game.check.y=this.position.y
                                game.check.type=this.collide[a][b].type
                                this.hit=true
                            }
                        }else if(this.type==59){
                            this.collide[a][b].jumps++
                        }else{
                            this.collide[a][b].squish[boxCollideBox(this,this.collide[a][b])]=true
                            if(boxCollideBox(this,this.collide[a][b])==0&&this.collide[a][b].velocity.y<0){
                                this.collide[a][b].position.y=this.position.y+this.height/2+this.collide[a][b].height/2
                                this.collide[a][b].velocity.y=0
                            }
                            else if(boxCollideBox(this,this.collide[a][b])==1&&this.collide[a][b].velocity.y>0){
                                this.collide[a][b].position.y=this.position.y-this.height/2-this.collide[a][b].height/2
                                if(this.type==4||a==1&&this.collide[a][b].type==5&&this.collide[a][b].velocity.y>1){
                                    this.collide[a][b].velocity.y*=-0.95
                                }else{
                                    this.collide[a][b].velocity.y=0
                                }
                                this.collide[a][b].velocity.x*=(1-physics.friction)
                                this.collide[a][b].timers[0]=5
                                if(this.type==8){
                                    this.collide[a][b].velocity.x*=1.1
                                }else if(this.type==16){
                                    this.collide[a][b].position.x+=2
                                }else if(this.type==17){
                                    this.collide[a][b].position.x-=2
                                }else if(this.type==19){
                                    this.collide[a][b].velocity.x*=1.2
                                }else if(this.type==47){
                                    this.collide[a][b].velocity.y=-40
                                }else if(this.type==52){
                                    this.collide[a][b].velocity.y=1
                                }else if(this.type==53){
                                    this.collide[a][b].velocity.y=-1
                                }else if(this.type==61){
                                    this.collide[a][b].velocity.x*=1.15
                                }
                            }
                            else if(boxCollideBox(this,this.collide[a][b])==2&&this.collide[a][b].velocity.x<0){
                                this.collide[a][b].position.x=this.position.x+this.width/2+this.collide[a][b].width/2
                                this.collide[a][b].velocity.x=0
                                this.collide[a][b].velocity.y*=(1-physics.friction)
                                if(a==0&&this.collide[a][b].mode==0){
                                    this.collide[a][b].mode=1
                                }
                            }
                            else if(boxCollideBox(this,this.collide[a][b])==3&&this.collide[a][b].velocity.x>0){
                                this.collide[a][b].position.x=this.position.x-this.width/2-this.collide[a][b].width/2
                                this.collide[a][b].velocity.x=0
                                this.collide[a][b].velocity.y*=(1-physics.friction)
                                if(a==0&&this.collide[a][b].mode==1){
                                    this.collide[a][b].mode=0
                                }
                            }
                        }
                    }
                }
            }
        }
        super.update()
	}
}