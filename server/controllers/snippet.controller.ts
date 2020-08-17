import { Request, Response } from 'express';
import Snippet from '../models/snippet.model';

interface SnippetRequestBodyInterface {
    title: string;
    sourceCode: string;
    language: string;
}

// @route   POST api/snippets
// @desc     Get all snippets
// @access  Public
export const getAllSnippets = async (_req: Request, res: Response): Promise<void> => {
    try {
        res.status(200).json(res.paginatedResults);
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
        const { title, sourceCode, language } = req.body as SnippetRequestBodyInterface;

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
