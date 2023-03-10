function draw(){
	clear()
	background(125)
	graphics.main.clear()
	switch(stage.scene){
		case 'menu':
			displayMenu(graphics.main)
		break
		case 'level':
			graphics.main.image(graphics.backgrounds[0],(-stage.focus.x/2)%1600,(-stage.focus.y/2)%1200,graphics.main.width*2,graphics.main.height*2)
			graphics.main.image(graphics.backgrounds[0],(-stage.focus.x/2)%1600+1600,(-stage.focus.y/2)%1200,graphics.main.width*2,graphics.main.height*2)
			graphics.main.image(graphics.backgrounds[0],(-stage.focus.x/2)%1600,(-stage.focus.y/2)%1200+1200,graphics.main.width*2,graphics.main.height*2)
			graphics.main.image(graphics.backgrounds[0],(-stage.focus.x/2)%1600+1600,(-stage.focus.y/2)%1200+1200,graphics.main.width*2,graphics.main.height*2)
			for(let a=0,la=run.back.length;a<la;a++){
				for(let b=0,lb=run.back[a].length;b<lb;b++){
					run.back[a][b].update()
					run.back[a][b].display()
				}
			}
			for(let a=0,la=run.fore.length;a<la;a++){
				graphics.main.push()
				graphics.main.translate(-stage.focus.x,-stage.focus.y)
				graphics.main.scale(stage.focus.size*stage.quality)
				graphics.main.translate(graphics.main.width/2,graphics.main.height/2)
				for(let b=0,lb=run.fore[a].length;b<lb;b++){
					run.fore[a][b].display()
					run.fore[a][b].update()
					if(run.fore[a][b].remove){
						run.fore[a].splice(b,1)
						b--
						lb--
					}
				}
				graphics.main.pop()
			}
			graphics.main.push()
			graphics.main.translate(-stage.focus.x,-stage.focus.y)
			graphics.main.scale(stage.focus.size*stage.quality)
			graphics.main.translate(graphics.main.width/2,graphics.main.height/2)
			for(let a=0,la=run.info.length;a<la;a++){
				for(let b=0,lb=run.info[a].length;b<lb;b++){
					run.info[a][b].displayInfo()
				}
			}
			displayBorder(graphics.main,game.edge)
			graphics.main.pop()
		break
	}
	stage.scale=min(width/graphics.main.width,height/graphics.main.height)
	displayTransition(graphics.main,transition)
	image(graphics.main,width/2-stage.scale*graphics.main.width/2,height/2-stage.scale*graphics.main.height/2,stage.scale*graphics.main.width,stage.scale*graphics.main.height)
	updateMouse(graphics.main)
}