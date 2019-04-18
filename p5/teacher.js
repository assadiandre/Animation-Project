
class Teacher extends Caricature {

	constructor(x,y,width,height,scale) {
		super(x,y,width,height,scale)
		this.audio = [
			loadSound("adult_1.m4a"),
			loadSound("adult_2.m4a"),
			loadSound("adult_3.m4a"),
			loadSound("adult_4.m4a")
		]
	    this.animations = [
	      //1
		  [{pose:"talk",time:470,frameDelay: 14}, 
		  {pose:"idle",time:1450,frameDelay: null},
		  {pose:"talk",time:1450,frameDelay: 10},
		  {pose:"idle",time:2330,frameDelay: null},
		  {pose:"talk",time:3060,frameDelay: 5},
		  {pose:"idle",time:4300,frameDelay: null}],

		  //2
		  [{pose:"talk",time:420,frameDelay: 9}, 
		  {pose:"idle",time:2450,frameDelay: null},
		  {pose:"talk",time:3100,frameDelay: 8}, 
		  {pose:"idle",time:4090,frameDelay: null},
		  {pose:"talk",time:4400,frameDelay: 8},
		  {pose:"idle",time:5500,frameDelay: null}],

		  //3
		  [{pose:"talk",time:1450,frameDelay: 10},
		  {pose:"idle",time:4050,frameDelay: null}],

		  //4
		  [{pose:"talk",time:1060,frameDelay: 8},
	  	  {pose:"idle",time:3000,frameDelay: null},
	  	  {pose:"talk",time:3550,frameDelay: 20},
	  	  {pose:"idle",time:4100,frameDelay: null},
	  	  {pose:"talk",time:4750,frameDelay: 8},
	  	  {pose:"idle",time:6200,frameDelay: null},
	  	  {pose:"talk",time:7100,frameDelay: 10},
	  	  {pose:"idle",time:8750,frameDelay: null},
	  	  {pose:"talk",time:9200,frameDelay: 10},
	  	  {pose:"idle",time:10300,frameDelay: null},
	  	  {pose:"talk",time:10350,frameDelay: 10},
	  	  {pose:"idle",time:12300,frameDelay: null},
	  	  {pose:"talk",time:12600,frameDelay: 8},
	  	  {pose:"idle",time:15000,frameDelay: null},
	  	  {pose:"talk",time:15150,frameDelay: 12},
	  	  {pose:"idle",time:17200,frameDelay: null},
	  	  {pose:"talk",time:18000,frameDelay: 10},
	  	  {pose:"idle",time:19200,frameDelay: null}]
		]
	}	
}






