const mongoose = require('mongoose');

if (process.argv.length < 3) {
    console.log('give password as argument')
    process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3];
const number = process.argv[4];

const url =
    `mongodb+srv://readwrite:${password}@fullstack2019-ghhdf.mongodb.net/test?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const contactSchema = new mongoose.Schema({
    name: String,
    number: String    
})

const Contact = mongoose.model('Contact', contactSchema)

if(!name) {
    Contact.find({}).then(result => {
        console.log('phonebook:')
        result.forEach(contact => {
            console.log(`${contact.name} ${contact.number}`)
        })
        mongoose.connection.close();
        process.exit(0);
    })
}

const contact = new Contact({
    name,
    number
})

contact.save().then(response => {
    console.log(`added ${response.name} number ${response.number} to phonebook`);
    mongoose.connection.close();
})