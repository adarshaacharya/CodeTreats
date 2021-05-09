import mongoose, { Document, Schema } from 'mongoose';

interface ISnippet extends Document {
    title: string;
    sourceCode: string;
    input: string;
    language: string;
    date: Date;
}

const SnippetSchema: Schema = new Schema({
    title: {
        type: String,
        required: true,
    },
    sourceCode: {
        type: String,
        required: true,
    },
    input: {
        type: String,
    },
    language: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const Snippet = mongoose.model<ISnippet>('Snippet', SnippetSchema);
export default Snippet;
