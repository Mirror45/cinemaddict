import MovieBoardPresenter from "./presenter/movie-board.js";

const siteMainElement = document.querySelector(".main");
const movieBoardPresenter = new MovieBoardPresenter(siteMainElement);

movieBoardPresenter.init();
