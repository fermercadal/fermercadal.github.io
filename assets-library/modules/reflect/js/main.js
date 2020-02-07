/**
  * Click / tap processing method.
  *
  * @param {Object} obj DOM or jQuery object to which
  * Attaches a click / tap handler.
  * @param {Function} handler Function triggered by a click / tap.
  * @param {number} [maxCount = 0] Number of operations. If the parameter
  * not specified or equal to 0, then no restrictions.
  * Optional parameter.
  */
var clickAction = function(obj, handler, maxCount) {
    this.tapObject; // object on which we click / tap
    this.counter; // click counter
    var hammer,
        count = 0,
        self = this,
        maxCount = maxCount || 0;

    if (obj.jquery) {
        obj.each(function(index, element) {
            hammer = new Hammer($(element)[0]);
            hammer.on('tap', function(e) {

                self.tapObject = element;
                if (maxCount == 0 || count < maxCount) {
                    self.counter = ++count;
                    handler(e);
                }
            });
        });

    } else {
        if (obj.length) {
            obj.forEach(function(element) {
                hammer = new Hammer(element);
                hammer.on('tap', function(e) {
                    self.tapObject = element;
                    if (maxCount == 0 || count < maxCount) {
                        self.counter = ++count;
                        handler(e);
                    }
                });
            })
        } else {
            hammer = new Hammer(obj);
            hammer.on('tap', function(e) {
                self.tapObject = obj;
                if (maxCount == 0 || count < maxCount) {
                    self.counter = ++count;
                    handler(e);
                }
            })
        }

    }
};

var last_current_slide,
    gotoMainbranch,
    resetAllStates,
    resetAllButtons,
	revertHistory,
    historyArr = [],
    returnFromBackUp,
    clearHistory,
	gotoPrevSlide;

;
(function() {

    document.ontouchmove = function(event) {
        event.preventDefault();
    };


    window.storyCLMNavigation = new StoryCLMNavigation({
        threshold: 200,
        swipePointsCount: 1
    });


    clickAction($("#prevPage"), function() {
        window.location = document.querySelector("meta[name='clm-swipe-previous']").getAttribute("content");
    });

    clickAction($("#nextPage"), function() {
        window.location = document.querySelector("meta[name='clm-swipe-next']").getAttribute("content");
    });

    $("[data-route]").each(function(index, element) {
        var route = $(element).data("route");
        var hammer = new Hammer($(element)[0]);

        hammer.on('tap', function(ev) {
            window.location = route;
        });
    });



    //LINKS START
    //------------------------------------------------------------------
    //Link button behavior logic

    clickAction($(".links"), function() {
        showLinks();
    });

    if ($(".links-bg span").text().trim().length == 0) {
        $(".links").addClass("disabled");
    }

    function showLinks() {
        $(".links-bg-wrap").toggleClass("active");
        $(".links").toggleClass("active");
    }
	//------------------------------------------------------------------
    //LINKS END


    //BACKUP BUTTONS START
    //--------------------------------------------------------------------------------------------------------

    // Block of logic for the behavior of backup buttons on the footer.
     // When pressed in localStorage, write the state of the button as being pressed, and go to the backUp branch,
     // on returning back the state is reset.

     // we get from localStorage a link to the slide from which we went to one of the backUp branches
    last_current_slide = PresentationState.lastCurrentSlide ? PresentationState.lastCurrentSlide.pathname : '';

    // if we are in the backup branch, we highlight its active button
    if (PresentationState.backup) {
        var btnType = PresentationState.backup;
        $("#" + btnType).addClass("active");
    }

    clickAction($(".footer-backup"), footerBtnHandler);

    // we process click by the button
    function footerBtnHandler() {
        var self = $(this.tapObject);

        // if the button is already active, i.e. if we are in the backup branch, reset its status and link to the previous slide in localStorage.
        if (self.hasClass("active")) {
            resetAllStates();

            // we transfer the button to an inactive state
            self.removeClass("active");
			
			returnFromBackUp();

            // go to the slide of the main branch, from which we went to backup
            window.location = last_current_slide;

        } else {
            // save the id of the pressed button and the address of the current slide in localStorage
            PresentationState.backup = this.tapObject.id;

            if (last_current_slide == null || last_current_slide == "") {
                // if we leave the main branch then we write down the return address
                PresentationState.lastCurrentSlide = window.location;
            }

            resetAllButtons();
            self.addClass("active");
        }
    }


    // button to return to the initial slide
    clickAction($(".home-button"), function() {
        resetAllButtons();
        resetAllStates();
        window.location = 'index.html';
    });

    // method of returning to the slide of the main branch from the backup
    gotoMainbranch = function() {
		resetAllButtons();
        resetAllStates();
		if (!last_current_slide || last_current_slide == '') {
			gotoPrevSlide();
		}else{
			returnFromBackUp();
        	window.location = last_current_slide;
		}
    }

    // reset the address of the slide of the main branch (it is necessary to start on the first slide!)
    resetAllStates = function() {
        PresentationState.backup = "";
        PresentationState.lastCurrentSlide = "";
    }

    // reset active backup button states (it is necessary to start on the first slide!)
    resetAllButtons = function() {
        $(".footer-btn").removeClass("active");
    }
    //------------------------------------------------------------------------------------------------
    //BACKUP BUTTONS END


    if($('.footer-modal').length <= 0){
        $('.footer-btn-info').addClass('disable');
    }
    clickAction($('.footer-btn-info'), function () {
        $('.footer-modal-info').toggleClass('active');
    });
    clickAction($('.footer-modal-close'), function () {
        $('.footer-modal-info').removeClass('active');
    });

    clickAction($('.footer-btn-range'), function () {
        window.location = 'slide7.html'
    });

    clickAction($('.footer-btn-home'), function () {
        window.location = 'index.html'
    });

    clickAction($('#homeLink'), function () {
        window.location = '../../index.html'
    });

    clickAction($('#skipLinkCS'), function () {
        window.location = 'slide7.html';
    });

    clickAction($('#legacyAssetLibrary'), function () {
        var href = document.location.href;
        var lastPathSegment = href.substr(href.lastIndexOf('/') + 1);
        window.location = '../../index.html?reflectReferall=1&reflectLocation='+lastPathSegment;
    });


})();