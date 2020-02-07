var SliderManager = function(options) {
    this.options = options || {};
    if (this instanceof SliderManager) {
        this.slider = options.slider;
        if(!this.slider){
            alert('Слайдер не назначен!')
        }
        
        this.num = options.num || null;
        this.intervals = options.intervals || 1;//количество делений
        this.axis = options.axis || 'x';
        this.initState = options.initState || 0;//начальная позиция бегунка
		this.moveToTap = options.moveToTap || false; //ключ подключения передвижения бегунка по тапу
        
        this.xStart = options.xStart || 0;// обязательный параметр
        this.xEnd = options.xEnd || this.xStart;// при axis="x" xEnd указывать необязательно
        this.yStart = options.yStart || 0;// обязательный параметр
        this.yEnd = options.yEnd || this.yStart;// при axis="y" yEnd указывать необязательно
		this.dragEvent = options.dragEvent || null; //метод который будет вызываться при перетаскивании слайдера
		this.dragStart = options.dragStart || null; //метод который будет вызван при старте перетаскивания слайдера
        
        this.handler = options.handler || null;
        
        $('<div></div>').insertBefore(this.slider);
        this.slider.prev().append(this.slider);
        this.slider.parent().css({'position': 'absolute',
                                  'overflow': 'hidden',
                                  'pointer-events': "none",
                                  'top': "0px",
                                  'width': $(document).width() + 'px'});
        
        if(this.axis == 'x'){
            this.sliderPathLength = this.xEnd - this.xStart;
            this.gaps = this.intervals / this.sliderPathLength;
            this.slider.parent().css({'left': this.xStart + 'px', 'height': $(document).height() + 'px'});
            this.slider.css({"left": (this.initState / this.gaps) + "px", 'pointer-events': "auto"});
			
			if(this.moveToTap){
				this.tapArea = $('<div></div>').insertBefore(this.slider.parent());
				this.tapArea.css({
					'position': 'absolute',
					'top': this.yStart + 'px',
					'left': (this.xStart + this.slider.width() * 1 / 3) + 'px',
					'width': (this.sliderPathLength + this.slider.width() * 1 / 3) + 'px',
					'height': this.slider.css('height')
				});
			}
        }else{
            this.sliderPathLength = this.yEnd - this.yStart;
            this.gaps = this.intervals / this.sliderPathLength;
            this.slider.parent().css({'left': '0px', 'height': (this.yEnd + this.slider.height()) + 'px'});
            this.slider.css({"top": (this.yEnd - this.initState / this.gaps) + "px", 'pointer-events': "auto"});
			
			if(this.moveToTap){
				this.tapArea = $('<div></div>').insertBefore(this.slider.parent());
				this.tapArea.css({
					'position': 'absolute',
					'top': (this.yStart + this.slider.height() * 1 / 3) + 'px',
					'left': this.xStart + 'px',
					'width': this.slider.css('width'),
					'height': (this.sliderPathLength + this.slider.height() * 1 / 3) + 'px'
				});
			}
        }
        
        if(this.num)
                this.num.text(this.initState);
        
        this.sliderValue = this.initState;
        
    }else{
        return new SliderManager(this.options);
    }
}

SliderManager.prototype.start = function() {
    var self = this;
    var sliderPosition = 0;
    var sliderEndPosition = 0;
    
    self.slider.draggable({
        containment: [self.xStart, self.yStart, self.xEnd, self.yEnd],
        axis: self.axis,
        start: function (event, ui) {
			if (self.dragStart) self.dragStart();
            sliderEndPosition = 0;
            storyCLMNavigation.blockSwipe();
        },
        drag: function () {
            if (self.axis == 'x'){
                sliderPosition = self.slider.offset().left;
                self.sliderValue = Math.round((sliderPosition - self.xStart) * self.gaps);
            }else{
                sliderPosition = self.slider.offset().top;
                self.sliderValue = Math.round((self.yEnd - sliderPosition) * self.gaps);
            }
            
            if (self.num) self.num.text(self.sliderValue);
			
			if (self.dragEvent) self.dragEvent();
        },
        stop: function () {
            if (self.axis == 'x'){
                sliderEndPosition = self.sliderValue / self.gaps;
                self.slider.animate({left: sliderEndPosition}, 300);
            }else{
                sliderEndPosition = self.yEnd - self.sliderValue / self.gaps;
                self.slider.animate({top: sliderEndPosition}, 300);
            }
            self.handlerAction();
        }
    });
	
	if (self.moveToTap) {
		var hammer = new Hammer(self.tapArea[0]);
		hammer.on('tap', function(e){
			if (self.axis == 'x'){
				self.sliderValue = Math.round((e.center.x - self.xStart - self.slider.width() / 2) * self.gaps);
				self.slider.animate({left: self.sliderValue / self.gaps}, 300);
			}else if (self.axis == 'y'){
				self.sliderValue = Math.round((self.yEnd - e.center.y + self.slider.height() * 2  / 3) * self.gaps);
				self.slider.animate({top: self.yEnd - self.sliderValue / self.gaps}, 300);
			}
			
			if (self.num) self.num.text(self.sliderValue);
		});
	}
}

SliderManager.prototype.getValue = function() {
    return this.sliderValue;
}

SliderManager.prototype.handlerAction = function() {
    if(this.handler != null){
        this.handler();
    }
}