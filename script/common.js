
/* 검색 아이콘 클릭 시 검색 팝업 보이기 */
const searchIcon = document.querySelector('.search > a');
const searchClose = document.querySelector('.search .close');
const searchPopup = document.querySelector('.search_popup');
const closeSearch = document.querySelector('.close')
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

/* ========================================헤더 색상관련 함수(S) */
function headerWhite (){
    headerW.style.backgroundColor = '#fff';
    headerW.style.borderBottom = '1px solid #bdbdbd30';
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
    headerW.style.borderBottom = 'none';
    logo.src = './images/nard_logo_w.png';
    categoryMenu.style.color = '#fff';
    saleMenu.style.color = '#fff';
    membershipMenu.style.color = '#fff';
    login.src = './images/icon_login.png';
    search.src = './images/icon_search.png';
    shopping.src = './images/icon_shopping.png';
}

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