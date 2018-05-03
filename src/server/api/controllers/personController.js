const Person = require('../models/personModel');

module.exports = {

  index: async (req, res, next) => {
    let docs = await Person.find({});
    res.status(200).json(docs);
  },

  add: async (req, res, next) => {
    let data = new Person(req.body);
    let doc = await data.save();
    res.status(200).json(doc);
  },

  getOne: async (req, res, next) => {
    let {id} = req.params;
    let doc = await Person.findById(id);
    res.status(200).json(doc);
  },

  replace: async (req, res, next) => {
    let {id} = req.params;
    let data = req.body;
    let oldData = await Person.findByIdAndUpdate(id, data);
    res.status(200).json({success: true});
  },

  update: async (req, res, next) => {
    let {id} = req.params;
    let data = req.body;
    let oldData = await Person.findByIdAndUpdate(id, data);
    res.status(200).json({success: true});
  },

  remove: async (req, res, next) => {
    let {id} = req.params;
    await Person.findByIdAndRemove(id);
    res.status(200).json({success: true});
  }
};
