import { Request, Response, NextFunction } from 'express';

const paginate = (model : any) =>
 async (req: Request, res: Response, next: NextFunction)  
 => {
    const page = parseInt(req.params.page);
    const limit = parseInt(req.params.limit);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {
        next: {},
        previous: {},
        results: [],
    };

    if (endIndex < (await model.countDocuments().exec())) {
        results.next = {
            page: page + 1,
            limit,
        };
    }

    if (startIndex > 0) {
        results.previous = {
            page: page - 1,
            limit,
        };
    }
    try {
        results.results = await model.find().limit(limit).skip(startIndex).exec();
        res.results = results;
        next();
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    };
};

module.exports = paginate;
