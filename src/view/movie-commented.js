import AbstractView from "./abstract.js";

const createMovieCommentedTemplate = () => {
  return `<section class="films-list films-list--extra">
  <h2 class="films-list__title">Most commented</h2>
  </section>`;
};

export default class MovieCommented extends AbstractView {
  getTemplate() {
    return createMovieCommentedTemplate();
  }
}
