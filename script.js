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

//ACCORDIONS----------

tabs.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  if (!clicked) return; //catch
  hideSkills(); //hideAll
  clicked.classList.add('operations__tab--active'); //btn

  if (clicked.dataset.tab === '1') {
    divSkills.forEach(el => {
      el.classList.add('operations__content--active');
    });
  } else {
    document
      .querySelector(`.operations__content--${clicked.dataset.tab}`)
      .classList.add('operations__content--active'); //div
  }
});
