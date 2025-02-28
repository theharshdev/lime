document.addEventListener("DOMContentLoaded", function() {
   document.documentElement.style.colorScheme = "light";
   document.body.style.backgroundColor = "white";
   document.body.style.color = "black";
});
$(".openMenu").click(function () {
   $(".menuBar").slideDown(300);
   $(".closeMenu").show();
   $(".openMenu").hide();
});

$(".closeMenu").click(function () {
   $(".menuBar").slideUp(300);
   $(".openMenu").show();
   $(".closeMenu").hide();
});

$(window).scroll(function () {
   let scroll = $(window).scrollTop();
   if (scroll > 100) {
      $(".navBar").removeClass("md:bg-transparent");
      $(".navBar").addClass("shadow-xl");
   } else {
      $(".navBar").addClass("md:bg-transparent");
      $(".navBar").removeClass("shadow-xl");
   }
});

$(window).scroll(function () {
   var scroll1 = $(window).scrollTop();
   if (scroll1 > 400) {
      $("#toTopBtn").show();
      $(".socialSideBar").show();
   } else {
      $("#toTopBtn").hide();
      $(".socialSideBar").hide();
   }
});

$("#toTopBtn").click(function () {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
});

$(".owl-carousel1").owlCarousel({
   loop: false,
   margin: 0,
   nav: true,
   autoplay: false,
   autoplayTimeout: 1000,
   dots: false,
   autoplayHoverPause: true,
   responsive: {
      0: {
         items: 1,
      },
      600: {
         items: 2,
      },
      950: {
         items: 3,
      },
      1200: {
         items: 4,
      },
      1500: {
         items: 5,
      },
   },
});

$(".owl-carousel3").owlCarousel({
   loop: true,
   margin: 0,
   nav: false,
   autoplay: true,
   autoplayTimeout: 2000,
   autoplayHoverPause: true,
   responsive: {
      0: {
         items: 1,
      },
   },
});

function resizeWindow() {
   let windowWidth = window.innerWidth;
   if (windowWidth > 768) {
      $(".menuBar").show();
      $(".openMenu").hide();
      $(".closeMenu").hide();
   } else {
      $(".menuBar").hide();
      $(".openMenu").show();
      $(".closeMenu").hide();
   }
}

$(".openLoginNumberForm").click(function () {
   $(".loginWithNumberForm").show();
   $(".loginWithEmailForm").hide();
   $(".registrationPopForm").hide();
});

$(".openLoginEmailForm").click(function () {
   $(".loginWithNumberForm").hide();
   $(".loginWithEmailForm").show();
});

$(".openRegistrationForm").click(function () {
   $(".loginWithNumberForm").hide();
   $(".loginWithEmailForm").hide();
   $(".registrationPopForm").show();
});

$(".openLoginForm").click(function () {
   $(".loginWithEmailForm").show();
   $(".registrationPopForm").hide();
});

$(".otpForMobileBtn").click(function () {
   const mobileLoginInput = $("#mobileLoginInput").val();
   const agreedMobileVerification = $("#agreedMobileVerification").is(":checked");
   let validateMobileLoginInput, validateAgreedMobileVerification;

   if (mobileLoginInput.length != 10) {
      $("#mobileLoginInput").css("border", "2px solid rgba(239, 68, 68, 0.6)");
      $("#mobileNumberErrTxt").html("Enter a valid number!");
      validateMobileLoginInput = 0;
   } else {
      $("#mobileLoginInput").css("border", "none");
      $("#mobileNumberErrTxt").html("");
      validateMobileLoginInput = 1;
   }

   if (agreedMobileVerification) {
      validateAgreedMobileVerification = 1;
      $("#agreedMobileVerification").css("border", "none");
      $("#agreedMobileVerificationLabel").css("color", "#97929A");
   } else {
      validateAgreedMobileVerification = 0;
      $("#agreedMobileVerification").css("border", "2px solid rgba(239, 68, 68, 0.6)");
      $("#agreedMobileVerificationLabel").css("color", "#EF4444");
   }

   if (validateAgreedMobileVerification && validateMobileLoginInput) {
      $(".otpVerficationInpBox").show();
      $(".numberInpBox").hide();
   }
});

$("#agreedMobileVerificationLabel").click(function () {
   if ($("#agreedMobileVerification").is(":checked")) {
      $("#agreedMobileVerificationLabel").css("color", "#EF4444");
   } else {
      $("#agreedMobileVerificationLabel").css("color", "#97929A");
   }
});

