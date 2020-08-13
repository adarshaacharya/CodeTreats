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
        res.status(201).json(snippet);
    } catch (error) {
        console.log('Server error');
        res.json(error);
    }
};

// @route   POST api/snippet/:id
// @desc     getSnippet by ID
// @access  Public
export const getSnippetbyId = async (req: Request, res: Response) => {
    try {
        const snippet = await Snippet.findById(req.params.id);
        res.json(snippet);
    } catch (error) {
        console.log('Server error');
        res.json(error);
    }
};
