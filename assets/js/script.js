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

// gagawa ng custom element with id and class
function createCustomElement(element, id, elementClass) {
    let addCont = document.createElement(element);
    addCont.id = id;
    addCont.className = elementClass;
    return addCont;
}

function generateAd(){

    // countdown 
    function countdown() {
        if (countdownNumber > 0) {
            countdownNumber--;
            document.getElementById('countdownElement').innerHTML = "Ad showing in: " + countdownNumber + "s";
            setTimeout(countdown, 1000);
            console.log(countdownNumber);
        } else {
            const min = 1;
            const max = 4;
            const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

            document.getElementById('countdownElement').remove(); // countdown text
            let adImage = createCustomElement('img', 'ads-img'); // gawa ng <img> element
            adImage.className = 'img-fluid p-2'; // add class sa <img> element
            adImage.src = '../assets/img/ads/ad-banner'+randomNumber+'.png'; // add source sa <img> element
            contImage.appendChild(adImage); // ilagay yung <img> sa loob ng container or <div>

            let closeBtn = createCustomElement('button', 'closeBtn');
            closeBtn.innerHTML = "Close Advertisement";
            closeBtn.className = 'position-absolute end-0 bottom-0';
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

const anchors = document.querySelectorAll('a[href^="#"]');

anchors.forEach(anchor => {
  anchor.addEventListener('click', event => {
    event.preventDefault();
    const href = anchor.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth'
    });
  });
});