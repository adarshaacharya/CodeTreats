import mongoose, { Document, Schema } from 'mongoose';

interface ISnippet extends Document {
    title: string;
    sourceCode: string;
    input: string;
    language: string;
}

const SnippetSchema: Schema = new Schema({
    title: {
        type: String,
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
});

const Snippet = mongoose.model<ISnippet>('Snippet', SnippetSchema);
export default Snippet;