$("#mobileLoginInput").keyup(function () {
   if ($("#mobileLoginInput").val().length != 10) {
      $("#mobileLoginInput").css("border", "2px solid rgba(239, 68, 68, 0.6)");
      $("#mobileNumberErrTxt").html("Enter a valid number!");
   } else {
      $("#mobileLoginInput").css("border", "none");
      $("#mobileNumberErrTxt").html("");
   }
});

function verifyOtpFnc() {
   let otpForMobileNumberVerification = $("#otpForMobileNumberVerification").val();
   if (otpForMobileNumberVerification) {
      $("#otpForMobileNumberVerification").css("border", "none");
      $("#otpMobileNumberErrTxt").html("");
      return true;
   } else {
      $("#otpForMobileNumberVerification").css("border", "2px solid rgba(239, 68, 68, 0.6)");
      $("#otpMobileNumberErrTxt").html("Enter your OTP first!");
      return false;
   }
}

function validateLoginWithEmailFOrm() {
   const emailInputForLogin = $("#emailInputForLogin").val();
   const loginPassword = $("#loginPassword").val();
   let loginMailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   let emailLoginValidate, passwordLoginValidate;

   if (loginMailReg.test(emailInputForLogin)) {
      $("#emailInputForLogin").css("border", "none");
      $("#emailInputForLoginErr").html("");
      emailLoginValidate = 1;
   } else {
      $("#emailInputForLogin").css("border", "2px solid rgba(239, 68, 68, 0.6)");
      $("#emailInputForLoginErr").html("Enter a valid email address!");
      emailLoginValidate = 0;
   }

   if (loginPassword != "") {
      $("#loginPassword").css("border", "none");
      $("#loginPasswordErr").html("");
      passwordLoginValidate = 1;
   } else {
      $("#loginPassword").css("border", "2px solid rgba(239, 68, 68, 0.6)");
      $("#loginPasswordErr").html("Enter your password!");
      passwordLoginValidate = 0;
   }

   if (emailLoginValidate && passwordLoginValidate) {
      return true;
   } else {
      return false;
   }
}

$("#emailInputForLogin").keyup(function () {
   const emailInputForLogin = $("#emailInputForLogin").val();
   let loginMailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   if (loginMailReg.test(emailInputForLogin)) {
      $("#emailInputForLogin").css("border", "none");
      $("#emailInputForLoginErr").html("");
   } else {
      $("#emailInputForLogin").css("border", "2px solid rgba(239, 68, 68, 0.6)");
      $("#emailInputForLoginErr").html("Enter a valid email address!");
   }
});

$("#loginPassword").keyup(function () {
   const loginPassword = $("#loginPassword").val();
   if (loginPassword != "") {
      $("#loginPassword").css("border", "none");
      $("#loginPasswordErr").html("");
   } else {
      $("#loginPassword").css("border", "2px solid rgba(239, 68, 68, 0.6)");
      $("#loginPasswordErr").html("Enter your password!");
   }
});

$("#regBtn").click(function () {
   const regEmail = $("#regEmail").val();
   let regisrtrationMailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   let regEmailValid, regPasswordValid, regPasswordRewriteValid, validateregAgreedCheck;
   if (regisrtrationMailReg.test(regEmail)) {
      $("#regEmail").css("border", "none");
      $("#regEmailErr").html("");
      regEmailValid = 1;
   } else {
      $("#regEmail").css("border", "2px solid rgba(239, 68, 68, 0.6)");
      $("#regEmailErr").html("Enter a valid email address!");
      regEmailValid = 0;
   }

   const regPassword = $("#regPassword").val();
   const regPasswordRewrite = $("#regPasswordRewrite").val();

   if (regPassword != "") {
      $("#regPassword").css("border", "none");
      $("#regPasswordErr").html("");
      regPasswordValid = 1;
   } else {
      $("#regPassword").css("border", "2px solid rgba(239, 68, 68, 0.6)");
      $("#regPasswordErr").html("Create a password!");
      regPasswordValid = 0;
   }

   if (regPasswordRewrite === regPassword) {
      $("#regPasswordRewrite").css("border", "none");
      $("#regPasswordRewriteErr").html("");
      regPasswordRewriteValid = 1;
   } else {
      $("#regPasswordRewrite").css("border", "2px solid rgba(239, 68, 68, 0.6)");
      $("#regPasswordRewriteErr").html("Password is not same!");
      regPasswordRewriteValid = 0;
   }

   const regAgreedCheck = $("#regAgreedCheck").is(":checked");
   if (regAgreedCheck) {
      validateregAgreedCheck = 1;
      $("#regAgreedCheck").css("border", "none");
      $("#regAgreedCheckLabel").css("color", "#97929A");
   } else {
      validateregAgreedCheck = 0;
      $("#regAgreedCheck").css("border", "2px solid rgba(239, 68, 68, 0.6)");
      $("#regAgreedCheckLabel").css("color", "#EF4444");
   }
   if (regEmailValid && regPasswordValid && regPasswordRewriteValid && validateregAgreedCheck) {
      $(".registrationStep1").hide();
      $(".registrationStep2").show();
   }
});

