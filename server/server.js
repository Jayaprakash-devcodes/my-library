const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

mongoose.connect('mongodb://localhost:27017/demodb', { useNewUrlParser: true, useUnifiedTopology: true });

const UserSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const UserModel = mongoose.model('users', UserSchema);

app.use(bodyParser.json());

app.post('/submitData', (req, res) => {
    // console.log("Name: " + req.body.name);
    // console.log("Age: " + req.body.age);
    
    const data = {
        name: req.body.name,
        age: req.body.age
    };

    UserModel.create(data)
    .then(() => {
        res.send({ success: true, message: 'User created successfully' });
    })
    .catch(err => {
        console.error(err);
        res.status(500).send({ success: false, message: 'Error creating user' });
    });
});

app.get('/api', (req, res) => {
    UserModel.find({})
        .then(users => res.json(users))
        .catch(err => res.status(400).send(err));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
