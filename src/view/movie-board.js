import AbstractView from "./abstract.js";

const createMovieBoardTemplate = () => {
  return `<section class="films"> </section>`;
};

export default class MovieBoard extends AbstractView {
  getTemplate() {
    return createMovieBoardTemplate();
  }
}
