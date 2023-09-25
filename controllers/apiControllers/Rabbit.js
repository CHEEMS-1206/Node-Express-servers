// Controllers for Rabbits '/' after URL => http://localhost:5000/rabbit

// importing model for rabbit
import rabbitModel from "../../models/Rabbit.js";

// getting a particular rabbit from the database by the given id
export const getRabbit = async (req, res) => {
  try {
    const query = await rabbitModel.findById(req.params.id);
    if (query) {
      res.status(200).json(query);
    } else {
      res.status(400).json({
        msg: "No rabbit found with this id !",
      });
    }
  } catch (e) {
    res.status(400).json({ msg: e });
  }
};

// getting list of all rabbits in the database
export const getAllRabbits = async (req, res) => {
  try {
    const query = await rabbitModel.find();
    if (query) {
      res.status(200).json(query);
    } else {
      res.status(400).json({
        msg: "Oops No Rabbit available for sale !",
      });
    }
  } catch (e) {
    res.status(400).json({ msg: e });
  }
};

// Adding a new rabbit in the database
export const postRabbit = async (req, res) => {
  const newRabbit = new rabbitModel({
    petName: req.body.petName,
    petNickName: req.body.petNickName,
    petAge: req.body.petAge,
    petGender: req.body.petGender,
    petImage : req.body.petImage,
    petPrice: req.body.petPrice,
    petId: req.body.petId,
    petBio: req.body.petBio,
    petBreed: req.body.petBreed,
    petPrevOwner: req.body.petPrevOwner,
  });
  try {
    const addingNewRabbit = await newRabbit.save();
    res.status(200).json(newRabbit);
  } catch (e) {
    res.status(400).json({ msg: e });
  }
};

// updating details for the rabbit in the database with the id
export const updateRabbit = async (req, res) => {
    try {
    const query = await rabbitModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    if (!query) {
      res.status(400).json({ msg: "No rabbit exists with this id !!" });
    } else {
      res.status(200).json(query);
    }
  } catch (err) {
    res.status(400).json({ msg: err });
  }
};

// deleting rabbit from the database with the given id
export const deleteRabbit = async (req, res) => {
  try {
    const query = await rabbitModel.findByIdAndDelete(req.params.id);
    if (!query) {
      res.status(400).json({ msg: "No rabbit exists with this id !!" });
    } else {
      res.status(200).json(query);
    }
  } catch (err) {
    res.status(400).json({ msg: err });
  }
};
