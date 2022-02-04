var button = document.getElementsByTagName("button");
var fieldset = document.getElementsByTagName("fieldset");
var check = 0;

for (let index = 0; index < button.length; index++) {
  button[index].addEventListener("click", function () {
    if(check == 0)
    {
      this.classList.add("btn-change");
      fieldset[index].style.display = "none";
      check = 1;
    }
    else
    {
        this.classList.remove("btn-change");
        fieldset[index].style.display = "initial";
        check = 0;
    }
  })
}

function showCode() {
  var htmlText = document.getElementsByClassName("html-text")[0].value;
  var cssText = "<style>" + document.getElementsByClassName("css-text")[0].value + "</style>";
  var jsText = "<script>" + document.getElementsByClassName("js-text")[0].value + "</script>";
  var outputText = document.getElementById("outputCode").contentWindow.document;
  outputText.open();
  outputText.write(htmlText + cssText + jsText);
  outputText.close();
}
