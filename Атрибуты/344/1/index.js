    let elem1 = document.querySelector('#elem1');

    elem1.addEventListener('click', func1);
    elem1.addEventListener('click', func2);
    elem1.addEventListener('click', func3);


 

    function func1() {
        alert('1');
    }
    
    function func2() {
        alert('2');
    }
    
    function func3() {
        alert('3');
    }