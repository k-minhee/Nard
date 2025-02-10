/* swiper - best */
const bestTotal = document.querySelector('.best_wrap .page_all');
const bestCurrent = document.querySelector('.best_wrap .page_now');
const bestSlide = document.querySelectorAll('.b_swiper .swiper-slide')
const bestSlideImg = document.querySelectorAll('.b_swiper .swiper-slide .b_product')
const activeScrollbar = document.querySelector('.active-scrollbar')
console.log(activeScrollbar);

/* best 스와이퍼 자동 스크롤 방지 */
bestSlideImg[0].addEventListener('click', (e)=>{
    e.preventDefault();
    scheduleOpen.classList.toggle('hide');
})
bestSlideImg[1].addEventListener('click', (e)=>{
    e.preventDefault();
    scheduleOpen.classList.toggle('hide');
})
bestSlideImg[2].addEventListener('click', (e)=>{
    e.preventDefault();
    scheduleOpen.classList.toggle('hide');
})
bestSlideImg[3].addEventListener('click', (e)=>{
    e.preventDefault();
    scheduleOpen.classList.toggle('hide');
})
bestSlideImg[4].addEventListener('click', (e)=>{
    e.preventDefault();
    scheduleOpen.classList.toggle('hide');
})
bestSlideImg[5].addEventListener('click', (e)=>{
    e.preventDefault();
    scheduleOpen.classList.toggle('hide');
})
bestSlideImg[6].addEventListener('click', (e)=>{
    e.preventDefault();
    scheduleOpen.classList.toggle('hide');
})

const newTotal = document.querySelector('.new_wrap .page .page_all');
const newCurrent = document.querySelector('.new_wrap .page_now');
const newSlide = document.querySelectorAll('.new_swiper .swiper-slide')
const newSlideImg = document.querySelectorAll('.new_swiper .swiper-slide a')

newSlideImg[0].addEventListener('click', (e)=>{
    e.preventDefault();
    scheduleOpen.classList.toggle('hide');
})
newSlideImg[1].addEventListener('click', (e)=>{
    e.preventDefault();
    scheduleOpen.classList.toggle('hide');
})
newSlideImg[2].addEventListener('click', (e)=>{
    e.preventDefault();
    scheduleOpen.classList.toggle('hide');
})
newSlideImg[3].addEventListener('click', (e)=>{
    e.preventDefault();
    scheduleOpen.classList.toggle('hide');
})
newSlideImg[4].addEventListener('click', (e)=>{
    e.preventDefault();
    scheduleOpen.classList.toggle('hide');
})


bestTotal.textContent = bestSlide.length;
newTotal.textContent = newSlide.length;



const bestSwiper = new Swiper('.b_swiper', {
    slidesPerView: 4,
    spaceBetween: 8,
    autoplay: {delay:4000},
    loop: true,
    on: {
        slideChange: function(){
            bestCurrent.textContent = this.realIndex+1;
        },
        autoplayTimeLeft(type, time, progress) {
            if(progress === 1){
                activeScrollbar.style.width = '0%'
                activeScrollbar.style.transition = 'none' // 처음으로 다시 돌아가면 곧바로 짧아져야 하므로
            }else {
                activeScrollbar.style.width = '100%'
                activeScrollbar.style.transition = 'width 4s linear'
            }
        }
    },
    navigation: {
        nextEl: '.b_container .swiper-button-next',
        prevEl: '.b_container .swiper-button-prev',
    },
})

/* swiper - new */
const newSwiper = new Swiper('.new_swiper', {
    slidesPerView: 4,
    spaceBetween: 8,
    autoplay: {delay:2800},
    loop: true,
    on: {
        slideChange: function(){
            newCurrent.textContent = this.realIndex+1;
        },
    },
    navigation: {
        prevEl: '.n_btn .swiper-button-prev',
    },
});


/* BNR1 VIEW MORE 상단 스크롤 방지 */
const viewMoreB = document.querySelectorAll('.view_more_b');
const viewMore = document.querySelectorAll('.view_more');
viewMoreB[0].addEventListener('click', (e)=>{
    e.preventDefault();
    scheduleOpen.classList.toggle('hide');
})
viewMoreB[1].addEventListener('click', (e)=>{
    e.preventDefault();
    scheduleOpen.classList.toggle('hide');
})
viewMore[0].addEventListener('click', (e)=>{
    e.preventDefault();
    scheduleOpen.classList.toggle('hide');
})
viewMore[1].addEventListener('click', (e)=>{
    e.preventDefault();
    scheduleOpen.classList.toggle('hide');
})
viewMore[2].addEventListener('click', (e)=>{
    e.preventDefault();
    scheduleOpen.classList.toggle('hide');
})
viewMore[3].addEventListener('click', (e)=>{
    e.preventDefault();
    scheduleOpen.classList.toggle('hide');
})


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

/* 헤더 상단 스크롤 방지 */
categoryMenu.addEventListener('click', (e)=>{
    e.preventDefault();
    scheduleOpen.classList.toggle('hide');
})
saleMenu.addEventListener('click', (e)=>{
    e.preventDefault();
    scheduleOpen.classList.toggle('hide');
})
membershipMenu.addEventListener('click', (e)=>{
    e.preventDefault();
    scheduleOpen.classList.toggle('hide');
})
login.parentElement.addEventListener('click', (e)=>{
    e.preventDefault();
    scheduleOpen.classList.toggle('hide');
})
shopping.parentElement.addEventListener('click', (e)=>{
    e.preventDefault();
    scheduleOpen.classList.toggle('hide');
})

