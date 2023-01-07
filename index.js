// alert("hello!!");

function val(result) {
  box.resultbox.value += result;
}

function calculate() {
  box.resultbox.value = eval(box.resultbox.value);
}

var equalButton = box.veql;

equalButton.addEventListener('dblclick', function(){
  box.resultbox.value = "";
});
