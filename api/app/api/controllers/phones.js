const phones = require("../../data/phones.json");

exports.getAll = (req, res, next) => {
  res.status(200).json(phones);
};

exports.get = (req, res, next) => {
  const id = req.params.id;

  const phone = phones.find((e) => e.id == id);

  res.status(200).json(phone);
};
