

class Progressive extends Caricature {

	constructor(x,y,width,height,scale) {
		super(x,y,width,height,scale)
		this.audio = [
			loadSound("liberal_1.m4a"),
			loadSound("liberal_2.m4a"),
			loadSound("liberal_3.m4a"),
			loadSound("liberal_4.m4a"),
			loadSound("liberal_5.m4a")
		]
	    this.animations = [

		  [{pose:"talk",time:200,frameDelay: 10}, 
		  {pose:"idle",time:2200,frameDelay: null},
		  {pose:"talk",time:2400,frameDelay: 10}, 
		  {pose:"idle",time:3500,frameDelay: null},
		  {pose:"talk",time:3600,frameDelay: 10},
		  {pose:"idle",time:5500,frameDelay: null}],

		  [{pose:"talk",time:1100,frameDelay: 8}, 
		  {pose:"idle",time:2650,frameDelay: null},
		  {pose:"talk",time:3200,frameDelay: 8}, 
		  {pose:"idle",time:4060,frameDelay: null},
		  {pose:"talk",time:4200,frameDelay: 10},
		  {pose:"idle",time:6000,frameDelay: null}],

		  [{pose:"talk",time:100,frameDelay: 7}, 
		  {pose:"idle",time:1200,frameDelay: null},
		  {pose:"talk",time:1300,frameDelay: 10}, 
		  {pose:"idle",time:5900,frameDelay: null}],

		  [{pose:"talk",time:1200,frameDelay: 7}, 
		  {pose:"idle",time:2000,frameDelay: null},
		  {pose:"talk",time:2150,frameDelay: 8}, 
		  {pose:"idle",time:2900,frameDelay: null}],


		  [{pose:"talk",time:1300,frameDelay: 7}, 
		  {pose:"idle",time:2010,frameDelay: null},
		  {pose:"talk",time:2200,frameDelay: 8}, 
		  {pose:"idle",time:5900,frameDelay: null},
		  {pose:"talk",time:7000,frameDelay: 8},
		  {pose:"idle",time:10000,frameDelay: null},
		  {pose:"talk",time:11000,frameDelay: 8},
		  {pose:"idle",time:12000,frameDelay: null}] 

		]
	}	

}