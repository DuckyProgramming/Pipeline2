function draw(){
	clear()
	background(125)
	graphics.main.clear()
	graphics.main.push()
	switch(stage.scene){
		case 'menu':
			displayMenu(graphics.main)
		break
		case 'level':
			switch(game.level){
				case 0:
					graphics.main.background(0,225,225)
				break
				case 1:
					graphics.main.background(0,150,255)
				break
				case 2:
					graphics.main.image(graphics.backgrounds[0],0,0,600,600)
				break
			}
			for(let a=0,la=run.back.length;a<la;a++){
				for(let b=0,lb=run.back[a].length;b<lb;b++){
					run.back[a][b].display()
					run.back[a][b].update()
				}
			}
			graphics.main.translate(-stage.focus.x,-stage.focus.y)
			graphics.main.scale(stage.focus.size*stage.quality)
			graphics.main.translate(graphics.main.width/2,graphics.main.height/2)
			for(let a=0,la=run.fore.length;a<la;a++){
				for(let b=0,lb=run.fore[a].length;b<lb;b++){
					run.fore[a][b].display()
					run.fore[a][b].update()
					if(run.fore[a][b].remove){
						run.fore[a].splice(b,1)
						b--
						lb--
					}
				}
			}
			displayBorder(graphics.main,game.edge)
		break
	}
	graphics.main.pop()
	stage.scale=min(width/graphics.main.width,height/graphics.main.height)
	displayTransition(graphics.main,transition)
	image(graphics.main,width/2-stage.scale*graphics.main.width/2,height/2-stage.scale*graphics.main.height/2,stage.scale*graphics.main.width,stage.scale*graphics.main.height)
	updateMouse(graphics.main)
}