

class Student extends Caricature {

	constructor(x,y,width,height,scale) {
		super(x,y,width,height,scale)

		this.audio = [
			loadSound("bbq_1.m4a"),
			loadSound("bbq_2.m4a"),
			loadSound("bbq_3.m4a"),
			loadSound("bbq_4.m4a"),
			loadSound("bbq_5.m4a"),
			loadSound("bbq_6.m4a")
		]

	    this.animations = [
	      //1
			[{pose:"talk",time:300,frameDelay: 10}, 
			{pose:"idle",time:2400,frameDelay: null},
			{pose:"talk",time:2700,frameDelay: 8},
			{pose:"talk",time:3800,frameDelay: 20},
			{pose:"idle",time:4500,frameDelay: null}],
		  //2 
	    	[{pose:"talk",time:350,frameDelay: 10},
      		{pose:"idle",time:1100,frameDelay: null},
      		{pose:"talk",time:1600,frameDelay: 10},
      		{pose:"idle",time:2300,frameDelay: null},
      		{pose:"talk",time:2900,frameDelay: 10},
      		{pose:"idle",time:3900,frameDelay: null}],

	      //3
	     	[{pose:"talk",time:200,frameDelay: 10},
	      	{pose:"idle",time:1900,frameDelay: null},
	      	{pose:"talk",time:2000,frameDelay: 6},
	      	{pose:"idle",time:2200,frameDelay: null},
	      	{pose:"talk",time:2200,frameDelay: 25},
	      	{pose:"idle",time:3400,frameDelay: null},
	      	{pose:"talk",time:3400,frameDelay: 7},
	      	{pose:"idle",time:3700,frameDelay: null}],

	      //4
			[{pose:"talk",time:550,frameDelay: 10}, 
			{pose:"idle",time:2000,frameDelay: null},
			{pose:"talk",time:2300,frameDelay: 10}, 
			{pose:"idle",time:4000,frameDelay: null}],

		  //5
			[{pose:"talk",time:1000,frameDelay: 10}, 
			{pose:"idle",time:2100,frameDelay: null},
			{pose:"talk",time:2400,frameDelay: 10},
			{pose:"idle",time:4100,frameDelay: null}],

		  //6
			[{pose:"talk",time:200,frameDelay: 10}, 
			{pose:"idle",time:1250,frameDelay: null},
			{pose:"talk",time:2300,frameDelay: 10}, 
			{pose:"idle",time:3600,frameDelay: null},
			{pose:"talk",time:4300,frameDelay: 10}, 
			{pose:"idle",time:6200,frameDelay: null}]
	    ]
	}	

}