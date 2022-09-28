
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    lockBody: document.querySelector("body"),
  };

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }

  const openBtnClick = () => {
    toggleModal();
    document.addEventListener("keydown", keyBoardPress);
    refs.lockBody.classList.toggle("lock");
  };

  const closeBtnClick = () => {
    toggleModal();
    document.removeEventListener("keydown", keyBoardPress);
    refs.lockBody.classList.toggle("lock");
  };

  function onBackdropClick(event) {
    if (event.currentTarget === event.target) {
      closeBtnClick();
    }
  }

  function keyBoardPress(event) {
    if (event.key === "Escape") {
      closeBtnClick();
    }
  }

  refs.openModalBtn.addEventListener("click", openBtnClick);
  refs.closeModalBtn.addEventListener("click", closeBtnClick);
  refs.modal.addEventListener("click", onBackdropClick);

// const refs = {
//   openModalBtn: document.querySelector("[data-modal-open]"),
//   closeModalBtn: document.querySelector("[data-modal-close]"),
//   modal: document.querySelector("[data-modal]"),
// };

// refs.openModalBtn.addEventListener("click", toggleModal);
// refs.closeModalBtn.addEventListener("click", toggleModal);
// refs.backdrop.addEventListener("click", onBackdropClick);

// function toggleModal() {
//   refs.modal.classList.toggle("is-hidden");
// }

// function onBackdropClick() {
//   console.log("Клик");
// }
