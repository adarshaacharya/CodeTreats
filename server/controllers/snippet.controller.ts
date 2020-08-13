import { Request, Response } from 'express';
import Snippet from '../models/snippet.model';

// @route   POST api/snippet/save
// @desc     Save and generate shareable url
// @access  Public
export const saveSnippet = async (req: Request, res: Response) => {
    try {
        const { sourceCode, language } = req.body;

        const newSnippet = new Snippet({
            sourceCode,
            language,
        });
        const snippet = await newSnippet.save();
        res.json(snippet);
    } catch (error) {
        console.log('Server error');
        res.json(error);
    }
};
