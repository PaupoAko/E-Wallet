//for hiding doms
function animateHide(_id) {
    let element = document.getElementById(_id);

    element.classList.add('hide-transition');
    element.classList.remove('show-transition');
}
function animateShow(_id) {
    let element = document.getElementById(_id);

    element.classList.add('show-transition');
    element.classList.remove('hide-transition');
}

//checks if a dom is hovered on
function isHovered(_element) {
    const isHover = e => e.parentElement.querySelector(':hover') === e;

    const div = document.getElementById(_element);
    document.addEventListener('mousemove', function checkHover() {
        const hovered = isHover(div);
        if(hovered !== checkHover.hovered) {
            hovered ? div.style.display = 'flex' : console.log("lol");
            checkHover.hovered = hovered;
        }
    })
}
isHovered("services-header-hovered");

function scrollDetect() {
    let lastScroll = 0;
    let isScrollingDown = false;

    window.onscroll = function() {
        let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

        if(currentScroll > 0 && lastScroll <= currentScroll){
            isScrollingDown = !isScrollingDown;

            if(isScrollingDown){
                animateHide("header-id");
            }
        }else{
            if(currentScroll === 0){
                animateShow("header-id");
            }
        }
    }
}

scrollDetect();