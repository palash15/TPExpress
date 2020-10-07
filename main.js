$(document).ready(function () {

  $('.generalBtn').click(function () {
    $('.generalInfo').slideUp();
    $('.numberEntities').removeClass("is-hidden");
  });

  $('.numbersBtn').click(function () {
    $('.numberEntities').slideUp();
    $('.financialData').removeClass("is-hidden");
  });

  $('.financialBtn').click(function () {
    $('.financialData').slideUp();
    $('.entityLevel').removeClass("is-hidden");
  });

  $('.entityBtn').click(function () {
    $('.entityLevel').slideUp();
    $('.financialDataEn').removeClass("is-hidden");
  });

  $('.financialEnBtn').click(function () {
    $('.financialDataEn').slideUp();
    $('.targetProfitEn').removeClass("is-hidden");
  });

  $('.targetBtn').click(function () {
    $('.targetProfitEn').slideUp();
    $('.targetOutput').removeClass("is-hidden");
  });

  $("input[type='number'].percent").on("focusin focusout", e => {
    $("input[type='number'].percent").removeAttr("placeholder");
    $("input[type='number'].percent:focus").attr("placeholder", "in %");
  });
  $("input.dateinput").on("focusin focusout", e => {
    $(".dateinput").removeAttr("type");
    $(".dateinput:focus").attr("type", "date");
  });

  
});