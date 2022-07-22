import Modal from 'bootstrap/js/dist/modal';

export const showBootstrapModal = (elementId: string): void => {
  const myModalEl = document.getElementById(elementId);
  const modal = Modal.getOrCreateInstance(myModalEl)
  modal.show();
};

export const hideBootstrapModal = (elementId: string): void => {
  const myModalEl = document.getElementById(elementId);
  const modal = Modal.getOrCreateInstance(myModalEl)
  modal.hide();
}

export const toggleBootstrapMoal = (elementId: string): void => {
  const myModalEl = document.getElementById(elementId);
  const modal = Modal.getOrCreateInstance(myModalEl)
  modal.toggle();
}