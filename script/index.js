/* swiper */
const bestTotal = document.querySelector('.best_wrap .page_all');
const bestCurrent = document.querySelector('.best_wrap .page_now');
const bestSlide = document.querySelectorAll('.b_swiper .swiper-slide')
const newTotal = document.querySelector('.new_wrap > .page .page_all');
const activeScrollbar = document.querySelector('.active-scrollbar')
console.log(activeScrollbar);

bestTotal.textContent = bestSlide.length;

const bestSwiper = new Swiper('.b_swiper', {
    slidesPerView: 4,
    spaceBetween: 8,
    autoplay: {delay:2800},
    loop: true,
    on: {
        slideChange: function(){
            bestCurrent.textContent = this.realIndex+1;
        },
        autoplayTimeLeft(type, time, progress) {
            /* console.log(type, time, progress) */
            if(progress === 1){
                activeScrollbar.style.width = '0%'
                activeScrollbar.style.transition = 'none' // 처음으로 다시 돌아가면 곧바로 짧아져야 하므로
            }else {
                activeScrollbar.style.width = '100%'
                activeScrollbar.style.transition = 'width 2.8s linear'
            }
        }
    },
    navigation: {
        nextEl: '.swiper+.btn .swiper-button-next',
        prevEl: '.swiper+.btn .swiper-button-prev',
    },
})

const newSwiper = new Swiper('.new_swiper', {
    slidesPerView: 4,
    spaceBetween: 8,
    autoplay: {delay:2500},
    loop: true,
});


/* 검색 아이콘 클릭 시 검색 팝업 보이기 */
const searchIcon = document.querySelector('.search > a');
const searchClose = document.querySelector('.search .close');
const searchPopup = document.querySelector('.search_popup');
const closeSearch = document.querySelector('.close')
console.log(searchIcon, searchPopup);

/* 헤더 검색 아이콘 클릭 시 자동 상단 스크롤 방지 */
searchIcon.addEventListener('click', (e)=>{
    e.preventDefault();
    scheduleOpen.classList.toggle('hide');
})
searchPopup.addEventListener('click', (e)=>{
    e.preventDefault();
    scheduleOpen.classList.toggle('hide');
})

searchIcon.addEventListener('click',function(){
    searchPopup.style.display = 'block';
})

closeSearch.addEventListener('click',function(){
    searchPopup.style.display = 'none';
})

/* 헤더, 메인팝업 아래로 내려가면 스타일 변경하기 */
const headerW = document.querySelector('header');
const logo = document.querySelector('header h1 a img');
const categoryMenu = document.querySelector('header .category_wrap a');
const saleMenu = document.querySelector('header .sale_wrap a');
const membershipMenu = document.querySelector('header .h_membership');
const login = document.querySelector('.login img')
const shopping = document.querySelector('.shopping img')
const search = document.querySelector('.search img')
console.log(headerW, logo, categoryMenu, saleMenu);

/* ========================================헤더 색상관련 함수(S) */
function headerWhite (){
    headerW.style.backgroundColor = '#fff';
    logo.src = './images/nard_logo_black.png';
    categoryMenu.style.color = '#2E1E1A';
    saleMenu.style.color = '#2E1E1A';
    membershipMenu.style.color = '#2E1E1A';
    login.src = './images/icon_login_b.png';
    search.src = './images/icon_search_b.png';
    shopping.src = './images/icon_shopping_b.png';
}
function headerNormal (){
    headerW.style.background = 'none';
    logo.src = './images/nard_logo_w.png';
    categoryMenu.style.color = '#fff';
    saleMenu.style.color = '#fff';
    membershipMenu.style.color = '#fff';
    login.src = './images/icon_login.png';
    search.src = './images/icon_search.png';
    shopping.src = './images/icon_shopping.png';
}

/* function subCategoryW (){categoryMenu.parentElement.style.display} */
/* ========================================헤더 색상관련 함수(E) */

/* 먼저, 헤더 호버 시 스타일 변경 */
headerW.addEventListener('mouseover', function(){
    headerWhite ();
})
headerW.addEventListener('mouseout', function(){
    headerNormal();
})

/* 스크롤 할 때 */

window.addEventListener('scroll', function(){
    // console.log('scroll');
    if(this.window.scrollY > 450) {
        headerWhite();
    } else {
        headerNormal();
    }
})
/* ====================================타임세일 */
const tProductSmallL = document.querySelector('.t_product_small_left img')
const tProductSmallR = document.querySelector('.t_product_small_right img')
const tBig = document.querySelector('.t_right img')
const timer = document.querySelector('.time_wrap .left_time')

let time = 59;

setInterval(function() {

    time -= 1;

    if ( time > 0 ) {
      timer.textContent = `23:44:${time}`
    }
    else if( time == 0 ) {
      timer.textContent = `23:44:${59}`;
      time = 59;
    }

  }, 1000);

/* ====================================고민별 이미지 썸네일 호버 시 변경 */
const smallImg = document.querySelectorAll('.rec_right li > a > img');
const bigImg = document.querySelector('.rec_img img');

console.log(smallImg, bigImg);

function removeImg(){
    smallImg[0].parentElement.classList.remove ('active');
    smallImg[1].parentElement.classList.remove ('active');
    smallImg[2].parentElement.classList.remove ('active');
    smallImg[3].parentElement.classList.remove ('active');
}
function bigSrc (num){
    return bigImg.src = `./images/product_recommend_bg${num}.jpg`;
}

smallImg[0].addEventListener ('mouseover', function(){
    bigSrc(1);
    removeImg();
    smallImg[0].parentElement.classList = 'active';
})
smallImg[0].addEventListener ('mouseover', function(){
    bigSrc(1);
    removeImg();
    smallImg[0].parentElement.classList = 'active';
})
smallImg[1].addEventListener ('mouseover', function(){
    bigSrc(2);
    removeImg();
    smallImg[1].parentElement.classList = 'active';
})
smallImg[2].addEventListener ('mouseover', function(){
    bigSrc(3);
    removeImg();
    smallImg[2].parentElement.classList = 'active';
})
smallImg[3].addEventListener ('mouseover', function(){
    bigSrc(4);
    removeImg();
    smallImg[3].parentElement.classList = 'active';
})