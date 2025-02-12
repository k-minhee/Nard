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