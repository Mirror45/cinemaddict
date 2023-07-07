import AbstractView from "./abstract.js";

const createMovieRatedTemplate = () => {
  return `<section class="films-list films-list--extra">
  <h2 class="films-list__title">Top rated</h2>
  </section>`;
};

export default class MovieRated extends AbstractView {
  getTemplate() {
    return createMovieRatedTemplate();
  }
}
