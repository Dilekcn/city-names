const router = require("express").Router();

const CityName = require("../models/city.model");

router.route("/").get((req, res) => {
  CityName.find()
    .then((names) => res.json(names[Math.floor(Math.random() * names.length)]))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/add").post((req, res) => {
  const cityname = req.body.cityname;

  const newCityName = new CityName({
    cityname,
  });
  newCityName
    .save()
    .then(() => res.json("City Name added!!!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
