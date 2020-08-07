import Axios from 'axios';
import { Request, Response } from 'express';
import getExtension from '../utils/lang-to-extension';

export const SubmitCode = async (req: Request, res: Response) => {
    try {
        const { sourceCode, language } = req.body;
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
            files: [
                {
                    name: `main.${extension}`,
                    content: sourceCode,
                },
            ],
        };
        const output = await Axios.post(uri, data, axiosConfig);
        res.status(200).json(output.data);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ msg: 'Server error' });
    }
};
