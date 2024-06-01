import mongoose from 'mongoose';
import Joi from 'joi';

import { MongooseError } from 'mongoose';
import { mongooseError } from '../helpers/mongooseError';

const { Schema, model } = mongoose;

const statisticsSchema = new Schema(
  {
    allResponse: {
      type: String,
    },
    pending: {
      type: String,
    },
    ignored: {
      type: String,
    },
    PassedInterview: {
      type: String,
    },
    testTask: {
      type: String,
    },
    failure: {
      type: String,
    },
  },
  { versionKey: false }
);

statisticsSchema.post('save', mongooseError);

export const Statistic = model('statistic', statisticsSchema);
