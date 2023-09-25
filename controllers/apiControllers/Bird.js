// Controllers for Birds '/' after URL => http://localhost:5000/bird

// importing model for bird
import birdModel from "../../models/Birds.js";

// getting a particular bird from the database by the given id
export const getBird = async (req, res) => {
  try {
    const query = await birdModel.findById(req.params.id);
    if (query) {
      res.status(200).json(query);
    } else {
      res.status(400).json({
        msg: "No bird found with this id !",
      });
    }
  } catch (e) {
    res.status(400).json({ msg: e });
  }
};

// getting list of all birds in the database
export const getAllBirds = async (req, res) => {
  try {
    const query = await birdModel.find();
    if (query) {
      res.status(200).json(query);
    } else {
      res.status(400).json({
        msg: "Oops No Bird available for sale !",
      });
    }
  } catch (e) {
    res.status(400).json({ msg: e });
  }
};

// Adding a new bird in the database
export const postBird = async (req, res) => {
  const newBird = new birdModel({
    petName: req.body.petName,
    petNickName: req.body.petNickName,
    petAge: req.body.petAge,
    petGender: req.body.petGender,
    petImage: req.body.petImage,
    petPrice: req.body.petPrice,
    petId: req.body.petId,
    petBio: req.body.petBio,
    petBreed: req.body.petBreed,
    petPrevOwner: req.body.petPrevOwner,
  });
  try {
    const addingNewBird = await newBird.save();
    res.status(200).json(newBird);
  } catch (e) {
    res.status(400).json({ msg: e });
  }
};

// updating details for the bird in the database with the id
export const updateBird = async (req, res) => {
  try {
    const query = await birdModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    if (!query) {
      res.status(400).json({ msg: "No bird exists with this id !!" });
    } else {
      res.status(200).json(query);
    }
  } catch (err) {
    res.status(400).json({ msg: err });
  }
};

// deleting bird from the database with the given id
export const deleteBird = async (req, res) => {
  try {
    const query = await birdModel.findByIdAndDelete(req.params.id);
    if (!query) {
      res.status(400).json({ msg: "No bird exists with this id !!" });
    } else {
      res.status(200).json(query);
    }
  } catch (err) {
    res.status(400).json({ msg: err });
  }
};
