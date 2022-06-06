//?============== DOM ELEMENT ==============
const tabs = document.querySelector('.operations__tab-container');
const btnSkills = document.querySelectorAll('.operations__tab');
const btnSkill1 = document.querySelector('.operations__tab--1');
const btnSkill2 = document.querySelector('.operations__tab--2');
const btnSkill3 = document.querySelector('.operations__tab--3');
const divSkills = document.querySelectorAll('.operations__content');
const divSkill1 = document.querySelector('.operations__content--1');
const divSkill2 = document.querySelector('.operations__content--2');
const divSkill3 = document.querySelector('.operations__content--3');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const btnModalContact = document.querySelectorAll('.btn--show-modal');
const btnCloseModal = document.querySelector('.btn--close-modal');

//?============== FUNCTIONS ============
//hideSkills
const hideSkills = function () {
  btnSkills.forEach(el => {
    el.classList.remove('operations__tab--active');
  });
  divSkills.forEach(el => {
    el.classList.remove('operations__content--active');
  });
};

//?============= View =============
//?=====================================

//===============  ACCORDIONS ===============

tabs.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  if (!clicked) return; //catch

  hideSkills(); //hideAll

  clicked.classList.add('operations__tab--active'); //btn

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active'); //div
});

//===================  DINAMIC SKILLS  ===================

const skills = [
  {
    logo: 'https://cdn.iconscout.com/icon/free/png-256/html5-40-1175193.png',
    category: ['front-end'],
    skill: 'HTML',
  },
  {
    logo: 'https://cdn.iconscout.com/icon/free/png-256/css3-9-1175237.png',
    category: ['front-end'],
    skill: 'CSS',
  },
  {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png',
    category: ['front-end', 'back-end'],
    skill: 'JavaScript',
  },
  {
    logo: 'https://cdn.worldvectorlogo.com/logos/nodejs-2.svg',
    category: ['back-end'],
    skill: 'Node.js',
  },
  {
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUbjpHNiAc2MvMN1SAm7Ns5N_M-h2szTYEPecG_iKD0QXp5Ion52kG0FBsF-6Q6U5t3fY&usqp=CAU',
    category: ['back-end'],
    skill: 'Express.js',
  },
  {
    logo: 'https://javadesde0.com/wp-content/uploads/mongodb-install.jpg',
    category: ['back-end'],
    skill: 'mongoDB',
  },
  {
    logo: 'https://iconape.com/wp-content/png_logo_vector/jest-logo.png',
    category: ['back-end'],
    skill: 'Jest',
  },
  {
    logo: 'https://user-images.githubusercontent.com/11247099/145112184-a9ff6727-661c-439d-9ada-963124a281f7.png',
    category: ['back-end'],
    skill: 'Vitest',
  },
  {
    logo: 'https://vuejs.org/images/logo.png',
    category: ['front-end'],
    skill: 'Vue.js',
  },
  {
    logo: 'https://cdn.worldvectorlogo.com/logos/typescript-2.svg',
    category: ['front-end', 'back-end'],
    skill: 'TypeScript',
  },
  {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/1024px-WordPress_blue_logo.svg.png',
    category: ['front-end'],
    skill: 'Wordpress',
  },
  {
    logo: 'https://www.scrum.org/themes/custom/scrumorg/assets/images/logo-250.png',
    category: ['others'],
    skill: 'Scrum',
  },
  {
    logo: 'https://i.pinimg.com/474x/13/aa/3f/13aa3fc9b0d3ab1ac9d28d9ddbec0fb0.jpg',
    category: ['back-end'],
    skill: 'C#',
  },
  {
    logo: 'https://dyltqmyl993wv.cloudfront.net/assets/stacks/aspnet-core/img/aspnet-core-stack-220x234.png',
    category: ['back-end'],
    skill: 'Asp.Net',
  },
  {
    logo: 'http://assets.stickpng.com/thumbs/58481791cef1014c0b5e4994.png',
    category: ['back-end'],
    skill: 'PHP',
  },
];

skills.forEach((el, i, arr) => {
  const html = `<div class="operations__skill operations__skill--${i}">
  <img class="operations__skill__logo" src="${el.logo}">
  <h5 class="operations__skill__header">${el.skill}</h5>
</div>`;

  //show All
  document
    .querySelector('.operations__content--1 ')
    .insertAdjacentHTML('beforeend', html);

  //others
  if (!el.category.includes('front-end') && !el.category.includes('back-end')) {
    document
      .querySelector('.operations__content--4 ')
      .insertAdjacentHTML('beforeend', html);
  }
  //Back-End
  if (el.category.includes('back-end')) {
    document
      .querySelector('.operations__content--2 ')
      .insertAdjacentHTML('beforeend', html);
    //FrontEnd
  }
  if (el.category.includes('front-end')) {
    document
      .querySelector('.operations__content--3 ')
      .insertAdjacentHTML('beforeend', html);
  }
});

//===================  CONTACT ===================
btnModalContact[1].addEventListener('click', function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

btnCloseModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
