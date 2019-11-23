require('dotenv').config();
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0-rmhkl.mongodb.net/test?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to DB!');
}).catch(err => {
    console.log('ERROR:', err.message);
});

const PostSchema = new mongoose.Schema({
    title: String,
    description: String,
});

const Post = mongoose.model("Post", PostSchema);

app.get('/', async (req, res) => {
    let post = await Post.create({title: 'Test', description: 'This is also a test'});
    res.send(post);
});

app.listen('3000', () => {
    console.log('server listening on port 3000');
});