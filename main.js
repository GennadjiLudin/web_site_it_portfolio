//Change fixed menu
var nav = document.getElementById('nav');
var sections = document.querySelectorAll('.section-scroll');

window.addEventListener('scroll', scrollHandler);

function scrollHandler() {
    chageMenu();
    currentMenuFunc();
}

function chageMenu() {
    if(!elemInViewport(sections[0]) && screen.width >= 768){
        nav.classList.add('nav_back');
        button.classList.add('button__show');
    } else {
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
// var currentMenuLink = document.querySelectorAll('.menu__link');

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
    } else if(elemInViewport(sections[6]) || elemInViewport(sections[7])){
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
var burgerFlag = false;
burgerMenuBtn.addEventListener('click', checkBurgerFlag);

function checkBurgerFlag() {
    event.preventDefault();
    if(burgerFlag === false) {
        showBurgerMenu();
    } else {
        hideBurgerMenu();
    }
}

function showBurgerMenu() {
    menuFixed.classList.add('menu_active');
    burgerMenuBtn.classList.add('burger-menu_btn_active');
    burgerFlag = true;
}

function hideBurgerMenu() {
    menuFixed.classList.remove('menu_active');
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
var currentSection = document.querySelectorAll('.sections-menu');

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

    for(var i = 0; i < currentMenu.length; i++) {
        if(event.target.getAttribute('href').substr(1) === currentSection[i].id) {
            scrollToLinks(currentSection[i]);
            return;
        }
    }
}
