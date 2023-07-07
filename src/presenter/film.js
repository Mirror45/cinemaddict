import FilmView from "../view/film.js";
import { render, RenderPosition, replace, remove } from "../utils/render.js";

export default class Film {
  constructor(filmListContainer) {
    this._filmListContainer = filmListContainer;
  }

  init(film) {
    this._film = film;
    this._filmCompoment = new FilmView(film);

    render(
      this._filmListContainer,
      this._filmCompoment,
      RenderPosition.BEFOREEND
    );
  }

  adaptToClient (film) {
    const adaptFilm = Object.assign({},film);
    return adaptFilm;
  }
}
