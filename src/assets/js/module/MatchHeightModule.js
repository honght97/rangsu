export default function MatchHeightModule() {
  if ($(".article-title").length) {
    $(".article-title").matchHeight({});
  }
  if ($(".article-desc").length) {
    $(".article-desc").matchHeight({});
  }
}
