import MovieBoardPresenter from "./presenter/movie-board.js";
import Api from './api.js';

const AUTHORIZATION = 'Basic 7vRzYDt964';
const END_POINT =  'https://14.ecmascript.pages.academy/cinemaddict';

const siteMainElement = document.querySelector(".main");

const api = new Api(END_POINT, AUTHORIZATION);
api.getMovies();

const movieBoardPresenter = new MovieBoardPresenter(siteMainElement);

movieBoardPresenter.init();
