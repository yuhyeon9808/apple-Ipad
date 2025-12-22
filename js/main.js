// 장바구니
const basketStarterEl = document.querySelector('header .basket-starter');
const basketEl = basketStarterEl.querySelector('.basket');

basketStarterEl.addEventListener('click', (e) => {
  e.stopPropagation();
  basketEl.classList.toggle('show');
});

basketEl.addEventListener('click', (e) => {
  e.stopPropagation();
});

window.addEventListener('click', () => {
  basketEl.classList.remove('show');
});

// 검색
const headerEl = document.querySelector('header');
const headerMenuEls = [...headerEl.querySelectorAll('ul.menu > li')];
const searchWrapEl = headerEl.querySelector('.search-wrap');
const searchStarterEl = headerEl.querySelector('.search-starter');
const searchCloserEl = searchWrapEl.querySelector('.search-closer');
const searchShadowEl = searchWrapEl.querySelector('.shadow');
const searchInputEl = searchWrapEl.querySelector('input');
const documentEl = document.documentElement;
const searchDelayEls = [...searchWrapEl.querySelectorAll('li')];

const showSearch = () => {
  headerEl.classList.add('searching');
  documentEl.classList.add('fixed');
  headerMenuEls.reverse().forEach((el, idx) => {
    el.style.transitionDelay = (idx * 0.4) / headerMenuEls.length + 's';
  });

  searchDelayEls.forEach((el, idx) => {
    el.style.transitionDelay = (idx * 0.4) / searchDelayEls.length + 's';
  });

  setTimeout(() => {
    searchInputEl.focus();
  }, 600);
};

const hideSearch = () => {
  headerEl.classList.remove('searching');
  documentEl.classList.remove('fixed');
  searchInputEl.value = '';
  headerMenuEls.forEach((el, idx) => {
    el.style.transitionDelay = (idx * 0.4) / headerMenuEls.length + 's';
  });
  searchDelayEls.reverse(el, idx) /
    forEach(() => {
      el.style.transitionDelay = (idx * 0.4) / searchDelayEls.length + 's';
    });
  searchDelayEls.reverse();
};

searchStarterEl.addEventListener('click', showSearch);
searchCloserEl.addEventListener('click', hideSearch);
searchShadowEl.addEventListener('click', hideSearch);
