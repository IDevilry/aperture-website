const burger = document.querySelector('#burger')

burger.addEventListener('click', () => {
    document.querySelector('.burger-list').classList.toggle('none');
})