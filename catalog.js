let listFilter = document.querySelectorAll('.filter__main__list')
let selectItem = document.querySelectorAll('.select-item')
let listWrapper = document.querySelector('.filter__main__list-wrapper');
let filterHeadline = document.querySelectorAll('.filter__main__headline')


function openWrapper(e) {
    listWrapper.classList.toggle('opened-wrapper')
    listWrapper.classList.toggle('closed-wrapper')
}

for (i = 0; i <= filterHeadline.length; i++) {
    filterHeadline[i].addEventListener('click', openWrapper, false)
}

function openFilter(e) {
    e.currentTarget.parentElement.classList.toggle('opened-filter')
    e.currentTarget.parentElement.classList.toggle('closed-filter')
}

for (i = 0; i <= selectItem.length; i++) {
    selectItem[i].addEventListener('click', openFilter, false)
}
