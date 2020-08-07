import Axios from 'axios';
import { Request, Response } from 'express';

export const SubmitCode = async (req: Request, res: Response) => {
    try {
        const { sourceCode } = req.body;
        const uri = `https://run.glot.io/languages/python/latest/`;

        const axiosConfig = {
            headers: {
                'user-agent': 'node.js',
                Authorization: `Token ${process.env.GLOT_TOKEN}`,
                'Content-type': 'application/json',
            },
        };
        const attributes = {
            files: [
                {
                    name: `main.py`,
                    content: sourceCode,
                },
            ],
        };
        const output = await Axios.post(uri, attributes, axiosConfig);
        res.status(200).send(output.data)
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ msg: 'Server error' });
    }
};
