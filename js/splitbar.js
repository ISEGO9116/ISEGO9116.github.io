function dynamic_splitbar(){
    let bar = document.querySelector('.splitbar');
    bar.style.width = window.innerWidth - 200 + 'px';
}
window.onload = function() {
    dynamic_splitbar();
    //창 크기 조절로 인한 동적 사이즈 조절
    window.addEventListener('resize', dynamic_splitbar);
}