//Change fixed menu
var nav = document.getElementById('nav');
var sections = document.querySelectorAll('.section-scroll');
var scrollPageY = window.pageYOffset + 'px';

window.addEventListener('scroll', scrollHandler);

function scrollHandler() {
    var scrollPageY = window.pageYOffset + 'px';
    chageMenu();
    currentMenuFunc();
    // currentMenuFunc2();

}

function chageMenu() {
    if(!elemInViewport(sections[0])){
        nav.classList.add('nav_back');
        button.classList.add('button__show');
    } else if(elemInViewport(sections[0])) {
        nav.classList.remove('nav_back');
        button.classList.remove('button__show');
    }
}

function elemInViewport(elem,full) {
    var box = elem.getBoundingClientRect();
    var top = box.top;
    var left = box.left;
    var bottom = box.bottom;
    var right  = box.right;
    var width = document.documentElement.clientWidth;
    var height = document.documentElement.clientHeight;
    var maxWidth = 0;
    var maxHeight = 0;
    if(full) { maxWidth = right - left; maxHeight = bottom - top};
    return Math.min(height,bottom)- Math.max(0,top) >= maxHeight && Math.min(width,right)- Math.max(0,left)>= maxWidth
}

//Current menu
var currentMenu = document.querySelectorAll('.menu__item');
var currentMenuLink = document.querySelectorAll('.menu__link');
var currentSection = document.querySelectorAll('.sections-menu');


// function currentMenuFunc2() {
//     var prevSection;
//     clearMenuClasses();
//     for(var i = 0; i < currentSection.length; i++){
//         if(elemInViewport(currentMenu2[i])){
//             currentMenu[i].classList.add('menu__item_current');
//         }
//         prevSection = currentMenu[i];
//     }
// }

function currentMenuFunc() {
    if(!elemInViewport(sections[0]) && elemInViewport(sections[1]) || elemInViewport(sections[2])){
        clearMenuClasses();
        currentMenu[0].classList.add('menu__item_current');
    } else if(elemInViewport(sections[3])){
        clearMenuClasses();
        currentMenu[1].classList.add('menu__item_current');
    } else if(elemInViewport(sections[4]) || elemInViewport(sections[5])){
        clearMenuClasses();
        currentMenu[2].classList.add('menu__item_current');
    } else if(elemInViewport(sections[6])){
        clearMenuClasses();
        currentMenu[3].classList.add('menu__item_current');  
    } else {
        clearMenuClasses(); 
    }
}

function clearMenuClasses() {
    for(var i = 0; i < currentMenu.length; i++){
        currentMenu[i].classList.remove('menu__item_current');
    }
}

//Burger menu
var burgerMenuBtn = document.getElementById('burger-menu_btn');
var burgerMenuNav = document.getElementById('burger-menu__nav');
var burgerFlag = false;
burgerMenuBtn.addEventListener('click', clickHandler);

function clickHandler() {
    checkBurgerFlag();
}

function checkBurgerFlag() {
    event.preventDefault();
    if(burgerFlag === false) {
        showBurgerMenu();
    } else {
        hideBurgerMenu();
    }
}

function showBurgerMenu() {
    burgerMenuNav.classList.add('burger-menu__nav_active');
    burgerMenuBtn.classList.add('burger-menu_btn_active');
    burgerFlag = true;
}

function hideBurgerMenu() {
    burgerMenuNav.classList.remove('burger-menu__nav_active');
    burgerMenuBtn.classList.remove('burger-menu_btn_active');
    burgerFlag = false;
}


//All projects functions
var projectsImg = document.querySelectorAll('.all-projects__img');
var projectsBtn = document.getElementById('all-projects__btn');
var CONSTANTA = 4;
var flag = false;

hideProjects();

projectsBtn.addEventListener('click', checkFlag);

function checkFlag(){
    event.preventDefault();
    if(flag === false){
        showProjects();
    } else {
        hideProjects();
        scrollToLinks(sections[4]);
    }
}

function showProjects(){
    for(var i = 0; i < projectsImg.length; i++) {
        projectsImg[i].classList.remove('all-projects__img_hiden');
    }
    flag = true;
}

function hideProjects() {
    for(var i = 0; i < projectsImg.length; i++) {
        if(i >= CONSTANTA){
            projectsImg[i].classList.add('all-projects__img_hiden'); 
        }
    }
    flag = false;
}


//Up button
var button = document.getElementById('button');
button.addEventListener('click', buttonUp);

function buttonUp() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// ScrollMenu
const menuFixed = document.getElementById('menu_fixed');

function scrollToLinks(elem) {
    var elemCoord = elem.getBoundingClientRect();
    window.scrollTo({
        top: elemCoord.top + pageYOffset,
        behavior: "smooth"
    });
}

menuFixed.addEventListener('click', scrollToSection);

function scrollToSection() {
    event.preventDefault();

    if(event.target.id == "menu_fixed")
    return;

    for(var i = 0; i < currentMenuLink.length; i++) {
        if(event.target.getAttribute('href').substr(1) === currentSection[i].id) {
            console.log(currentSection[i]);
            scrollToLinks(currentSection[i]);
            return;
        }
    }
}

// Scroll Burger menu
const burgerMenuFixed = document.getElementById('burger-menu__nav');
var currentBurgerMenuLink = document.querySelectorAll('.burger-menu__nav_link')
var currentSectionBurgerMenu = document.querySelectorAll('.section-burger-menu');

function scrollToLinks(elem) {
    var elemCoord = elem.getBoundingClientRect();
    window.scrollTo({
        top: elemCoord.top + pageYOffset,
        behavior: "smooth"
    });
}

burgerMenuFixed.addEventListener('click', scrollToSection);

function scrollToSection() {
    event.preventDefault();

    if(event.target.id == "burger-menu__nav")
    return;

    for(var i = 0; i < currentBurgerMenuLink.length; i++) {
        if(event.target.getAttribute('href').substr(1) === currentSectionBurgerMenu[i].id) {
            scrollToLinks(currentSectionBurgerMenu[i]);
            return;
        }
    }
}
