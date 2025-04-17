(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"main_atlas_1", frames: [[871,43,150,17],[871,0,129,41],[0,0,641,101],[643,0,226,72],[643,74,226,72]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_1 = function() {
	this.initialize(ss["main_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image = function() {
	this.initialize(ss["main_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Element22x8 = function() {
	this.initialize(ss["main_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Element42x8 = function() {
	this.initialize(ss["main_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Element52x8 = function() {
	this.initialize(ss["main_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.ClipGroup_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkjBaIAAiyIJHAAIAACyg");
	mask.setTransform(29.75,9.4);

	// Ebene_3
	this.instance = new lib.Image();
	this.instance.setTransform(0,19.5,0.4763,0.4763,0,180,0);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0.6,0.5,58.4,17.9), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlxApIAAhQILjAAIAABQg");
	mask.setTransform(37,4.1);

	// Ebene_3
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(-0.5,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0.1,74,8.1), null);


(lib.btn_weiter = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.Element52x8();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_weiter, new cjs.Rectangle(0,0,226,72), null);


(lib.btn_bestellen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.Element42x8();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_bestellen, new cjs.Rectangle(0,0,226,72), null);


(lib.bg_black = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg_black, new cjs.Rectangle(0,0,320,50), null);


(lib.bg_bild = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.Element22x8();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg_bild, new cjs.Rectangle(0,0,641,101), null);


(lib.pt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Element_2_svg
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(37,4.1,1,1,0,0,0,37,4.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pt, new cjs.Rectangle(-0.5,0,75,8.5), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("ABVBGQgUgUAAgmIAAhSQAAgHAGgGQAFgFAIAAQAIAAAGAFQAGAGAAAHIAABRQAAAVAKALQAJALASAAQASAAAKgKQAKgMAAgUIAAhSQAAgHAGgGQAFgFAIAAQAIAAAGAFQAGAGgBAHIAABQQABAogVAUQgUAUgkAAQglAAgTgUgAD+BSQgFgGAAgJIAAgBQgBgIAHgGQAGgHAJABQAKgBAGAHQAGAGAAAIIAAABQAAAJgGAGQgGAHgKAAQgJAAgHgHgAkeBTQgFgGAAgHIAAiLQAAgIAFgFQAGgGAIAAIAEAAQAMAAAIALIBLBgIAAhZQgBgHAGgGQAFgFAJAAQAHAAAGAFQAFAGABAHIAACLQAAAHgHAGQgFAGgIAAIgBAAQgMAAgIgMIhNhkIAABeQgBAHgFAGQgGAFgHABQgIgBgGgFgAhNBXIAAAAQgIAAgFgGQgGgFAAgJIAAiHQAAgIAGgFQAFgHAIAAIBgAAQAHAAAFAGQAFAFAAAHQAAAHgFAFQgFAFgHAAIhNAAIAAAkIBCAAQAHAAAFAEQAFAGAAAHQAAAGgFAFQgFAFgHAAIhCAAIAAAlIBOAAQAHAAAGAEQAEAGAAAHQAAAHgEAFQgGAFgHAAgAD+gLQgFgGAAgJIAAAAQgBgJAHgHQAGgFAJAAQAKAAAGAFQAGAHAAAJIAAAAQAAAJgGAGQgGAGgKAAQgJAAgHgGg");
	mask_1.setTransform(29.75,9.4);

	// Ebene_3
	this.instance_1 = new lib.ClipGroup_0();
	this.instance_1.setTransform(30.7,9.7,1,1,0,0,0,30.7,9.7);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0.6,0.5,58.4,17.9), null);


(lib.neu = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.ClipGroup_1();
	this.instance.setTransform(30.15,10.05,1,1,0,0,0,30.7,9.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(185.65,11.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.neu, new cjs.Rectangle(-0.5,0,303.9,22.6), null);


// stage content:
(lib.banner_fluad_320x50_1216 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// btn_2
	this.instance = new lib.btn_bestellen();
	this.instance.setTransform(231.5,76.5,0.5,0.5,0,0,0,113,36);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(105).to({_off:false},0).to({y:25,alpha:1},20).wait(54).to({regX:113.2,regY:36.1,scaleX:0.4,scaleY:0.4,x:231.55},7).to({regX:113,regY:36,scaleX:0.5,scaleY:0.5,x:231.5},8).wait(26).to({y:-25.8,alpha:0},19).to({_off:true},1).wait(15));

	// btn_1
	this.instance_1 = new lib.btn_weiter();
	this.instance_1.setTransform(88.9,76.5,0.5,0.5,0,0,0,113,36);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(95).to({_off:false},0).to({y:25,alpha:1},20).wait(35).to({regY:36.1,scaleX:0.4,scaleY:0.4},7).to({regY:36,scaleX:0.5,scaleY:0.5},8).wait(55).to({y:-25.8,alpha:0},19).to({_off:true},1).wait(15));

	// neu
	this.instance_2 = new lib.neu();
	this.instance_2.setTransform(159.75,75.95,1,1,0,0,0,151.4,11.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(23).to({_off:false},0).to({y:24.95,alpha:1},20).wait(52).to({y:-25.05,alpha:0},20).to({_off:true},125).wait(15));

	// pt
	this.instance_3 = new lib.pt();
	this.instance_3.setTransform(19.95,45.3,0.8,0.8,0,0,0,20.9,3.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(255));

	// bg
	this.instance_4 = new lib.bg_bild();
	this.instance_4.setTransform(160.25,24.8,0.5,0.5,0,0,0,320.5,50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(23).to({y:-25.45,alpha:0},20).wait(1).to({y:75.55},0).wait(176).to({y:24.75,alpha:1},19).wait(16));

	// bg_black
	this.instance_5 = new lib.bg_black();
	this.instance_5.setTransform(160,25,1,1,0,0,0,160,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(255));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(160,-25.7,160.5,126.5);
// library properties:
lib.properties = {
	id: 'B34C3CABDFA342F88351BDF7019B0158',
	width: 320,
	height: 50,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/main_atlas_1.png", id:"main_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['B34C3CABDFA342F88351BDF7019B0158'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;