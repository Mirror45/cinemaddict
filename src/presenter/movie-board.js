import SiteMenuView from "../view/site-menu.js";
import SortView from "../view/sort.js";
import MovieBordView from "../view/movie-board.js";
import MovieListView from "../view/movie-list.js";
import MovieContainerView from "../view/movie-container.js";
import ShowMoreButtonView from "../view/show-more-button.js";
import MovieRatedView from "../view/movie-rated.js";
import MovieCommentedView from "../view/movie-commented.js";
import FilmPresenter from "./film.js";
import { render, RenderPosition, remove } from "../utils/render.js";

const Film_COUNT_PER_STEP = 5;

export default class MovieBord {
  constructor(boardContainer, filmModel, api) {
    this._filmModel = filmModel;
    this._boardContainer = boardContainer;
    this._renderFilmCount = Film_COUNT_PER_STEP;
    this._filmPresenter = {};
    this._api = api;

    this._siteMenuComponent = null;
    this._sortComponent = null;
    this._showMoreButtonComponent = null;

    this._movieComponent = new MovieBordView();
    this._movieListComponent = new MovieListView();
    this._movieContainerComponent = new MovieContainerView();
    this._movieRatedComponent = new MovieRatedView();
    this._movieCommentedComponent = new MovieCommentedView();
  }

  init() {
    render(this._boardContainer,this._movieComponent,RenderPosition.BEFOREEND);
    render(
      this._movieComponent,
      this._movieListComponent,
      RenderPosition.BEFOREEND
    );
    render(
      this._movieListComponent,
      this._movieContainerComponent,
      RenderPosition.BEFOREEND
    );
    render(
      this._movieComponent,
      this._movieRatedComponent,
      RenderPosition.BEFOREEND
    );
    render(
      this._movieComponent,
      this._movieCommentedComponent,
      RenderPosition.BEFOREEND
    );

    // this._tasksModel.addObserver(this._handleModelEvent);
    // this._filterModel.addObserver(this._handleModelEvent);

    this._renderBoard();
  }

  _getFilms () {
    const films = this._filmModel.getFilms();
    return films;
  }

  _renderFilm(film) {
    const filmPresenter = new FilmPresenter(this._movieContainerComponent);
    filmPresenter.init(film);
    this._filmPresenter[film.id] = filmPresenter;
  }

  _renderSiteMenu() {
    if (this._siteMenuComponent !== null) {
      this._siteMenuComponent = null;
    }

    this._siteMenuComponent = new SiteMenuView();

    render(
      this._boardContainer,
      this._siteMenuComponent,
      RenderPosition.AFTERBEGIN
    );
  }

  _renderSort() {
    if (this._sortComponent !== null) {
      this._sortComponent = null;
    }

    this._sortComponent = new SortView();

    render(
      this._boardContainer,
      this._sortComponent,
      RenderPosition.AFTERBEGIN
    );
  }

  _renderShowMoreButton() {
    if (this._showMoreButtonComponent !== null) {
      this._showMoreButtonComponent = null;
    }

    this._showMoreButtonComponent = new ShowMoreButtonView();

    render(
      this._movieListComponent,
      this._showMoreButtonComponent,
      RenderPosition.BEFOREEND
    );
  }

  _renderBoard() {
    const movies = this._getFilms();
    const moviesCount = movies.length;

    this._renderSort();
    this._renderSiteMenu();

    this._renderFilm(
      movies.slice(0, Math.min(moviesCount, this._renderFilmCount))
    );

    if (moviesCount > this._renderFilmCount) {
      this._renderShowMoreButton();
    }
  }
}
