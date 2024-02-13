'use strict';

const listImages = [
    {
        src: 'начсцена11.jpg',
        nameImg: '1',
    },
    {
        src: 'сцена1.png',
        nameImg: '2',
    },
    {
    src: 'сцена2.png',
    nameImg: '3',
    },
    {
        src: 'сцена3перв.png',
        nameImg: '3',
    },
    {
    src: 'сцена3.png',
    nameImg: '3',
    },
    {
        src: 'сцена4.png',
        nameImg: '3',
    },
    {
        src: 'сцена5.png',
        nameImg: '3',
    },
    {
        src: 'сцена6.png',
        nameImg: '3',
    },
    {
        src: 'сцена7.png',
        nameImg: '3',
    },
    {
        src: 'сцена8.png',
        nameImg: '3',
    },
    {
        src: 'сцена9.png',
        nameImg: '3',
    },
    {
        src: 'сцена10.png',
        nameImg: '3',
    },
    {
        src: 'сцена11.png',
        nameImg: '3',
    },
    {
        src: 'сцена12.png',
        nameImg: '3',
    },
    {
        src: 'сцена13.png',
        nameImg: '3',
    },
    {
        src: 'сцена14.png',
        nameImg: '3',
    },
    {
        src: 'сцена15.png',
        nameImg: '3',
    },
    {
        src: 'сцена16.png',
        nameImg: '3',
    },
    {
        src: 'сцена17.png',
        nameImg: '3',
    },
    {
        src: 'сцена18.png',
        nameImg: '3',
    },
    {
        src: 'сцена19.png',
        nameImg: '3',
    },
    {
        src: 'сцена20.png',
        nameImg: '3',
    },
    {
        src: 'сцена21.png',
        nameImg: '3',
    },
    {
        src: 'сцена22.png',
        nameImg: '3',
    },
    {
        src: 'сцена23.png',
        nameImg: '3',
    },
    {
        src: 'сцена24.png',
        nameImg: '3',
    },
    {
        src: 'сцена25.png',
        nameImg: '3',
    },
    {
        src: 'сцена26.png',
        nameImg: '3',
    },
    {
        src: 'сцена27.png',
        nameImg: '3',
    },
    {
        src: 'сцена28.png',
        nameImg: '3',
    },
    {
        src: 'сцена29.png',
        nameImg: '3',
    },
    {
        src: 'сцена30.png',
        nameImg: '3',
    },
    {
        src: 'сцена31.png',
        nameImg: '3',
    },
    {
        src: 'сцена32.png',
        nameImg: '3',
    },
    {
        src: 'сцена33.png',
        nameImg: '3',
    },
    {
        src: 'сцена34.png',
        nameImg: '3',
    },
    {
        src: 'сцена35.png',
        nameImg: '3',
    },
    {
        src: 'сцена36.png',
        nameImg: '3',
    },
    {
        src: 'сцена37.png',
        nameImg: '3',
    },
    {
        src: 'сцена38.png',
        nameImg: '3',
    },
    {
        src: 'сцена39.png',
        nameImg: '3',
    },
    {
        src: 'сцена40.png',
        nameImg: '3',
    },
    {
        src: 'сцена41.png',
        nameImg: '3',
    },
    {
        src: 'сцена42.png',
        nameImg: '3',
    },
    {
        src: 'сцена43.png',
        nameImg: '3',
    },
    {
        src: 'сцена44.png',
        nameImg: '3',
    },
    {
        src: 'бекстейдж6.jpg',
        nameImg: '3',
    },
];

const img= document.querySelector('img');
const button = document.querySelector('button');

const setImg = (currentDataImg) => {
    img.src = currentDataImg.src;
    img.alt = currentDataImg.nameImg;
}

setImg(listImages[0]);

button.addEventListener('click', onChangeImg);

let count = 0;

function onChangeImg() {
    count += 1;
    setImg(listImages[count]);
}