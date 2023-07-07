import MovieBordView from "../view/movie-board.js";
import MovieListView from "../view/movie-list.js";
import ShowMoreButtonView from "../view/show-more-button.js";
import SiteMenuView from "../view/site-menu.js";
import FilmPresenter from "./film.js";
import { render, RenderPosition, remove } from "../utils/render.js";

export default class MovieBord {
  constructor(boardContainer, api) {
    this._boardContainer = boardContainer;
    this._filmPresenter = {};
    this._api = api;

    this._movieComponent = new MovieBordView();
    this._movieListComponent = new MovieListView();
    this._showMoreButtonView = new ShowMoreButtonView();
  }

  init() {
    render(
      this._boardContainer,
      this._movieComponent,
      RenderPosition.BEFOREEND
    );
    render(
      this._movieComponent,
      this._showMoreButtonView,
      RenderPosition.BEFOREEND
    );
    render(
      this._movieComponent,
      this._movieListComponent,
      RenderPosition.BEFOREEND
    );

    // this._tasksModel.addObserver(this._handleModelEvent);
    // this._filterModel.addObserver(this._handleModelEvent);

    // this._renderBoard();
  }

  // _renderFilm(film) {
  //   const filmPresenter = new FilmPresenter(this._movieListComponent);
  //   filmPresenter.init(film);
  //   this._filmPresenter[film.id] = filmPresenter;
  // }
}
