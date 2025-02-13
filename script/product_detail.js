/* 검색 아이콘 클릭 시 검색 팝업 보이기 */
const searchIcon = document.querySelector('.search > a');
const searchClose = document.querySelector('.search .close');
const searchPopup = document.querySelector('.search_popup');
const closeSearch = document.querySelector('.close')
const categoryMenu = document.querySelector('header .category_wrap a');
const saleMenu = document.querySelector('header .sale_wrap a');
const membershipMenu = document.querySelector('header .h_membership');
const login = document.querySelector('.login img')
const shopping = document.querySelector('.shopping img')
const search = document.querySelector('.search img')
console.log(searchIcon, searchPopup);

/* 헤더 검색 아이콘 클릭 시 자동 상단 스크롤 방지 */
searchIcon.addEventListener('click', (e)=>{
    e.preventDefault();
})
searchPopup.addEventListener('click', (e)=>{
    e.preventDefault();
})

searchIcon.addEventListener('click',function(){
    searchPopup.style.display = 'block';
})

closeSearch.addEventListener('click',function(){
    searchPopup.style.display = 'none';
})


/* 헤더 상단 스크롤 방지 */
categoryMenu.addEventListener('click', (e)=>{
    e.preventDefault();
})
saleMenu.addEventListener('click', (e)=>{
    e.preventDefault();
})
membershipMenu.addEventListener('click', (e)=>{
    e.preventDefault();
})
login.parentElement.addEventListener('click', (e)=>{
    e.preventDefault();
})
shopping.parentElement.addEventListener('click', (e)=>{
    e.preventDefault();
})

/* ======================================================review-swiper 관련 */
const reviewSlide = new Swiper('.review-slide',{
    slidesPerView: 6,
    spaceBetween: 10,
});

const reviewSlideImg = document.querySelectorAll('.swiper-slide a');
console.log('==========================================스와이퍼');
console.log(reviewSlideImg);
reviewSlideImg[0].addEventListener('click', (e)=>{e.preventDefault();})
reviewSlideImg[1].addEventListener('click', (e)=>{e.preventDefault();})
reviewSlideImg[2].addEventListener('click', (e)=>{e.preventDefault();})
reviewSlideImg[3].addEventListener('click', (e)=>{e.preventDefault();})
reviewSlideImg[4].addEventListener('click', (e)=>{e.preventDefault();})
reviewSlideImg[5].addEventListener('click', (e)=>{e.preventDefault();})


/* 상품 이미지 변경 */
const bigImg = document.querySelector('.contents_left .big img');
const smallImg = document.querySelectorAll('.contents_left .thumnail a img');
console.log(bigImg, smallImg);

function removeImg(){
    smallImg[0].parentElement.classList.remove ('active');
    smallImg[1].parentElement.classList.remove ('active');
    smallImg[2].parentElement.classList.remove ('active');
    smallImg[3].parentElement.classList.remove ('active');
}

function bigSrc (num){
    return bigImg.src = `./images/detail_big0${num}.jpg`;
}
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
smallImg[4].addEventListener ('mouseover', function(){
    bigSrc(5);
    removeImg();
    smallImg[4].parentElement.classList = 'active';
})


/* 수량 / 총 금액 계산 */
let price = 21900; // 상품가격
let num = 1; // 주문수량
let totalPrice = 0; // 총 금액
const productNum = document.querySelector('.num_select > span');
const minusBtn = document.querySelector('.num_select .minus') // 수량 감소버튼
const plusBtn = document.querySelector('.num_select .plus'); // 수량 증가버튼
const orderPrice = document.querySelector('.all_price');

console.log(price, num, totalPrice, productNum, minusBtn, plusBtn, orderPrice);

productNum.textContent = num;
orderPrice.textContent = (price*num).toLocaleString('ko-kr')+'원';

// 1. +버튼 클릭 시
plusBtn.addEventListener('click',()=>{
    num++;
    productNum.textContent = num;
    totalPrice = price*num;
    orderPrice.textContent = totalPrice.toLocaleString('ko-kr')+'원';
})
// 2. -버튼 클릭 시
minusBtn.addEventListener('click',()=>{
    if(num > 1){
        num--;
        productNum.textContent = num;
        totalPrice = price*num;
        orderPrice.textContent = totalPrice.toLocaleString('ko-kr')+'원';
    }
})

/* detail / review 영역 클릭 시 display 상태 변경 */
const selectTitle = document.querySelectorAll('.detail_review > *');
const detailContents = document.querySelectorAll('.detail_contents > *');
console.log(selectTitle, detailContents);

/* 자동 스크롤 방지 */
selectTitle[0].addEventListener('click', (e)=>{e.preventDefault();})
selectTitle[1].addEventListener('click', (e)=>{e.preventDefault();})

function removeBorder(){
    selectTitle[0].classList.remove ('active');
    selectTitle[1].classList.remove ('active');
}

selectTitle[0].addEventListener('click',function(){
    removeBorder()
    selectTitle[0].classList = 'active';
    detailContents[0].style.display = 'block'
    detailContents[1].style.display = 'none'
})
selectTitle[1].addEventListener('click',function(){
    removeBorder()
    selectTitle[1].classList = 'active';
    detailContents[0].style.display = 'none'
    detailContents[1].style.display = 'block'
})


/* ===========================리뷰 영역 */
const detailOrder = document.querySelectorAll('.detail_view_order > *') // 보기 방법
const viewmoreBtn = document.querySelector('.viewmore'); // 더보기 버튼

// 자동 상단 스크롤 방지
viewmoreBtn.addEventListener('click', (e)=>{e.preventDefault();})
detailOrder[0].addEventListener('click', (e)=>{e.preventDefault();})
detailOrder[1].addEventListener('click', (e)=>{e.preventDefault();})

detailOrder[0].addEventListener('click',function(){
    detailOrder[0].classList.remove ('active');
    detailOrder[1].classList.remove ('active');
    detailOrder[0].classList = 'active';
})
detailOrder[1].addEventListener('click',function(){
    detailOrder[0].classList.remove ('active');
    detailOrder[1].classList.remove ('active');
    detailOrder[1].classList = 'active';
})



