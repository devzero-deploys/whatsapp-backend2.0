const mongoose = require('mongoose');
const pusherConnection = require('./pusher');

mongoose.connect('mongodb+srv://admin:wFXCc6VZ7uYnLQl8@cluster0.8kixg.mongodb.net/whatsapp?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const db = mongoose.connection;

db.once('open', () => pusherConnection(db));

module.exports = mongoose