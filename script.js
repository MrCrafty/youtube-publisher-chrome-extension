var mainFunc = () => {
  var drafts = document.getElementsByClassName("edit-draft-button");
  if (drafts.length > 0) {
    var editDraft = () => {
      drafts[0].click();
    };
    var nextBtn = () => {
      document.getElementById("next-button").click();
    };
    var publishBtn = () => {
      document.getElementById("done-button").click();
    };
    var closeDialog = () => {
      var ele = document.querySelector("#close-button .ytcp-button");
      var divCheckingInterval = setInterval(function () {
        if (ele) {
          document.querySelector("#close-button .ytcp-button").click();
          clearInterval(divCheckingInterval);
        }
      }, 500);
    };
    editDraft();
    setTimeout(nextBtn, 1000);
    setTimeout(nextBtn, 1000);
    setTimeout(nextBtn, 1000);
    setTimeout(publishBtn, 1000);
    closeDialog();
  } else {
    clearInterval(mainInterval);
    alert("All videos are published or change the page");
  }
};
mainFunc();
var mainInterval = setInterval(mainFunc, 5000);
