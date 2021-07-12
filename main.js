let imageBox = document.querySelector('.imageBox')
let modal = document.querySelector('.modal')
let fullImg = document.querySelector('.imgBox img')
let nowNum = document.querySelector('.nowNum')
let text = document.querySelector('.text')

const clear = document.querySelector('.clear')

const imgData = [
    {
        imgSrc: 'foxImage/01.jpg',
        text: 'Have you even seen the cute fox before?',
        name: `<i>—Erik Mclean</i>`
    },{
        imgSrc: 'foxImage/02.jpg',
        text: 'The quick brown fox jumps over the lazy dog.',
        name: `<i>—Annabelle</i>`
    },{
        imgSrc: 'foxImage/03.jpg',
        text: "A cunning fox can't wash away his whole body.",
        name: `<i>—Erik Mclean</i>`
    },{
        imgSrc: 'foxImage/04.jpg',
        text: 'The fox belched at the cave unknown.',
        name: `<i>—Erik Mclean</i>`
    },{
        imgSrc: 'foxImage/05.jpg',
        text: 'Fox dies first hill, leopard dies first hill.',
        name: `<i>—Erik Mclean</i>`
    },{
        imgSrc: 'foxImage/06.jpg',
        text: 'The fox looks for meat and the rabbit for grass.',
        name: `<i>—Erik Mclean</i>`
    }
]

//產生img
imgData.forEach(function (item, index) {
    let img = `<img alt="" class="imgBgc img0${index + 1}">`
    imageBox.innerHTML += img
})

//產生圖片背景
let imgNum = document.querySelectorAll('.imgBgc')
let nowSrc 

imgNum.forEach(function (item, index) {
    imgNum[index].style.backgroundImage = `url('${imgData[index].imgSrc}')`

    // 灰色背景
    item.addEventListener('click', function () {  
        modal.style.display = 'flex'
        fullImg.src = imgData[index].imgSrc
        nowNum.textContent = index + 1
        nowSrc = index
        display()
    })
})

clear.addEventListener('click',function(){
    modal.style.display = 'none'
})

const arrowRight = document.querySelector('.arrowRight')
const arrowLeft = document.querySelector('.arrowLeft')
console.log(imgData.length);


arrowRight.addEventListener('click',function(){
    nowSrc += 1
    fullImg.src = imgData[nowSrc].imgSrc
    display()
})

arrowLeft.addEventListener('click',function(){
    nowSrc -= 1
    fullImg.src = imgData[nowSrc].imgSrc
    display()
})

//箭頭顯示
function display(){
    if(nowSrc == imgData.length - 1){
        arrowRight.style.display = 'none'
    }else if(nowSrc == 0){
        arrowLeft.style.display = 'none'
    }else{
        arrowRight.style.display = 'flex'
        arrowLeft.style.display = 'flex'
    }
    nowNum.textContent = nowSrc+1
    text.innerHTML = imgData[nowSrc].text + `</br>` + imgData[nowSrc].name
}