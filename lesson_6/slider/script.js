var bigImage = document.querySelector('#current');

function init() {
  
    var slider = document.querySelector('.slider');
    slider.addEventListener('click', changeBigPicture);

    var alink = document.querySelector('.arrow');
    alink.addEventListener('click', flipping);


function changeBigPicture(event) {
    let appDiv = document.querySelector('.show-full-img');

    let smallImg = event.target.src;

    let srcArr = smallImg.split('/');
    let smallImgName = srcArr[srcArr.length - 1];
    let bigImgScr = 'img/big/' + smallImgName;

    bigImage.onerror = function () {
        bigImgScr = 'img/big/default.jpg';
        bigImage.src = bigImgScr;
    };

    bigImage.src = bigImgScr;
}


function flipping(event) {
    let linkArrow = event.target.id;
    let getIdImg = document.querySelector('#current').src;
    let srcArr = getIdImg.split('/');
    let nameImgCurrent = srcArr[srcArr.length - 1];
    srcArr = nameImgCurrent.split('.');

    let nameFileCurrent = srcArr[0];
    
    if (linkArrow == 'rightArrow') {
        nameFileCurrent++;
    } else {
        nameFileCurrent--;
    }

    if (nameFileCurrent > 5 ) {
        nameFileCurrent = 1;        
    }

    if (nameFileCurrent < 1 ) {
        nameFileCurrent = 5;        
    }

    let nameFileNext = 'img/big/' + nameFileCurrent + '.jpg';
    bigImage.src = nameFileNext;
    
}

}
window.onload = init;