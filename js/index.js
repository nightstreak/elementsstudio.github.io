// variables
var $header_top = $(".header-top");
var $nav = $("nav");

// toggle menu
$header_top.find("a").on("click", function() {
  $(this)
    .parent()
    .toggleClass("open-menu");
});

// fullpage customization
$("#fullpage").fullpage({
  
  sectionSelector: ".vertical-scrolling",
  slideSelector: ".horizontal-scrolling",
  navigation: true,
  slidesNavigation: true,
  controlArrows: false,
  anchors: [
    "firstSection",
    "secondSection",
    "thirdSection",
    "fourthSection",
    "fifthSection"
  ],
  menu: "#menu",

  afterLoad: function(anchorLink, index) {
    $header_top.css("background", "rgba(35, 19, 35, 1)");
    $header_top.css("background-color", "#231323");
    $nav.css("background", "rgba(35, 19, 35, 1)");
    $nav.css("background-color", "#231323");
    if (index == 5) {
      $("#fp-nav").hide();
    }
  },

  onLeave: function(index, nextIndex, direction) {
    if (index == 5) {
      $("#fp-nav").show();
    }
  },

  afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {
    if (anchorLink == "fifthSection" && slideIndex == 1) {
      $.fn.fullpage.setAllowScrolling(false, "up");
      $(this)
        .find("h2")
        .css("color", "white");
      $(this)
        .find("h3")
        .css("color", "white");
      $(this)
        .find("p")
        .css({
          color: "#DC3522",
          opacity: 1,
          transform: "translateY(0)"
        });
    }
  },

  onSlideLeave: function(anchorLink, index, slideIndex, direction) {
    if (anchorLink == "fifthSection" && slideIndex == 1) {
      $.fn.fullpage.setAllowScrolling(true, "up");
    }
  }
});