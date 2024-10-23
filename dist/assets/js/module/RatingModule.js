export default function RatingModule() {
  $(document).ready(function () {
    let path =
      window.location.origin +
      // "/template/" +
      "/assets/images/blog/active-star.png";
    let pathgray =
      window.location.origin +
      // "/template/" +
      "/assets/images/blog/inactive-star.png";
    var starRating;
    $(".js-stars > img").on("click", function () {
      $(this).prevAll().attr("src", path);
      $(this).attr("src", path);
      $(this).nextAll().attr("src", pathgray);
    });
  });
}
