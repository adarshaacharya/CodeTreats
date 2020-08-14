import { Request, Response } from 'express';
import Snippet from '../models/snippet.model';

// @route   POST api/snippets
// @desc     Get all snippets
// @access  Public
export const getAllSnippets = async (_req: Request, res: Response): Promise<void> => {
    try {
        const snippets = await Snippet.find().sort({ date: -1 });
        res.status(200).json(snippets);
    } catch (error) {
        console.log(error);
        res.status(500).send('Server error');
    }
};

// @route   POST api/snippets/:id
// @desc     getSnippet by ID
// @access  Public
export const getSnippetbyId = async (req: Request, res: Response): Promise<void> => {
    try {
        const snippet = await Snippet.findById(req.params.id);
        res.json(snippet);
    } catch (error) {
        console.log('Server error');
        res.status(500).json(error);
    }
};

// @route   POST api/snippets
// @desc     Save and generate shareable url
// @access  Public
export const saveSnippet = async (req: Request, res: Response): Promise<void> => {
    try {
        const { title, sourceCode, language } = req.body;

        const newSnippet = new Snippet({
            title,
            sourceCode,
            language,
        });
        const snippet = await newSnippet.save();
        res.status(201).json(snippet);
    } catch (error) {
        console.log('Server error');
        res.status(500).json(error);
    }
};
