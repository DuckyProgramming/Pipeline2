function setupLayer(layer){
	layer.angleMode(DEGREES)
	layer.textAlign(CENTER,CENTER)
	layer.rectMode(CENTER)
	layer.colorMode(RGB,255,255,255,1)
	layer.noStroke()
}
function displayMenu(layer){
	layer.background(20,0,20)
	layer.fill(120)
	layer.noStroke()
	layer.rect(layer.width/2,layer.height/2,200,50,10)
	layer.rect(layer.width/2,layer.height*5/8,200,50,10)
	layer.rect(layer.width/2,layer.height*3/4,200,50,10)
	layer.fill(240)
	layer.textSize(60)
	layer.text('Duck Platformer\nCollection',layer.width/2,layer.height/4)
	layer.textSize(20)
	layer.text('The Duck Farm',layer.width/2,layer.height/2)
	layer.text('Duckymorph',layer.width/2,layer.height*5/8)
	layer.text('Ducky'+"'"+'s Caves',layer.width/2,layer.height*3/4)
}
function displayBorder(layer,edge){
	layer.noStroke()
	layer.fill(0)
	layer.rect(edge.x/2,-layer.height,layer.width*3+edge.x,layer.height*2)
	layer.rect(edge.x/2,layer.height+edge.y,layer.width*3+edge.x,layer.height*2)
	layer.rect(-layer.width,edge.y/2,layer.width*2,edge.y+layer.height*2)
	layer.rect(layer.width+edge.x,edge.y/2,layer.width*2,edge.y+layer.height*2)
	for(let a=0;a<5;a++){
		layer.fill(0,0.85-a*0.15)
		layer.rect(2+a*4,edge.y/2-a*2,4,edge.y-a*4)
		layer.rect(edge.x-2-a*4,edge.y/2-a*2,4,edge.y-a*4)
		layer.rect(edge.x/2,edge.y-2-a*4,edge.x-8-a*8,4)
	}
}
function displayTransition(layer,transition){
	layer.noStroke()
	layer.fill(0)
	layer.rect(transition.anim*layer.width/4,layer.height/2,transition.anim*layer.width/2,layer.height)
	layer.rect(layer.width-transition.anim*layer.width/4,layer.height/2,transition.anim*layer.width/2,layer.height)
	layer.rect(layer.width/2,transition.anim*layer.height/4,layer.width,transition.anim*layer.height/2)
	layer.rect(layer.width/2,layer.height-transition.anim*layer.height/4,layer.width,transition.anim*layer.height/2)
	if(transition.trigger){
		transition.anim=round(transition.anim*10+1)/10
		if(transition.anim>1.1){
			transition.trigger = false
			stage.scene=transition.scene
			if(stage.scene=='level'){
				game.level=transition.level
				game.zone=transition.zone
				resetWorld()
				generateWorld(graphics.main,levels[game.level][game.zone])
			}
		}
	}
	else if(transition.anim>0){
		transition.anim=round(transition.anim*10-1)/10
	}
}
function regTriangle(layer,x,y,radius,direction){
	layer.triangle(x+sin(direction)*radius,y+cos(direction)*radius,x+sin(direction+120)*radius,y+cos(direction+120)*radius,x+sin(direction+240)*radius,y+cos(direction+240)*radius);
}
function regPoly(layer,x,y,sides,radius,direction){
	layer.beginShape()
	for(let a=0;a<sides;a++){
		layer.vertex(x+sin(direction+a*360/sides)*radius,y+cos(direction+a*360/sides)*radius)
	}
	layer.endShape(CLOSE)
}
function pointInsideBox(point,box){
	if(point.position.x>box.position.x-box.width/2&&point.position.x<box.position.x+box.width/2&&point.position.y>box.position.y-box.height/2&&point.position.y<box.position.y+box.height/2){
		return true
	}
	else{
		return false
	}
}
function rotatePoint(point,direction,origin){
	return {x:dist(point.x-origin.x,point.y-origin.y,0,0)*sin(atan2(point.x-origin.x,point.y-origin.y)+direction),y:dist(point.x-origin.x,point.y-origin.y,0,0)*cos(atan2(point.x-origin.x,point.y-origin.y)+direction)}
}
function pushPoint(point,origin,size){
	if(dist(point.x,point.y,origin.x,origin.y)>size){
		return {x:point.x,y:point.y}
	}
	else{
		return {x:origin.x+sin(atan2(point.x-origin.x,point.y-origin.y))*size,y:origin.y+cos(atan2(point.x-origin.x,point.y-origin.y))*size}
	}
}
function boxInsideBox(box1,box2){
	if(box1.position.x>box2.position.x-box1.width/2-box2.width/2&&box1.position.x<box2.position.x+box1.width/2+box2.width/2&&box1.position.y>box2.position.y-box1.height/2-box2.height/2&&box1.position.y<box2.position.y+box1.height/2+box2.height/2){
		return true
	}
	else{
		return false
	}
}
function boxCollideBox(static,mobile){
	if(mobile.position.x==mobile.previous.position.x||mobile.position.x<static.position.x&&mobile.position.x<mobile.previous.position.x||mobile.position.x>static.position.x&&mobile.position.x>mobile.previous.position.x||mobile.position.x>static.position.x-static.width/2-mobile.width/2&&mobile.previous.position.x>static.position.x-static.width/2-mobile.width/2&&mobile.position.x<static.position.x+static.width/2+mobile.width/2&&mobile.previous.position.x<static.position.x+static.width/2+mobile.width/2){
		collision.incident.x=1
	}
	else if(mobile.position.x<static.position.x){
		collision.incident.x=(static.position.x-static.width/2-mobile.width/2-mobile.previous.position.x)/(mobile.position.x-mobile.previous.position.x)
	}
	else{
		collision.incident.x=(static.position.x+static.width/2+mobile.width/2-mobile.previous.position.x)/(mobile.position.x-mobile.previous.position.x)
	}
	if(mobile.position.y==mobile.previous.position.y||mobile.position.y<static.position.y&&mobile.position.y<mobile.previous.position.y||mobile.position.y>static.position.y&&mobile.position.y>mobile.previous.position.y||mobile.position.y>static.position.y-static.height/2-mobile.height/2&&mobile.previous.position.y>static.position.y-static.height/2-mobile.height/2&&mobile.position.y<static.position.y+static.height/2+mobile.height/2&&mobile.previous.position.y<static.position.y+static.height/2+mobile.height/2){
		collision.incident.y=1
	}
	else if(mobile.position.y<static.position.y){
		collision.incident.y=(static.position.y-static.height/2-mobile.height/2-mobile.previous.position.y)/(mobile.position.y-mobile.previous.position.y)
	}
	else{
		collision.incident.y=(static.position.y+static.height/2+mobile.height/2-mobile.previous.position.y)/(mobile.position.y-mobile.previous.position.y)
	}
	if(collision.incident.x<collision.incident.y){
		if(mobile.position.x<static.position.x){
			collision.calculate.x=static.position.x-static.width/2-mobile.width/2
		}
		else{
			collision.calculate.x=static.position.x+static.width/2+mobile.width/2
		}
		collision.calculate.y=mobile.previous.position.y*(1-collision.incident.y)+mobile.position.y*collision.incident.y
	}
	else{
		if(mobile.position.y<static.position.y){
			collision.calculate.y=static.position.y-static.height/2-mobile.height/2
		}
		else{
			collision.calculate.y=static.position.y+static.height/2+mobile.height/2
		}
		collision.calculate.x=mobile.previous.position.x*(1-collision.incident.x)+mobile.position.x*collision.incident.x
	}
	if(atan2(collision.calculate.x-static.position.x,collision.calculate.y-static.position.y)>atan2(-static.width/2-mobile.width/2,static.height/2+mobile.height/2)&&atan2(collision.calculate.x-static.position.x,collision.calculate.y-static.position.y)<atan2(static.width/2+mobile.width/2,static.height/2+mobile.height/2)){
		return 0
	}
	else if(atan2(collision.calculate.x-static.position.x,collision.calculate.y-static.position.y)<atan2(-static.width/2-mobile.width/2,-static.height/2-mobile.height/2)||atan2(collision.calculate.x-static.position.x,collision.calculate.y-static.position.y)>atan2(static.width/2+mobile.width/2,-static.height/2-mobile.height/2)){
		return 1
	}
	else if(atan2(collision.calculate.x-static.position.x,collision.calculate.y-static.position.y)<atan2(static.width/2+mobile.width/2,-static.height/2-mobile.height/2)&&atan2(collision.calculate.x-static.position.x,collision.calculate.y-static.position.y)>atan2(static.width/2+mobile.width/2,static.height/2+mobile.height/2)){
		return 2
	}
	else if(atan2(collision.calculate.x-static.position.x,collision.calculate.y-static.position.y)<atan2(-static.width/2-mobile.width/2,static.height/2+mobile.height/2)&&atan2(collision.calculate.x-static.position.x,collision.calculate.y-static.position.y)>atan2(-static.width/2-mobile.width/2,-static.height/2-mobile.height/2)){
		return 3
	}
	else{
		return -1
	}
}
function updateMouse(layer){
	inputs.mouse.x=mouseX
	inputs.mouse.y=mouseY
	inputs.rel.x=(inputs.mouse.x-width/2)/stage.scale+layer.width/2
	inputs.rel.y=(inputs.mouse.y-height/2)/stage.scale+layer.height/2
}
function resetWorld(){
	entities.clouds=[]
	entities.walls=[]
	entities.enemies=[]
	entities.players=[]
	entities.particles=[]
}
function generateWorld(layer,level){
	if(level.length>0&&level[0].length>0){
		game.edge.x=level[0].length*game.tileSize
		game.edge.y=level.length*game.tileSize
		stage.focus.x=game.edge.x/2
		stage.focus.y=game.edge.y/2
		for(let a=0,la=level.length;a<la;a++){
			for(let b=0,lb=level[a].length;b<lb;b++){
				if(level[a][b]>=100&&floor(level[a][b]/100)!=4&&floor(level[a][b]/100)!=31&&floor(level[a][b]/100)!=56){
					entities.walls.push(new wall(layer,b*game.tileSize+floor((level[a][b]%100)/10)*game.tileSize/2+game.tileSize/2,a*game.tileSize+(level[a][b]%10)*game.tileSize/2+game.tileSize/2,floor(level[a][b]/100),floor((level[a][b]%100)/10)*game.tileSize+game.tileSize,(level[a][b]%10)*game.tileSize+game.tileSize))
				}else if(level[a][b]<-1){
					entities.enemies.push(new enemy(layer,b*game.tileSize+game.tileSize/2,a*game.tileSize+game.tileSize/2,-level[a][b]-1))
				}else if(level[a][b]==-1){
					if(transition.dead){
						entities.players.push(new player(layer,game.check.x,game.check.y,game.check.type))
					}else{
						entities.players.push(new player(layer,b*game.tileSize+game.tileSize/2,a*game.tileSize+game.tileSize/2,0))
						game.check.x=b*game.tileSize+game.tileSize/2
						game.check.y=a*game.tileSize+game.tileSize/2
						game.check.type=0
					}
				}
			}
		}
		for(let a=0,la=level.length;a<la;a++){
			for(let b=0,lb=level[a].length;b<lb;b++){
				if(level[a][b]>=100&&(floor(level[a][b]/100)==4||floor(level[a][b]/100)==31||floor(level[a][b]/100)==56)){
					entities.walls.push(new wall(layer,b*game.tileSize+floor((level[a][b]%100)/10)*game.tileSize/2+game.tileSize/2,a*game.tileSize+(level[a][b]%10)*game.tileSize/2+game.tileSize/2,floor(level[a][b]/100),floor((level[a][b]%100)/10)*game.tileSize+game.tileSize,(level[a][b]%10)*game.tileSize+game.tileSize))
				}
			}
		}
	}
	switch(game.level){
		case 0: case 2:
			run={back:[],fore:[entities.walls,entities.enemies,entities.players,entities.particles]}
		break
		case 1:
			for(let a=0;a<10;a++){
				entities.clouds.push(new cloud(layer))
			}
			run={back:[entities.clouds],fore:[entities.walls,entities.enemies,entities.players,entities.particles]}
		break
	}
}