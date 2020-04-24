document.querySelector('#elastic').oninput = function() {
    let val = this.value.trim();
    let elasticItems = document.querySelectorAll('.elastic li');
    if(val != '') {
        elasticItems.forEach(function(elem) {
            if(elem.innerText.toLowerCase().indexOf(val) == - 1) {
                elem.classList.add('hide');
                elem.innerHTML = elem.innerText;
            } else {
                elem.classList.remove('hide');
                let str = elem.innerText;
                elem.innerHTML = insertMark(str, elem.innerText.toLowerCase().indexOf(val), val.length)
            }
        })
    } else {
        elasticItems.forEach(function(elem) {
            elem.classList.remove('hide');
            elem.innerHTML = elem.innerText;
        })
    }
}