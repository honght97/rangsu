export default function MenuModule() {
  let width = $(window).width();
  if (width < 1200) {
    if ($(".js-bar").length) {
      $(".js-bar").on("click", function () {
        $(".js-header-mobile").addClass("is-active");
        $(this).addClass("is-active");
        $(".overlay").addClass("is-active");
        $(".main").addClass("is-active");
        $(".js-header").addClass("is-active");
        $("html").off("touchmove");
        if ($(this).hasClass("is-active")) {
          $("body").css("overflow", "hidden");
        }
      });
    }

    if ($(".js-header-close").length) {
      $(".js-header-close").on("click", function () {
        $(".js-header-mobile").removeClass("is-active");
        $(".overlay").removeClass("is-active");
        $(".js-bar").removeClass("is-active");
        $(".main").removeClass("is-active");
        $(".js-header").removeClass("is-active");
        $("body").css("overflow", "hidden auto");
      });
    }

    if ($(".overlay").length) {
      $(".overlay").on("click", function () {
        $(".overlay").removeClass("is-active");
        $(".js-header-mobile").removeClass("is-active");
        $(".main").removeClass("is-active");
        $(".js-header").removeClass("is-active");
        $(".js-bar").removeClass("is-active");
        $("body").css("overflow", "hidden auto");
      });
    }

    if ($(".dropdown .child-wrap").length) {
      $(".dropdown .child-wrap").hide();
      $(".dropdown").click(function (e) {
        e.stopPropagation();
        $(this).toggleClass("is-active");
        $(this).find(".child-wrap").stop().slideToggle();
      });
    }
    if ($(".dropdown .child-wrap").length) {
      $(".dropdown:has(.child-tt) .menu-list").hide();
      $(".dropdown:has(.child-tt) .child-tt").click(function (e) {
        e.stopPropagation();
        $(this).toggleClass("is-active");
        $(this).next(".menu-list").stop().slideToggle();
      });
    }
  }

  // onscroll
  let header;
  if ($(".js-header").length) {
    header = $(".js-header");
  }
  $(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
      header.addClass("is-fixed");
    } else {
      header.removeClass("is-fixed");
    }
  });
  // ================= get height of footer ==========
  function vh(percent) {
    var h = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
    return (percent * h) / 100;
  }
  let heightFooter;
  if ($(".js-footer").length) {
    heightFooter = $(".js-footer").outerHeight(true);
  } else {
    heightFooter = 0;
  }
  let heightHeight;
  if ($(".js-header").length) {
    heightHeight = $(".js-header").outerHeight(true);
  } else {
    heightHeight = 0;
  }

  let mainHeight = vh(100) - heightFooter;
  if ($(".main").length) {
    $(".main").css("padding-top", heightHeight);
    $(".main").css("min-height", mainHeight);
  }
  if ($("a[rel='modal:open']").length) {
    $("a[rel='modal:open']").on("click", function () {
      $(this).modal({
        fadeDuration: 250,
      });
      return false;
    });
  }
}
