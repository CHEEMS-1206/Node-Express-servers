// Controllers for home '/' after URL => http://localhost:5000
import dogModel from '../models/Dogs.js'
import catModel from '../models/Cats.js'
import birdModel from '../models/Birds.js'
import fishModel from '../models/Fishes.js'
import hamsterModel from '../models/Hamster.js'
import rabbitModel from '../models/Rabbit.js'

export const hitHome = (req, res) => {
  res.send("Welcome to PET SHOP ...");
};

export const listAllPets = async (req, res) => {
  try {
    let query = [];
    query[0] = await dogModel.find();
    query[1] = await catModel.find();
    query[2] = await birdModel.find();
    query[3] = await fishModel.find();
    query[4] = await hamsterModel.find();
    query[5] = await rabbitModel.find();

    if (query) {
      res.status(200).json(query);
      // console.log(query)
    } else {
      res.status(400).json({
        msg: "Oops No Dog available for sale !",
      });
    }
  } catch (e) {
    res.status(400).json({ msg: e });
  }
};

export const postHome = (req, res) => {
  res.send("Invalid Request !");
};

export const updateHome = (req, res) => {
  res.send("Invalid Request !");
};

export const deleteHome = (req, res) => {
  res.send("Invalid Request !");
};
