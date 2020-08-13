import { Request, Response } from 'express';

// @route   POST api/snippet/save
// @desc     Save and generate shareable url
// @access  Public
export const saveSnippet = async (req: Request, res: Response) => {
    res.json('save snippet');
};
