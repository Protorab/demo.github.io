/** @format */

import $ from "jquery";
window.jQuery = $;
window.$ = $;
// import wow from "wowjs";
import inputmask from "inputmask";
import loadingAttributePolyfill from "loading-attribute-polyfill";
// require("./vendor/mail.js");
// const WOW = require("wowjs");

let phone = document.querySelector(".telephone");

let phoneMask = new Inputmask({
  mask: "+375-99-999-99-99",
  clearIncomplete: true,
  greedy: false,
});
phoneMask.mask(phone);

// window.wow = new WOW.WOW();
// window.wow.init();

// import module example (npm i -D jquery)

document.addEventListener("DOMContentLoaded", () => {
  const popupForm = document.querySelector("#popup__form");
  const formPopup = document.querySelector(".form__popup");
  const popupBg = document.querySelector(".overlay");
  const closeForm = document.querySelector(".close__form");
  const body = document.querySelector("body");

  function FormToggle(
    el1,
    el2,
    el1ShowClass,
    el2ShowClass,
    el1HideClass,
    el2HideClass
  ) {
    el1.classList.add(el1ShowClass);
    el1.classList.remove(el1HideClass);
    el2.classList.remove(el2HideClass);
    el2.classList.add(el2ShowClass);
    body.classList.toggle("__fixed");
  }
  function formShow() {
    FormToggle(
      popupForm,
      formPopup,
      "animate__fadeIn",
      "animate__backInDown",
      "animate__fadeOut",
      "animate__backOutUp"
    );
    setTimeout(function FormFadeIn() {
      popupForm.style.display = "flex";
    }, 100);
  }
  function formHide() {
    FormToggle(
      popupForm,
      formPopup,
      "animate__fadeOut",
      "animate__backOutUp",
      "animate__fadeIn",
      "animate__backInDown"
    );
    setTimeout(function FormFadeOut() {
      popupForm.style.display = "none";
    }, 1000);
  }
  popupBg.addEventListener("click", function (e) {
    e.preventDefault();
    formHide();
  });
  closeForm.addEventListener("click", function (e) {
    e.preventDefault();
    formHide();
  });
  document.addEventListener("keydown", function (e) {
    if (e.keyCode === 27) {
      formHide();
    }
  });
  $(document).ready(function () {
    $(".show__form").on("click", function (e) {
      e.preventDefault();
      const subject = $(this).data("subject");
      $("#popup__subject").val(subject);
      formShow();
    });
  });

  window.addEventListener("DOMContentLoaded", function () {
    // get the form elements defined in your form HTML above

    const form = document.getElementById("send__form");
    const inputWrap = document.querySelector(".input__wrap");
    const title = document.getElementById("send__status");
    const statusOk = document.getElementById("send__status-ok");
    const statusError = document.getElementById("send__status-error");

    // Success and Error functions for after the form is submitted

    function success() {
      form.reset();
      inputWrap.style.display = "none";
      title.style.display = "none";
      statusOk.style.display = "block";
      FormFadeOut();
    }

    function error() {
      statusError.style.display = "block";
    }

    // handle the form submission event

    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      let data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });

  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }
});
