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
    $nav.css("background-image", "linear-gradient(#231323,#6B396B,#EB2035)");
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