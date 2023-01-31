function setupGraphics(){
	angleMode(DEGREES)
	textAlign(CENTER,CENTER)
	rectMode(CENTER)
	colorMode(RGB,255,255,255,1)
	graphics.main=createGraphics(900,600)
	setupLayer(graphics.main)
	graphics.backgrounds=[]
	for(let a=0;a<10;a++){
		graphics.backgrounds.push(createGraphics(graphics.main.width*2,graphics.main.height*2))
		setupLayer(graphics.backgrounds[a])
	}
	for(let a=0;a<45;a++){
		for(let b=0;b<30;b++){
			graphics.backgrounds[0].fill(20,20,80+random(0,20))
			graphics.backgrounds[0].rect(20+a*40,20+b*40,40,40)
		}
	}
}