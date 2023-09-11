
let elem = document.querySelector('#button');

elem.addEventListener('dblclick', function(){
    console.log('1');
});

elem.addEventListener('mouseout', function(){
    console.log('2');
});