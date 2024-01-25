// Clone Menu and Info Elements
const menu = document.querySelector('.navi');
const info = document.querySelector('.info');
const newMenuBox = document.querySelector('.new-mobile-menu');
const newMenu = menu.cloneNode(true);
const newInfo = info.cloneNode(true);

newMenuBox.insertAdjacentElement('beforeend', newMenu);
newMenuBox.insertAdjacentElement('beforeend', newInfo);

// Mobile Menu Toggle Function
const mobileMenuIcon = document.querySelector('.mobile-icon');

mobileMenuIcon.addEventListener('click', (e) => {
  const target = e.currentTarget;

  target.classList.toggle('active');

  const menuHeight = document.querySelector('.new-mobile-menu').scrollHeight; // 요소가 펼쳐졌을 때의 높이

  if (target.classList.contains('active')) {
    target.classList.remove('not-active');
    newMenuBox.style.height = `${menuHeight}px`;
  } else {
    target.classList.add('not-active');
    newMenuBox.style.height = 0;
  }
});

//Fixed Header Style Change and meet section start animation When Scrolling Down
const header = document.querySelector('.header');
const meetSection = document.querySelector('.meet-section');
const meetSectionTop = meetSection.offsetTop;

const scrCtrl = () => {
  const scry = window.scrollY; // 화면 최상단에 위치한 스크롤 위치값
  if (scry > 0) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }

  if (scry > meetSectionTop - 500) {
    meetSection.classList.add('on');
  }
};

window.addEventListener('scroll', scrCtrl);

//Features Section Date
const features = [
  {
    image: '/soaply/images/about-icon-1.svg',
    title: 'For All Skin Types',
    text: '최근 독감과 폐렴이 동시에 유행하면서 병원을 찾는 사람들이 급증하고 있습니다. 마스크를 벗고 나서 각종 질병이 대유행하자 마스크 때문에',
  },
  {
    image: '/soaply/images/about-icon-2.svg',
    title: '100% Organic',
    text: '대한민국의 영토는 한반도와 그 부속도서로 한다. 국가는 청원에 대하여 심사할 의무를 진다. 저작자·발명가·과학기술자와 예술가의 권리는 법률로써 보호한다.',
  },
  {
    image: '/soaply/images/about-icon-3.svg',
    title: 'Cuelty Free',
    text: '국가는 농·어민과 중소기업의 자조조직을 육성하여야 하며, 그 자율적 활동과 발전을 보장한다. 대통령은 전시·사변 또는 이에 준하는 국가비상사태에 있어서',
  },
];
// 한번에 읽기

// 각각읽기
// features. forEach((feature) => {
//   console.log(feature.title);
// })

const featuresWrapper = document.querySelector('.features');

features.forEach((feature) => {
  const featureElm = `
    <div class="feature">
    <div class="feature-icon">
    <img src ="${feature.image}" alt= /> 
    </div>
    <h4>${feature.title}</h4>
    <p>${feature.text}</p>
    </div>
   `;

  featuresWrapper.insertAdjacentHTML('beforeend', featureElm);
});

//Swiper Slider Code
const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  loop: true, // 반복 여부

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
