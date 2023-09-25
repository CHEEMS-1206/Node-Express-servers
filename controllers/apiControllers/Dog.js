// Controllers for Dogs '/' after URL => http://localhost:5000/dog

// importing model for dog
import dogModel from "../../models/Dogs.js";

// getting a particular rabbit from the database by the given id
export const getDog = async (req, res) => {
  try {
    const query = await dogModel.findById(req.params.id);
    if (query) {
      res.status(200).json(query);
    } else {
      res.status(400).json({
        msg: "No dog found with this id !",
      });
    }
  } catch (e) {
    res.status(400).json({ msg: e });
  }
};

// getting list of all dogs in the database
export const getAllDogs = async (req, res) => {
  try {
    const query = await dogModel.find();
    if (query) {
      res.status(200).json(query);
    } else {
      res.status(400).json({
        msg: "Oops No Dog available for sale !",
      });
    }
  } catch (e) {
    res.status(400).json({ msg: e });
  }
};

// Adding a new dog in the database
export const postDog = async (req, res) => {
  const newDog = new dogModel({
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
    const addingNewDog = await newDog.save();
    res.status(200).json(newDog);
  } catch (e) {
    res.status(400).json({ msg: e });
  }
};

// updating details for the dog in the database with the id
export const updateDog = async (req, res) => {
  try {
    const query = await dogModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    if (!query) {
      res.status(400).json({ msg: "No dog exists with this id !!" });
    } else {
      res.status(200).json(query);
    }
  } catch (err) {
    res.status(400).json({ msg: err });
  }
};

// deleting dog from the database with the given id
export const deleteDog = async (req, res) => {
  try {
    const query = await dogModel.findByIdAndDelete(req.params.id);
    if (!query) {
      res.status(400).json({ msg: "No dog exists with this id !!" });
    } else {
      res.status(200).json(query);
    }
  } catch (err) {
    res.status(400).json({ msg: err });
  }
};