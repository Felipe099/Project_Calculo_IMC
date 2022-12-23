export const Modal = {
  modalOpen: document.querySelector('.modal-wrapper'),
  modalMessage: document.querySelector('.modal .title span'),
  modalClose: document.querySelector('.modal button.close'),

  open() {
      Modal.modalOpen.classList.add('open');
  },
  close() {
      Modal.modalOpen.classList.remove('open');
  },
};

Modal.modalClose.onclick = () => {
  Modal.close();
};

window.addEventListener("keydown", closePressButtonEsc)

 function closePressButtonEsc(event) {
  if(event.key === "Escape") {
    Modal.close();
  }
}


