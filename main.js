let imageBox = document.querySelector('.imageBox')

const imgData = [
    'foxImage/01.jpg',
    'foxImage/02.jpg',
    'foxImage/03.jpg',
    'foxImage/04.jpg',
    'foxImage/05.jpg',
    'foxImage/06.jpg',
]

//產生img
imgData.forEach(function(item,index){
    let img = `<img alt="" class="imgBgc img0${index + 1}">`
    imageBox.innerHTML += img
})

//產生圖片背景
let imgNum = document.querySelectorAll('.imgBgc')
imgNum.forEach(function(item,index){
    imgNum[index].style.backgroundImage = `url('${imgData[index]}')`
})