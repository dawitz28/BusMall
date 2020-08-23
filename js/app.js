'use strict'

var productOne = document.getElementById('product-1');
var productTwo = document.getElementById('product-2');
var productThree = document.getElementById('product-3');
var resultSelector = document.getElementById('list');
var imageProuduct = document.getElementById('image-product');

var productArray = [];
var productArrayContainer = [productOne, productTwo, productThree];
var inputRounds = 25;

//global variable generate from array ...
function randomIndex(max){
    return Math.floor(Math.random() * Math.floor(max));

}

function pictureSelect(){
    var currentImages = []
    for (var i = 0; i < productArrayContainer.length; i++){
        var currentRandomIndex = randomIndex(productArray.length);
        while (currentImages.includes(currentRandomIndex)){
           currentRandomIndex = randomIndex(productArray.length)
        }
        currentImages.push(currentRandomIndex)       
        
        productArrayContainer[i].src = productArray[currentRandomIndex].src 
        productArrayContainer[i].alt = productArray[currentRandomIndex].alt
        productArrayContainer[i].title = productArray[currentRandomIndex].title
        productArray[currentRandomIndex].view++ 

    }
}

function clickHandler(event){
    inputRounds--; 
    if (inputRounds != 0){
        var vote = event.target.title;
        for (var i = 0; i < productArray.length; i++){
            if (vote === productArray[i].title){
                productArray[i].click++;   
            }  
            pictureSelect();

        }
    } else {
        imageProuduct.removeEventListener('click', clickHandler);
        hide(imageProuduct)
        render();
    }
}
function show(elem){
    elem.style.display = 'block';

}
function hide(elem){
    elem.style.display = 'none';
}

function render (){
    var ulEl = document.createElement('ul')
    for ( var i = 0; i < productArray.length; i++){
        var liEl =document.createElement('li')
        liEl.textContent = `${productArray[i].title}${productArray[i].click} clicks ${productArray[i].view} viewed`
        ulEl.appendChild(liEl)
    }
        resultSelector.appendChild(ulEl)
}


//constructor function 
function Product(name, src, click, view){
this.alt = name;
this.src = `../images/${src}.jpg`
this.title = name;
this.click = 0;
this.view = 0;
productArray.push(this)

};

function pageLoad(){

    new Product ('bag','Bag');
    new Product ('banana','Banana');
    new Product ('bathroom','Bathroom');
    new Product ('boots','Boots');
    new Product ('breakfast','Breakfast');
    new Product ('bubblegum','Bubblegum');
    new Product ('chair','Chair');
    new Product ('cthulhu','Cthulhu');
    new Product ('dog-duck','Dog-duck');
    new Product ('dragon','Dragon');  
    new Product ('pen','Pen');
    new Product ('pet-sweep','Pet-sweep');
    new Product ('scissors','Scissors');
    new Product ('shark','Shark');
    new Product ('sweep','Sweep');
    new Product ('tauntaun','Tauntaun'); 
    new Product ('unicorn','Unicorn');
    new Product ('usb','Usb');
    new Product ('water-can','Water-can');
    new Product ('wine-glass','Wine-glass');
};

pageLoad();
imageProuduct.addEventListener('click', clickHandler);
pictureSelect();

