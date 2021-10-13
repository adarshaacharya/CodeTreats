import Axios from 'axios';
import { Request, Response } from 'express';
import getExtension from '../utils/lang-to-extension';

// @route   POST api/code/submit
// @desc     Submit code from user
// @access  Public
export const SubmitCode = async (req: Request, res: Response): Promise<void> => {
    try {
        const { userInput, sourceCode, language } = req.body;
        const extension = getExtension(language);
        const uri = `https://run.glot.io/languages/${language}/latest/`;

        const axiosConfig = {
            headers: {
                'user-agent': 'node.js',
                Authorization: `Token ${process.env.GLOT_TOKEN}`,
                'Content-type': 'application/json',
            },
        };
        const data = {
            stdin: userInput,
            files: [
                {
                    name: `main.${extension}`,
                    content: sourceCode,
                },
            ],
        };
        const output = await Axios.post(uri, data, axiosConfig);
        res.status(201).json(output.data);
    } catch (err) {
        // @ts-ignore
        console.log(err.message);
        res.status(500).json({ msg: 'Server error' });
    }
};
