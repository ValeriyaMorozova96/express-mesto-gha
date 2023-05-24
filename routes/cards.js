const routes = require('express').Router();

const {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');

routes.get('/cards', getCards);

routes.post('/cards', createCard);

routes.delete('/cards/:cardId', deleteCard);

routes.put('/:cardId/likes', likeCard);

routes.delete('/:cardId/likes', dislikeCard);

module.exports = routes;
