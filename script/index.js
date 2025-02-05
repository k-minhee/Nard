/* swiper */
const bestSwiper = new Swiper('.b_swiper', {
    slidesPerView: 4,
    spaceBetween: 8,
});

const newSwiper = new Swiper('.new_swiper', {
    slidesPerView: 4,
    spaceBetween: 8,
});


/* 검색 아이콘 클릭 시 검색 팝업 보이기 */
const searchIcon = document.querySelector('.search > a')
const searchPopup = document.querySelector('.search_popup');
const closeSearch = document.querySelector('.close')
console.log(searchIcon, searchPopup);

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

window.addEventListener('scroll', function(){
    // console.log('scroll');
    if(this.window.scrollY > 1000) {
        headerW.style.backgroundColor = '#fff'
        logo.src = './images/nard_logo_black.png';
        categoryMenu.style.color = '#2E1E1A'
        saleMenu.style.color = '#2E1E1A'
        membershipMenu.style.color = '#2E1E1A'
        login
    } else {
        headerW.style.background = 'none'
        logo.src = './images/nard_logo_w.png';
        categoryMenu.style.color = '#fff'
        saleMenu.style.color = '#fff'
        membershipMenu.style.color = '#fff'
    }
})
