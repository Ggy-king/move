import Header from 'components/header';
import 'components/searchbox';

const scrollContainer = document.getElementById('index-page');
const headerEl = scrollContainer.querySelector('.header');

new Header(headerEl, 0, scrollContainer);
