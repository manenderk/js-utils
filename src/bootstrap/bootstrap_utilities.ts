import Modal from 'bootstrap/js/dist/modal';

/**
 * Function that will opens a bootstrap modal
 * @param modalId - HTML ID of the bootstrap modal
 */
export const showBootstrapModal = (modalId: string): void => {
  const myModalEl = document.getElementById(modalId);
  const modal = Modal.getOrCreateInstance(myModalEl)
  modal.show();
};

/**
 * Function that will close a bootstrap modal
 * @param modalId - HTML ID of the bootstrap modal
 */
export const hideBootstrapModal = (modalId: string): void => {
  const myModalEl = document.getElementById(modalId);
  const modal = Modal.getOrCreateInstance(myModalEl)
  modal.hide();
}

/**
 * Function that will toggle the show hide state of bootstrap modal
 * @param modalId - HTML ID of the bootstrap modal
 */
export const toggleBootstrapMoal = (modalId: string): void => {
  const myModalEl = document.getElementById(modalId);
  const modal = Modal.getOrCreateInstance(myModalEl)
  modal.toggle();
}