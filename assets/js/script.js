let menuButton = document.getElementById('btn-menu');
let menuImage = document.getElementById('img-menuBtn');
let dynamicMenu = document.getElementById('cont-dynamicMenu');
let menuItems = document.getElementById('menu-items');

menuButton.addEventListener('click', function(){
    if(menuImage.style.transform === 'rotate(90deg)'){
        menuImage.style.transform = 'rotate(0)';
        dynamicMenu.style.width = '0%';
        document.body.style.overflow = 'auto';
        menuItems.classList.remove('d-block');
        menuItems.className = 'd-none';
    }
    else{
        menuImage.style.transform = 'rotate(90deg)';
        dynamicMenu.style.width = '100%';
        document.body.style.overflow = 'hidden';
        menuItems.classList.remove('d-none');
        menuItems.className = 'd-block';
    }
});

function createCustomElement(element, id, elementClass) {
    let addCont = document.createElement(element);
    addCont.id = id;
    addCont.className = elementClass;
    return addCont;
}

function generateAd(){
    function countdown() {
        if (countdownNumber > 0) {
            countdownNumber--;
            document.getElementById('countdownElement').innerHTML = "Ad showing in: " + countdownNumber + "s";
            setTimeout(countdown, 1000);
            console.log(countdownNumber);
        } else {
            document.getElementById('countdownElement').remove();
            let adImage = createCustomElement('img', 'ads-img');
            adImage.className = 'img-fluid p-2';
            adImage.src = 'assets/img/ads/ad-banner1.png';
            contImage.appendChild(adImage);

            let closeBtn = createCustomElement('button', 'closeBtn');
            closeBtn.innerHTML = "Close Advertisement";
            closeBtn.className = 'position-absolute end-0 bottom-0 z-1';
            closeBtn.id = 'close-btn';
            contImage.appendChild(closeBtn);

            closeBtn.addEventListener('click', function(){
                adImage.remove();
                closeBtn.remove();
                generateAd();
            });
        }
    }
    const min = 5;
    const max = 10;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    
    console.log(randomNumber);

    let countdownNumber = randomNumber;
    let countdownElement = createCustomElement('p', 'countdownElement');
    let contImage = document.getElementById('cont-image');
    contImage.appendChild(countdownElement);
    
    countdown();
}
generateAd();
