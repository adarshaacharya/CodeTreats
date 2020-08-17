import mongoose from 'mongoose';

async function connectDB() {
    const MONGO_URI = process.env.DATABASE_URI as string;
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        });
        console.log('✅  Connected to database successfully.');
    } catch (error) {
        console.log(`❌ Error on database Connection:${error}`);
        process.exit(1);
    }
}

export default connectDB;
