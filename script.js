const search_btn = document.querySelector('.btn');
const search_container = document.querySelector('.search-container');

search_btn.addEventListener('click', () => {
    search_container.classList.toggle('active');
    
})