$("#regEmail").keyup(function () {
   let regisrtrationMailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   if (regisrtrationMailReg.test($("#regEmail").val())) {
      $("#regEmail").css("border", "none");
      $("#regEmailErr").html("");
   } else {
      $("#regEmail").css("border", "2px solid rgba(239, 68, 68, 0.6)");
      $("#regEmailErr").html("Enter a valid email address!");
   }
});

$("#regPassword").keyup(function () {
   if ($("#regPassword").val() != "") {
      $("#regPassword").css("border", "none");
      $("#regPasswordErr").html("");
   } else {
      $("#regPassword").css("border", "2px solid rgba(239, 68, 68, 0.6)");
      $("#regPasswordErr").html("Create a password!");
   }
});

$("#regPasswordRewrite").keyup(function () {
   if ($("#regPasswordRewrite").val() === $("#regPassword").val()) {
      $("#regPasswordRewrite").css("border", "none");
      $("#regPasswordRewriteErr").html("");
   } else {
      $("#regPasswordRewrite").css("border", "2px solid rgba(239, 68, 68, 0.6)");
      $("#regPasswordRewriteErr").html("Password is not same!");
   }
});

$("#regAgreedCheckLabel").click(function () {
   if ($("#regAgreedCheck").is(":checked")) {
      $("#regAgreedCheckLabel").css("color", "#EF4444");
   } else {
      $("#regAgreedCheckLabel").css("color", "#97929A");
   }
});

$(".closePopup").click(function () {
   $(".popup").hide();
   $("body").css("height", "100%");
   $("body").css("overflow", "auto");
});

$(".openLoginPopup").click(function () {
   $(".loginPopupBox").show();
   $(".loginWithEmailForm").show();
   $(".registrationPopForm").hide();
   $(".loginWithNumberForm").hide();
});

$(".openPopupBtn").click(function () {
   $("body").css("height", "100vh");
   $("body").css("overflow", "hidden");
});

function validateRegistrationOtp() {
   if ($("#regOtp").val() != "") {
      $("#regOtp").css("border", "none");
      $("#regOtpInpErr").html("");
      return true;
   } else {
      $("#regOtp").css("border", "2px solid rgba(239, 68, 68, 0.6)");
      $("#regOtpInpErr").html("Enter the OTP first!");
      return false;
   }
}

$(".openSearchDropdown").click(function () {
   $(".searchDropdown").slideToggle(300);
   $(".searchDropdownIcon").toggleClass("rotate-180");
});

$(".openSearchBox").click(function () {
   $(".searchBox").show();
   $("body").css("height", "100vh");
   $("body").css("overflow", "hidden");
});

$(".closeSearchBox").click(function () {
   $(".searchBox").hide();
   $("body").css("height", "100%");
   $("body").css("overflow", "auto");
});

$(".openSocialBox").click(function () {
   $(".socialSideBar").toggleClass("-left-12");
   $(".socialSideBar").toggleClass("left-0");
   $(".openSocialBox").toggleClass("rotate-180");
});

