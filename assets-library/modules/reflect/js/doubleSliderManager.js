var DoubleSliderManager = function(options) {
    this.options = options || {};
    if (this instanceof DoubleSliderManager) {
        this.slider1 = options.slider1;// контент
        this.slider2 = options.slider2;// ползунок
        if(!this.slider1 || !this.slider2){
            alert('Слайдеры не назначены!');
        }
        
        this.axis = options.axis || 'y';
        this.initState = options.initState || 0;
        
        this.xStart1 = options.xStart1 || 0;
        this.xEnd1 = options.xEnd1 || this.xStart1;
        this.yStart1 = options.yStart1 || 0;
        this.yEnd1 = options.yEnd1 || 0;
        
        this.xStart2 = options.xStart2 || 0;
        this.xEnd2 = options.xEnd2 || this.xStart2;
        this.yStart2 = options.yStart2 || 0;
        this.yEnd2 = options.yEnd2 || 0;
		this.slider2Mask = options.slider2Mask || null;// маска линии ползунка
        
        this.handler = options.handler || null;
        
    }else{
        return new DoubleSliderManager(this.options);
    }
}

DoubleSliderManager.prototype.start = function() {
    var self = this, 
        contHeight = contHeight = self.yEnd1 - self.yStart1,
        delta = contHeight / (self.yEnd2 - self.yStart2),
		slider2HalthHeight = self.slider2.height() / 2;
    
    if(self.initState == 0){
        self.slider1.css('top', self.yEnd1 + 'px');
		self.slider2.css('top', self.yStart2 + 'px');
    }else{
        self.slider1.css('top', self.initState.split(',')[0] + 'px');
		self.slider2.css('top', self.initState.split(',')[1] + 'px');
    }
	
    self.slider1.draggable({
        containment: [self.xStart1, self.yStart1, self.xEnd1, self.yEnd1],
        axis: self.axis,
        start: function (event, ui) {
            storyCLMNavigation.blockSwipe();
        },
        drag: function (event) {
            self.slider2.css("top", self.yStart2 - (self.slider1.position().top - self.yEnd1)/delta + "px");
			if(self.slider2Mask) calculateMaskHeight();
        },
        stop: function (event) {
            self.handlerAction();
        }
    });

    self.slider2.draggable({
        containment: [self.xStart2, self.yStart2, self.xEnd2, self.yEnd2],
        axis: self.axis,
        start: function (event, ui) {
            storyCLMNavigation.blockSwipe();
        },
        drag: function () {
            self.slider1.css("top", self.yEnd1 - (self.slider2.position().top - self.yStart2) * delta + "px");
			if(self.slider2Mask) calculateMaskHeight();
        },
        stop: function () {
            self.handlerAction();
        }
    });
	
	function calculateMaskHeight(){
		self.slider2Mask.css('height', (self.slider2.position().top + slider2HalthHeight - self.yStart2) + 'px');
	}
}

DoubleSliderManager.prototype.getStates = function() {
    return (this.slider1.offset().top + ',' + this.slider2.offset().top);
}

DoubleSliderManager.prototype.handlerAction = function() {
    if(this.handler != null){
        this.handler();
    }
}
