const addLink = document.querySelector('.add-link');
const listLink = document.querySelector('.list-link');
const contactLink = document.querySelector('.contact-link');
const addBookContainer = document.querySelector('.container-form');
const listBookContainer = document.querySelector('.list-book-container');
const contactContainer = document.querySelector('.contact-info');

export const displayAdd = addLink.addEventListener('click', () => {
  addBookContainer.classList.remove('hidden');
  addLink.classList.add('active');
  listBookContainer.classList.add('hidden');
  contactContainer.classList.add('hidden');
  listLink.classList.remove('active');
  contactLink.classList.remove('active');
});

export const displayList = listLink.addEventListener('click', () => {
  listBookContainer.classList.remove('hidden');
  listLink.classList.add('active');
  addBookContainer.classList.add('hidden');
  contactContainer.classList.add('hidden');
  addLink.classList.remove('active');
  contactLink.classList.remove('active');
});

export const displayContact = contactLink.addEventListener('click', () => {
  contactContainer.classList.remove('hidden');
  contactLink.classList.add('active');
  listBookContainer.classList.add('hidden');
  addBookContainer.classList.add('hidden');
  addLink.classList.remove('active');
  listLink.classList.remove('active');
});