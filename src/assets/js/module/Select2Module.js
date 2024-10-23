export default function Select2Module() {
  $(document).ready(function () {
    if ($(".js-select2").length) {
      $(".js-select2").select2();
    }
  });
}
