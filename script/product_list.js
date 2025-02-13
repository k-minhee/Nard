/* 헤어 카테고리 클래스 변경 */
const hairCategory = document.querySelectorAll('.p_category > a');
console.log(hairCategory);

function remove(){
    hairCategory[0].classList.remove ('active');
    hairCategory[1].classList.remove ('active');
    hairCategory[2].classList.remove ('active');
    hairCategory[3].classList.remove ('active');
    hairCategory[4].classList.remove ('active');
    hairCategory[5].classList.remove ('active');
}

hairCategory[0].addEventListener('click',function(){
    remove();
    hairCategory[0].classList = 'active';
})
hairCategory[1].addEventListener('click',function(){
    remove();
    hairCategory[1].classList = 'active';
})
hairCategory[2].addEventListener('click',function(){
    remove();
    hairCategory[2].classList = 'active';
})
hairCategory[3].addEventListener('click',function(){
    remove();
    hairCategory[3].classList = 'active';
})
hairCategory[4].addEventListener('click',function(){
    remove();
    hairCategory[4].classList = 'active';
})
hairCategory[5].addEventListener('click',function(){
    remove();
    hairCategory[5].classList = 'active';
})

/* 상품 보기 변경 */
const listOrder = document.querySelectorAll('.list_order > a');
console.log(listOrder);
function removeOrder (){
    listOrder[0].classList.remove ('active');
    listOrder[1].classList.remove ('active');
    listOrder[2].classList.remove ('active');
    listOrder[3].classList.remove ('active');
}
listOrder[0].addEventListener('click',function(){
    removeOrder();
    listOrder[0].classList = 'active';
})
listOrder[1].addEventListener('click',function(){
    removeOrder();
    listOrder[1].classList = 'active';
})
listOrder[2].addEventListener('click',function(){
    removeOrder();
    listOrder[2].classList = 'active';
})
listOrder[3].addEventListener('click',function(){
    removeOrder();
    listOrder[3].classList = 'active';
})

/* 자동 스크롤 방지 */
const viewmoreP = document.querySelector('.p_viewmore');

listOrder[0].addEventListener('click', (e)=>{e.preventDefault();})
listOrder[1].addEventListener('click', (e)=>{e.preventDefault();})
listOrder[2].addEventListener('click', (e)=>{e.preventDefault();})
listOrder[3].addEventListener('click', (e)=>{e.preventDefault();})

hairCategory[0].addEventListener('click', (e)=>{e.preventDefault();})
hairCategory[1].addEventListener('click', (e)=>{e.preventDefault();})
hairCategory[2].addEventListener('click', (e)=>{e.preventDefault();})
hairCategory[3].addEventListener('click', (e)=>{e.preventDefault();})
hairCategory[4].addEventListener('click', (e)=>{e.preventDefault();})
hairCategory[5].addEventListener('click', (e)=>{e.preventDefault();})

viewmoreP.addEventListener('click', (e)=>{e.preventDefault();})
