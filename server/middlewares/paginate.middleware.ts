import { NextFunction, Request, Response } from 'express';

const paginate = (model: any) => async (req: Request, res: Response, next: NextFunction) => {
    const page = parseInt(req.query.page as string); // current page no
    const limit = parseInt(req.query.limit as string); // no of items in page

    const startIndex = (page - 1) * limit; // page first item -> arr starts from 0 so (pg -1)
    const endIndex = page * limit; // page last item

    // let's attach in res.results ( declared in types)
    const results: any = {};

    if (startIndex > 0) {
        results.previous = {
            page: page - 1,
            limit: limit,
        };
    }

    const docCount = await model.countDocuments().exec(); // no of items in doc
    if (endIndex < docCount) {
        results.next = {
            page: page + 1,
            limit: limit,
        };
    }

    try {
        results.snippets = await model.find().sort({ date: -1 }).limit(limit).skip(startIndex).exec();
        res.paginatedResults = results;
        next();
    } catch (error) {
        console.log('Server error');
        res.status(500).json({ message: error.message });
    }
};

export default paginate;

// res.results format
// const paginatedResults: IResults = {
//     previous: {
//         page,
//         limit,
//     },
//     next: {
//         page,
//         limit,
//     },

//     data: [],
// };
