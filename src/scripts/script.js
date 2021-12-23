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
const contentArr = document.querySelectorAll('.contentBox-left')


let ii = 0;
imgArr[0].classList.add('show');
menuArr[0].classList.add('active');
contentArr[0].classList.add('show')

menuArr.forEach(item => item.addEventListener('click', ()=>{
    ii= Number(item.id);

    imgArr.forEach(img => img.classList.remove('show'));
    imgArr[ii].classList.add('show');

    menuArr.forEach(menu => menu.classList.remove('active'));
    menuArr[ii].classList.add('active');

    contentArr.forEach(content => content.classList.remove('show'));
    contentArr[ii].classList.add('show');
}))

const nextSlide = () => {
     console.log('na poczatku: ', ii)
    imgArr.forEach(img => img.classList.remove('show'));
    contentArr.forEach(content => content.classList.remove('show'));
    menuArr.forEach(menu => menu.classList.remove('active'));
    ii === imgArr.length -1 ? ii = -1 : ii;
    imgArr[ii + 1].classList.add('show');
    contentArr[ii + 1].classList.add('show');
    menuArr[ii + 1].classList.add('active');
    ii++;
}
const prevSlide = () => {
    imgArr.forEach(img => img.classList.remove('show'));
    contentArr.forEach( content => content.classList.remove('show'));
    menuArr.forEach(menu => menu.classList.remove('active'));
    ii === 0 ? ii = imgArr.length : ii;
    imgArr[ii - 1].classList.add('show');
    contentArr[ii - 1].classList.add('show');
    menuArr[ii - 1].classList.add('active');
    ii--;
}


nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Hamburger

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.topnav');
const content = document.querySelector('.logo-and-context')

const handleClick = () =>{
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('navigation--active');
    content.classList.toggle('content--active');
    // console.log(content)
}

hamburger.addEventListener('click', handleClick)

// counter

const counters = document.querySelectorAll('.counter');
const speed = 200; // The lower the slower

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        // Lower inc to slow and higher to slow
        const inc = target / speed;

        // console.log(inc);
        // console.log(count);

        // Check if target is reached
        if (count < target) {
            // Add inc to count and output in counter
            counter.innerText = Math.ceil(count + inc);
            // Call function every ms
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});


// facebook


