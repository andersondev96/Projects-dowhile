import mongoose from 'mongoose';

mongoose.connect('mongo "mongodb+srv://cluster0.hcz9t.mongodb.net/test" --username andersondb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})