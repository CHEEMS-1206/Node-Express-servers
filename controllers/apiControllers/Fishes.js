// Controllers for Fish '/' after URL => http://localhost:5000/fish

// importing model for fish
import fishModel from "../../models/Fishes.js";

// getting a particular fish from the database by the given id
export const getFish = async (req, res) => {
  try {
    const query = await fishModel.findById(req.params.id);
    if (query) {
      res.status(200).json(query);
    } else {
      res.status(400).json({
        msg: "No Fish found with this id !",
      });
    }
  } catch (e) {
    res.status(400).json({ msg: e });
  }
};

// getting list of all fishs in the database
export const getAllFishes = async (req, res) => {
  try {
    const query = await fishModel.find();
    if (query) {
      res.status(200).json(query);
    } else {
      res.status(400).json({
        msg: "Oops No Fish available for sale !",
      });
    }
  } catch (e) {
    res.status(400).json({ msg: e });
  }
};

// Adding a new fish in the database
export const postFish = async (req, res) => {
  const newFish = new fishModel({
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
    const addingNewFish = await newFish.save();
    res.status(200).json(newFish);
  } catch (e) {
    res.status(400).json({ msg: e });
  }
};

// updating details for the fish in the database with the id
export const updateFish = async (req, res) => {
  try {
    const query = await fishModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    if (!query) {
      res.status(400).json({ msg: "No fish exists with this id !!" });
    } else {
      res.status(200).json(query);
    }
  } catch (err) {
    res.status(400).json({ msg: err });
  }
};

// deleting fish from the database with the given id
export const deleteFish = async (req, res) => {
  try {
    const query = await fishModel.findByIdAndDelete(req.params.id);
    if (!query) {
      res.status(400).json({ msg: "No fish exists with this id !!" });
    } else {
      res.status(200).json(query);
    }
  } catch (err) {
    res.status(400).json({ msg: err });
  }
};