// import Joi from "joi";

// export const createContactSchema = Joi.object({

// })

// export const updateContactSchema = Joi.object({

// })
import mongoose from 'mongoose';
import Joi from 'joi';

import { mongooseError } from '../helpers/mongooseError.js';

const { Schema, model } = mongoose;

const responseSchema = new Schema(
  {
    date: {
      type: String,
      require: [true, 'Set date'],
    },
    nameCompany: {
      type: String,
      require: [true, 'Set name company'],
    },
    link: {
      type: String,
      require: [true, 'Set link vacancy'],
    },
    reviewResult: {
      type: String,
      require: [true, 'Select result'],
    },
    interview: {
      type: String,
      require: [true, 'Add interview stage'],
    },
  },
  { versionKey: false }
);
responseSchema.post('save', mongooseError);

export const createResponseSchema = Joi.object({
  date: Joi.date().required(),
  nameCompany: Joi.string().required(),
  link: Joi.string().required(),
  reviewResult: Joi.string().required(),
  interview: Joi.string().required(),
});

export const Response = model('response', responseSchema);
