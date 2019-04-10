const express = require('express');
const router = express.Router();

const Contact = require('../models/contacts');

//retrieving contacts
router.get('/contacts', (req, res, next) => {
  Contact.find(function(err, contacts) {
    res.json(contacts);
    //all data will be saved in contacts variable
  })
});

// add contact
router.post('/contact', (req, res, next) => {
  console.log(req.body);
  let newContact = new Contact({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    phone: req.body.phone
  });

  newContact.save((err, contact) => {
    console.log(contact)
    if(err) {
      console.log(err)
      res.json({
        msg: 'Failed to add contact'
      });
    } else {
      res.json({
        msg: 'contact added successfully'
      });
    }
  })
});

//delete contact
router.delete('/contact/:id', (req, res, next) => {
  Contact.deleteOne({_id: req.params.id}, function(err, result) {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router; 