import { NextFunction, Request, Response } from 'express';

interface IResults {
    next: {
        page: number;
        limit: number;
    };
    previous: {
        page: number;
        limit: number;
    };
    data: any[];
}

const paginate = (model: any) => async (req: Request, res: Response, next: NextFunction) => {
    const page = parseInt(req.query.page as string); // page no
    const limit = parseInt(req.query.limit as string); // no of items in page
console.log(page, limit)
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results: IResults = {
        next: {
            page,
            limit,
        },
        previous: {
            page,
            limit,
        },
        data: [],
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
        results.data = await model.find().limit(limit).skip(startIndex).exec();

        res.results = results;
        next();
    } catch (error) {
        console.log('Server error');
        res.status(500).json({ message: error.message });
    }
};

export default paginate;