/* ========================================헤더 색상관련 함수(S) */
function headerWhite (){
    headerW.style.backgroundColor = '#fff';
    headerW.style.boxShadow = '10px 10px 20px rgba(121, 121, 121, 0.15)';
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
    headerW.style.boxShadow = 'none';
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

/* 타임세일 상단 스크롤 방지 */
tProductSmallL.parentElement.parentElement.addEventListener('click', (e)=>{
    e.preventDefault();
    scheduleOpen.classList.toggle('hide');
})
tProductSmallR.parentElement.parentElement.addEventListener('click', (e)=>{
    e.preventDefault();
    scheduleOpen.classList.toggle('hide');
})
tBig.parentElement.parentElement.addEventListener('click', (e)=>{
    e.preventDefault();
    scheduleOpen.classList.toggle('hide');
})


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
const recDetail = document.querySelector('.rec_title .detail')
const recDetailR = document.querySelector('.rec_right .rec_detail')
/* 고민별 자동 스크롤 방지 */
smallImg[0].parentElement.addEventListener('click', (e)=>{
    e.preventDefault();
    scheduleOpen.classList.toggle('hide');
})
smallImg[1].parentElement.addEventListener('click', (e)=>{
    e.preventDefault();
    scheduleOpen.classList.toggle('hide');
})
smallImg[2].parentElement.addEventListener('click', (e)=>{
    e.preventDefault();
    scheduleOpen.classList.toggle('hide');
})
smallImg[3].parentElement.addEventListener('click', (e)=>{
    e.preventDefault();
    scheduleOpen.classList.toggle('hide');
})
bigImg.parentElement.addEventListener('click', (e)=>{
    e.preventDefault();
    scheduleOpen.classList.toggle('hide');
})
recDetailR.parentElement.addEventListener('click', (e)=>{
    e.preventDefault();
    scheduleOpen.classList.toggle('hide');
})


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
    recDetail.innerHTML = `단백질이 가득한 5가지 블랙시드 추출물이<br> 모발의 뿌리인 모근에 활력을 가득 채워주어<br> 건강하고 튼튼한 모근 케어에 도움을 줍니다.`
})
smallImg[1].addEventListener ('mouseover', function(){
    bigSrc(2);
    removeImg();
    smallImg[1].parentElement.classList = 'active';
    recDetail.innerHTML = `깊은 영양감을 담은 3가지 꿀 유래 성분이<br> 건조함으로 지친 피부 사이사이에 활력을 전하여<br> 건강한 피부로 가꿔줍니다.`
})
smallImg[2].addEventListener ('mouseover', function(){
    bigSrc(3);
    removeImg();
    smallImg[2].parentElement.classList = 'active';
    recDetail.innerHTML = `다양한 외부 자극으로 쉽게 건조해지는<br>두피와 모발에 가장 필요한 것은 <br>빈틈없는 단백질 케어를 샴푸만으로`
})
smallImg[3].addEventListener ('mouseover', function(){
    bigSrc(4);
    removeImg();
    smallImg[3].parentElement.classList = 'active';
    recDetail.innerHTML = `코코넛에서 유래한 순하고 건강한 세정성분으로<br>노폐물은 씻어내고 촉촉함을 가득 채워주어<br> 건강한 두피 컨디션을 되찾을 수 있도록 도움을 줍니다.`
})


/* ===============고민별 좌측 헤어, 스킨, 맨즈케어 변경 */
const recCategory = document.querySelectorAll('.rec_category > a')
console.log(recCategory, recCategory[0].children)

function removeCategory (){
    recCategory[0].classList.remove ('active');
    recCategory[1].classList.remove ('active');
    recCategory[2].classList.remove ('active');
}

function smallImgSkin (){
    smallImg[0].src = `./images/product_rec_05.jpg`
    smallImg[1].src = `./images/product_rec_06.jpg`
    smallImg[2].src = `./images/product_rec_07.jpg`
    smallImg[3].src = `./images/product_rec_08.jpg`
}
function smallImgMen (){
    smallImg[0].src = `./images/product_rec_09.jpg`
    smallImg[1].src = `./images/product_rec_10.jpg`
    smallImg[2].src = `./images/product_rec_11.jpg`
    smallImg[3].src = `./images/product_rec_12.jpg`
}

recCategory[0].addEventListener('click', function(){
    removeCategory();
    recCategory[0].classList = 'active';
    bigSrc(1);
})
recCategory[1].addEventListener('click', function(){
    removeCategory();
    recCategory[1].classList = 'active';
    recCategory[1].style.margin = '25px 0'
    bigImg.src = `./images/product_recommend_bg5.jpg`;
    smallImgSkin ();
})
recCategory[2].addEventListener('click', function(){
    removeCategory();
    recCategory[2].classList = 'active';
    bigImg.src = `./images/product_recommend_bg6.jpg`;
    smallImgMen ()
})

recCategory[0].addEventListener('click', (e)=>{
    e.preventDefault();
    scheduleOpen.classList.toggle('hide');
})
recCategory[1].addEventListener('click', (e)=>{
    e.preventDefault();
    scheduleOpen.classList.toggle('hide');
})
recCategory[2].addEventListener('click', (e)=>{
    e.preventDefault();
    scheduleOpen.classList.toggle('hide');
})