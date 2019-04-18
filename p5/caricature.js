class Caricature {

	constructor(x,y,width,height,scale) {
		this.sprite = createSprite(x, y, width, height);
		this.scale = scale;
		this.audioCount = 0;
		this.pastAudioIndex = 0;
		this.sequence = [];
		this.audio = [];
		this.animations = [];
	}

	click() {
		var width = this.sprite.width;
		var height = this.sprite.height;
		var x = this.sprite.position.x;
		var y = this.sprite.position.y;
		if ( mouseX < (x + width/2) && mouseX > ( x - width/2) && mouseY < ( y + height/2) && mouseY > ( y - height/2))  {
			this.pickAudio();
		}
	}

	configureSprite(talk_sheet, idle_sheet) {
	  this.sprite.addAnimation('talk', talk_sheet);
	  this.sprite.addAnimation('idle', idle_sheet);
	  this.sprite.changeAnimation("idle")
	  this.sprite.scale = this.scale
	  this.sprite.width = this.sprite.width * this.sprite.scale
	  this.sprite.height = this.sprite.height * this.sprite.scale
	  this.sprite.animation.looping=true;
	}

	display() {
		drawSprites();
	}

	pickAudio() {
	  this.playCharacter( this.animations[ this.audioCount ] )
	  this.pastAudioIndex = this.audioCount;
	  this.audio[this.audioCount].play();

	  this.audioCount += 1;
	  if (this.audioCount > (this.animations.length - 1)) {
	  	this.audioCount = 0;
	  }
	}

	clearSequence() {
		for (var i = 0; i < this.sequence.length; i++) {
			clearTimeout(this.sequence[i]);
		}
	}

	stopCharacter() {
		this.audio[this.pastAudioIndex].stop();
		this.sprite.changeAnimation("idle")
	}

	playCharacter( animation ) {
	    this.clearSequence();
	    this.stopCharacter();
		for (var i = 0; i < animation.length; i++) {
		    var currentAnimation = animation[i];
		    this.sequence[i] = setTimeout( this.animate.bind(null,currentAnimation.pose,currentAnimation.frameDelay,this.sprite), currentAnimation.time )
		}
	}

	animate(pose,frameDelay,character) {
	  character.changeAnimation(pose);
	  if (pose == "talk") {
	    character.animation.frameDelay = frameDelay;
	  }
	}

	

}