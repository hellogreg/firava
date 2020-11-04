(function () {
  "use strict"

  let root = document.documentElement; // <html> element

  function dir(m) {
    if (console.dir && m) {
      console.dir(m);
    }
  }

  // Send status messages to the browser console.
  function log(m) {
    if (console.log) {
      m = m !== undefined ? m : "-----------------";
      console.log(m);
    }
  }

  function init() {

    document.fonts.ready.then(function () {
      let isFiravaLoaded = document.fonts.check('1em firava');
      log(`Firava loaded: ${isFiravaLoaded}`);
      if (isFiravaLoaded) {
        //
      }
    });

    let $checkdark = document.getElementById("checkdark");
    let $checkitalic = document.getElementById("checkitalic");
    let $slideweight = document.getElementById("slideweight");

    $checkdark.checked = false;
    $checkitalic.checked = false;
    $slideweight.value = 400;

    $checkdark.addEventListener("change", e => {
      if (e.target.checked) {
        root.classList.add("darkmode");
        log(`Checked!`);
      } else {
        if (root.classList.contains("darkmode")) {
          root.classList.remove("darkmode");
          log(`Unchecked!`);
        }
      }
    });

    $checkitalic.addEventListener("change", e => {
      if (e.target.checked) {
        root.classList.add("italicized");
        log(`Checked!`);
      } else {
        if (root.classList.contains("italicized")) {
          root.classList.remove("italicized");
          log(`Unchecked!`);
        }
      }
    });

    $slideweight.addEventListener("input", e => {
      log($slideweight.value);
      root.style.setProperty("--font-weight-sample", $slideweight.value);
    });

  }

  window.addEventListener("DOMContentLoaded", init);
}());