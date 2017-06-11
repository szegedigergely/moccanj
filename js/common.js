jQuery(document).ready(function($) {
    console.log("intitialised ...");
    var $window = $(window);
    var ww = $window.width();
    var desk = true;
    $("#masthead").stick_in_parent();
    $("aside.widget-area").stick_in_parent();
    /* ==========================================================================
       HEADER COLLAPSER
       ========================================================================== */
    $(document).on("click", ".collapser", function(event) {
        $(this).parent().toggleClass("collapser-opened");
    });
    /* ==========================================================================
       HOME SEARCH - toggle
       ========================================================================== */
    $(document).on("click", "#home_search .openclose", function(event) {
        $("#home_search").toggleClass("side-open");
    });
    /* ==========================================================================
       GMAP3
       ========================================================================== */
    var addresses = [ {
        position: [ 47.4979, 19.0402 ],
        icon: "http://maps.google.com/mapfiles/marker_green.png"
    }, {
        position: [ 47.4969, 19.0402 ],
        icon: "http://maps.google.com/mapfiles/marker_green.png"
    }, {
        position: [ 47.4961, 19.0398 ],
        icon: "http://maps.google.com/mapfiles/marker_green.png"
    }, {
        position: [ 47.4955, 19.0397 ],
        icon: "http://maps.google.com/mapfiles/marker_green.png"
    }, {
        position: [ 47.498, 19.0397 ],
        icon: "http://maps.google.com/mapfiles/marker_green.png"
    }, {
        position: [ 47.498, 19.0497 ],
        icon: "http://maps.google.com/mapfiles/marker_green.png"
    }, {
        position: [ 47.4985, 19.0487 ],
        icon: "http://maps.google.com/mapfiles/marker_green.png"
    }, {
        position: [ 47.492, 19.0787 ],
        icon: "http://maps.google.com/mapfiles/marker_green.png"
    }, {
        position: [ 47.602, 19.1087 ],
        icon: "http://maps.google.com/mapfiles/marker_green.png"
    }, {
        position: [ 47.622, 19.1187 ],
        icon: "http://maps.google.com/mapfiles/marker_green.png"
    }, {
        position: [ 47.632, 19.1207 ],
        icon: "http://maps.google.com/mapfiles/marker_green.png"
    } ];
    var map = $("#map");
    console.log(map.length);
    if(map.length){
        map.gmap3({
            address: "Budapest, Magyarország",
            zoom: 13
        }).cluster({
            size: 200,
            markers: addresses,
            cb: function(markers) {
                if (markers.length > 1) {
                    // 1 marker stay unchanged (because cb returns nothing)
                    if (markers.length < 20) {
                        return {
                            content: "<div class='cluster cluster-1'>" + markers.length + "</div>",
                            x: -26,
                            y: -26
                        };
                    }
                }
            }
        });
    }

    /* ==========================================================================
       SELECT 2
       ========================================================================== */
    $(".select2").select2();
    $(".district_selected").select2({
        placeholder: "Hol?"
    });
    $(".sport_selected").select2({
        placeholder: "Mit sportolnál?"
    });
    /* ==========================================================================
       RANGE SLIDER
       ========================================================================== */
    var rangeSlider = function() {
        var slider = $(".range-slider"), range = $(".range-slider__range"), value = $(".range-slider__value");
        slider.each(function() {
            value.each(function() {
                var value = $(this).prev().attr("value");
                $(this).html(value + "km");
            });
            range.on("input", function() {
                $(this).next(value).html(this.value + "km");
            });
        });
    };
    rangeSlider();
    /* ==========================================================================
       RIPPLE EFFECT - on click
       ========================================================================== */
    var ink, d, x, y;
    $(".ripple").click(function(e) {
        if ($(this).find(".ink").length === 0) {
            $(this).prepend("<span class='ink'></span>");
        }
        ink = $(this).find(".ink");
        ink.removeClass("animate");
        if (!ink.height() && !ink.width()) {
            d = Math.max($(this).outerWidth(), $(this).outerHeight());
            ink.css({
                height: d,
                width: d
            });
        }
        x = e.pageX - $(this).offset().left - ink.width() / 2;
        y = e.pageY - $(this).offset().top - ink.height() / 2;
        ink.css({
            top: y + "px",
            left: x + "px"
        }).addClass("animate");
    });
});