function validateSubscribtion() {
   let subscribeEmailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   let validateSubEmail, validateSubCheck;
   if (subscribeEmailReg.test($("#subscribeEmail").val())) {
      $("#subscribeErr").html("");
      $("#subscribeEmail").css("border", "2px solid #84CC16");
      validateSubEmail = 1;
   } else {
      $("#subscribeErr").html("Enter a valid email address!");
      $("#subscribeEmail").css("border", "2px solid #EF4444");
      validateSubEmail = 0;
   }

   if ($("#subscribeCheck").is(":checked")) {
      $("#subscribeCheckLabel").css("color", "#97929A");
      validateSubCheck = 1;
   } else {
      $("#subscribeCheckLabel").css("color", "#EF4444");
      validateSubCheck = 0;
   }

   if (validateSubEmail && validateSubCheck) {
      document.cookie = "newsletterPopupBox = newsletterPopupCookies; max-age=" + 60 * 60 * 24 * 365;
      return true;
   } else {
      return false;
   }
}

// News letter subscription popup box JS ------------------
window.addEventListener("load", function () {
   if (document.cookie.includes("newsletterPopupCookies")) {
      return;
   } else {
      setTimeout(function () {
         $(".newsletterPopup").show();
         $("body").css("height", "100vh");
         $("body").css("overflow", "hidden");
      }, 10000);
   }
});

$("#subscribeEmail").keyup(function () {
   let subscribeEmailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   if (subscribeEmailReg.test($("#subscribeEmail").val())) {
      $("#subscribeErr").html("");
      $("#subscribeEmail").css("border", "2px solid #84CC16");
   } else {
      $("#subscribeErr").html("Enter a valid email address!");
      $("#subscribeEmail").css("border", "2px solid #EF4444");
   }
});

$("#subscribeCheckLabel").click(function () {
   if ($("#subscribeCheck").is(":checked")) {
      $("#subscribeCheckLabel").css("color", "#EF4444");
   } else {
      $("#subscribeCheckLabel").css("color", "#97929A");
   }
});

// Js for footer email subscribtion form --------
function validateFooterEmail() {
   let footerEmailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   let validateFooterEmail;
   if (footerEmailReg.test($("#footerEmailInp").val())) {
      $("#footerEmailErr").html("");
      $("#footerEmailInp").css("border", "2px solid #84CC16");
      validateFooterEmail = 1;
   } else {
      $("#footerEmailErr").html("Enter a valid email address!");
      $("#footerEmailInp").css("border", "2px solid #EF4444");
      validateFooterEmail = 0;
   }

   if (validateFooterEmail) {
      return true;
   } else {
      return false;
   }
}

// Js for footer email subscribtion form --------
$("#footerEmailInp").keyup(function () {
   let footerEmailReg1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   if (footerEmailReg1.test($("#footerEmailInp").val())) {
      $("#footerEmailErr").html("");
      $("#footerEmailInp").css("border", "none");
   } else {
      $("#footerEmailErr").html("Enter a valid email address!");
      $("#footerEmailInp").css("border", "2px solid #EF4444");
   }
});

$(".blogCategoryBtn").click(function () {
   $(".blogCategoryArrow").toggleClass("rotate-180");
   $(".blogCategoryBox").slideToggle(300);
});

// JS for search bar ----------------
const searchInp = document.getElementById("searchInp");
const searchList = document.getElementById("searchList");
const noResultFound = document.getElementById("noResultFound");
const searchListItem = searchList.getElementsByTagName("a");
searchInp.addEventListener("input", function () {
   for (i = 0; i < searchListItem.length; i++) {
      const searchListItemTxt = searchListItem[i].innerText.toUpperCase();
      if (searchListItemTxt.includes(searchInp.value.toUpperCase())) {
         searchListItem[i].style.display = "block";
      } else {
         searchListItem[i].style.display = "none";
      }
      if (searchInp.value === "") {
         searchListItem[i].style.display = "none";
      }
   }
});

$(".showImgBox1").hover(function () {
   $(".imgBox1").show();
   $(".imgBox2, .imgBox3").hide();
});

$(".showImgBox2").hover(function () {
   $(".imgBox2").show();
   $(".imgBox1, .imgBox3").hide();
});

$(".showImgBox3").hover(function () {
   $(".imgBox3").show();
   $(".imgBox1, .imgBox2").hide();
});

// Cookies Popup Box JS ------------
$("#cookiesAccepted").click(function () {
   document.cookie = "cookiesPopupBox = cookiesPopupBoxCookies; max-age=" + 60 * 60 * 24 * 30;
});

window.addEventListener("load", () => {
   if (document.cookie.includes("cookiesPopupBoxCookies")) {
      return;
   } else {
      $(".cookiesPopup").show();
      $("body").css("height", "100vh");
      $("body").css("overflow", "hidden");
   }
});
