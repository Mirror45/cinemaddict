import AbstractView from "./abstract.js";

const createMovieTemplate = (film_info) => {
  const { title, total_rating,  isFavorite } = film_info; 



  const activeClassName = (name) => {
    return name ? "film-card__controls-item--active" : "";
  };

  return `<article class="film-card">
        <h3 class="film-card__title">${film_info.title}</h3>
        <p class="film-card__rating">${title}</p>
        <p class="film-card__info">
          <span class="film-card__year">${title}</span>
          <span class="film-card__duration">${title}</span>
          <span class="film-card__genre">${title}</span>
        </p>
        <img src="./images/posters/the-dance-of-life.jpg" alt="" class="film-card__poster">
        <p class="film-card__description">${title}</p>
        <a class="film-card__comments">${title}s</a>
        <div class="film-card__controls">
          <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist" type="button">
            Add to watchlist
          </button>
          <button class="film-card__controls-item button film-card__controls-item--mark-as-watched" type="button">
            Mark as watched
          </button>
          <button class="film-card__controls-item button film-card__controls-item--favorite" type="button">
            Mark as favorite
          </button>
        </div>
      </article>`;
};

export default class Film extends AbstractView {
  constructor(film) {
    super();
    this._film = film;

    this._watchListClickHandler = this._watchListClickHandler.bind(this);
    this._watchedClickHandler = this._watchedClickHandler.bind(this);
    this._favoriteClickHandler = this._favoriteClickHandler.bind(this);
  }

  getTemplate() {
    return createMovieTemplate(this._film);
  }

  _watchListClickHandler(evt) {
    evt.preventDefault();
    this._callback.watchListClick();
  }

  _favoriteClickHandler(evt) {
    evt.preventDefault();
    this._callback.favoriteClick();
  }
}
