function setupGraphics(){
	angleMode(DEGREES)
	textAlign(CENTER,CENTER)
	rectMode(CENTER)
	colorMode(RGB,255,255,255,1)
	graphics.main=createGraphics(600,600)
	setupLayer(graphics.main)
	graphics.backgrounds=[]
	for(let a=0;a<10;a++){
		graphics.backgrounds.push(createGraphics(600,600))
		setupLayer(graphics.backgrounds[a])
	}
	graphics.backgrounds[0].background(12,24,36)
	graphics.backgrounds[0].noStroke()
	for(let a=0;a<10;a++){
        for(let b=0;b<24;b++){
            for(let c=0;c<24;c++){
                if(pow(11,b*3+c*5+6)%10===a){
					graphics.backgrounds[0].fill(pow(22,b*2+c*5+4)%12+10,pow(22,b*2+c*5+4)%12*2+20,pow(22,b*2+c*5+4)%12*3+30)
                    regPoly(graphics.backgrounds[0],
						(b*60+10+pow(19,b*2+c*7+4)%30)%720-60,
						(c*60+10+pow(17,b*5+c*3+4)%30)%720-60,6,
						24+pow(9,b*8+c*11+4)%24,30)
                }
            }
        }
    }
}