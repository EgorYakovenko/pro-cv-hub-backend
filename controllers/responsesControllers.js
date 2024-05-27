// import contactsService from "../services/contactsServices.js";
import { Response } from '../schemas/responsesSchemas.js';

export const getAllResponses = async (req, res) => {
  const result = await Response.find();
  res.json(result);
};

// export const getOneContact = (req, res) => {};

// export const deleteContact = (req, res) => {};

export const createResponse = async (req, res) => {
  const result = await Response.create(req.body);
  res.status(201, 'Response create').json(result);
};

// export const updateContact = (req, res) => {};
