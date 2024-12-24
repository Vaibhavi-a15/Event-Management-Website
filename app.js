const searchicon1 = document.querySelector('#searchicon1');
const srchicon1 = Document.querySelector('#srchicon1');
const search1= document.querySelector('#searchinput1');


searchicon1.addEventListener('click', function(){
    search1.computedStyleMap.display = 'flex';
    searchicon1.computedStyleMap.display = 'none';
})

const searchicon2 = document.querySelector('#searchicon2');
const srchicon2 = Document.querySelector('#srchicon2');
const search2 = document.querySelector('#searchinput2');

searchicon2.addEventListener('click', function(){
    search2.computedStyleMap.display = 'flex';
    searchicon2.computedStyleMap.display = 'none';
})

const bar = document.querySelector('.fa-bars');
const cross = document.querySelector('#hdcross');
const headerbar = document.querySelector('.headerbar');

bar.addEventListener('click', function(){
    setTimeout(()=>{
        cross.computedStyleMap.display = 'block';
    }, 200);
    headerbar.style.right = '0%';
})

cross.addEventListener('click', function(){
    cross.style.display = 'none';
    headerbar.style.right = '-100%';
})