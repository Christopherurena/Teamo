
const siBt = document.querySelector('#yesBtn');

sibt.addEventListener('click',function () {
    alert('Jsjsjjsjs, gracias por decir que si mi vida, sabia que dirias que si, te amo, muak <3')
});

const nobt = document.querySelector('#nobt');

nobt.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    nobt.style.setProperty('top',randomY+'%');
    nobt.style.setProperty('left',randomX+'%');
    nobt.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})