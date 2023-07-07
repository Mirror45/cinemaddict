import MovieBoardPresenter from "./presenter/movie-board.js";
import FilmModel from "./model/films.js";
import Api from './api.js';

const AUTHORIZATION = 'Basic 7vRzYDt964';
const END_POINT =  'https://14.ecmascript.pages.academy/cinemaddict';

const siteMainElement = document.querySelector(".main");

const api = new Api(END_POINT, AUTHORIZATION);

const filmModel = new FilmModel();

const movieBoardPresenter = new MovieBoardPresenter(siteMainElement, filmModel, api);

movieBoardPresenter.init();
