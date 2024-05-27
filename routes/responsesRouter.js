import express from 'express';
import {
  getAllResponses,
  //   getOneContact,
  //   deleteContact,
  createResponse,
  //   updateContact,
} from '../controllers/responsesControllers.js';

const responsesRouter = express.Router();

responsesRouter.get('/', getAllResponses);

// contactsRouter.get('/:id', getOneContact);

// contactsRouter.delete('/:id', deleteContact);

responsesRouter.post('/', createResponse);

// contactsRouter.put('/:id', updateContact);

export default responsesRouter;
