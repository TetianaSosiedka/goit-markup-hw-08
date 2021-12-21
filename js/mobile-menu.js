(() => {
  const refs = {
    openMenuBtn: document.querySelector('.js-closed-menu'),
    closeMenuBtn: document.querySelector('.js-open-menu'),
    menu: document.querySelector('.mob-menu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

    function toggleMenu() {
      document.body.classList.toggle('modal-open');
    refs.menu.classList.toggle('is-hidden');
  }
})();
