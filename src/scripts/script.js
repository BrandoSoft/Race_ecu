let lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground() {
    x += (lFollowX - x) * friction;
    y += (lFollowY - y) * friction;

    translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

    $('.bg').css({
        '-webit-transform': translate,
        '-moz-transform': translate,
        'transform': translate
    });

    window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function (e) {

    let lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
    let lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
    lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouseX : lFollow
    lFollowY = (10 * lMouseY) / 100;

});

moveBackground();

// Slider

const nextBtn = document.querySelector('.next')
const prevBtn = document.querySelector('.prev')
const imgArr = document.querySelectorAll('#sliderImg');
const menuArr = document.querySelectorAll('.menuItems')
const contentArr = document.querySelectorAll('.contentBox div')


let i = 0;
imgArr[0].classList.add('show');
menuArr[0].classList.add('active');
contentArr[0].classList.add('show')

menuArr.forEach(item => item.addEventListener('click', ()=>{
    i= Number(item.id);

    imgArr.forEach(img => img.classList.remove('show'));
    imgArr[i].classList.add('show');

    menuArr.forEach(menu => menu.classList.remove('active'));
    menuArr[i].classList.add('active');

    contentArr.forEach(content => content.classList.remove('show'));
    contentArr[i].classList.add('show');
}))

const nextSlide = () => {
     console.log('na poczatku: ', i)
    imgArr.forEach(img => img.classList.remove('show'));
    contentArr.forEach(content => content.classList.remove('show'));
    menuArr.forEach(menu => menu.classList.remove('active'));
    i === imgArr.length -1 ? i = -1 : i;
    imgArr[i + 1].classList.add('show');
    contentArr[i + 1].classList.add('show');
    menuArr[i + 1].classList.add('active');
    i++;
}
const prevSlide = () => {
    imgArr.forEach(img => img.classList.remove('show'));
    contentArr.forEach( content => content.classList.remove('show'));
    menuArr.forEach(menu => menu.classList.remove('active'));
    i === 0 ? i = imgArr.length : i;
    imgArr[i - 1].classList.add('show');
    contentArr[i - 1].classList.add('show');
    menuArr[i - 1].classList.add('active');
    i--;
}


nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

