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

    let $checkdark = document.getElementById("checkdark");
    let $checkitalic = document.getElementById("checkitalic");

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

  }

  window.addEventListener("DOMContentLoaded", init);
}());