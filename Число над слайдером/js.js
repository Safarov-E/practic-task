let range = document.querySelector('.number');
let rangeNum = document.querySelector('.range-num');
rangeNum.innerHTML = range.value;
range.oninput = function() {
    rangeNum.style.left = this.value - 5*this.value*0.01 + 'px';
    rangeNum.innerHTML = this.value;
}