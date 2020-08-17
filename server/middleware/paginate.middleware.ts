import { Request, Response, NextFunction } from 'express';

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
    const page = parseInt(req.params.page); // page no
    const limit = parseInt(req.params.limit); // no of items in page

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

        res.result = results;
        next();
    } catch (error) {
        console.log('Server error');
        res.status(500).json({ message: error.message });
    }
};

module.exports = paginate;
