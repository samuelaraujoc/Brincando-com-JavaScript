function somar() {
    var label = document.getElementById('1');
    var input = document.getElementById('2');
    label.innerHTML = parseInt(input.value) + parseInt(label.textContent);

  }