// import { Statistic } from '../schemas/statisticsSchemas';
import { Response } from '../schemas/responsesSchemas.js';

export const getStatistics = async (req, res) => {
  try {
    const results = await Response.aggregate([
      {
        $match: {
          reviewResult: {
            $in: [
              'На рассмотрении',
              'Проигнорировано',
              'Назначили интервью',
              'Тестовое задание',
              'Отказ',
            ],
          },
        },
      },
      {
        $group: {
          _id: '$reviewResult',
          count: { $sum: 1 },
        },
      },
    ]);

    const formattedResults = results.reduce((acc, result) => {
      acc[result._id] = result.count;
      return acc;
    }, {});

    console.log(formattedResults);
    res.json(formattedResults);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: 'An error occurred while aggregating documents.' });
  }
};
