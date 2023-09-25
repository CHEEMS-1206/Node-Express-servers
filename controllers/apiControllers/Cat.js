// Controllers for Cats '/' after URL => http://localhost:5000/cat

// importing model for rabbit
import catModel from "../../models/Cats.js";

// getting a particular cat from the database by the given id
export const getCat = async (req, res) => {
  try {
    const query = await catModel.findById(req.params.id);
    if (query) {
      res.status(200).json(query);
    } else {
      res.status(400).json({
        msg: "No cat found with this id !",
      });
    }
  } catch (e) {
    res.status(400).json({ msg: e });
  }
};

// getting list of all cats in the database
export const getAllCats = async (req, res) => {
  try {
    const query = await catModel.find();
    if (query) {
      res.status(200).json(query);
    } else {
      res.status(400).json({
        msg: "Oops No Cat available for sale !",
      });
    }
  } catch (e) {
    res.status(400).json({ msg: e });
  }
};

// Adding a new cat in the database
export const postCat = async (req, res) => {
  const newCat = new catModel({
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
    const addingNewCat = await newCat.save();
    res.status(200).json(newCat);
  } catch (e) {
    res.status(400).json({ msg: e });
  }
};

// updating details for the cat in the database with the id
export const updateCat = async (req, res) => {
  try {
    const query = await catModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    if (!query) {
      res.status(400).json({ msg: "No cat exists with this id !!" });
    } else {
      res.status(200).json(query);
    }
  } catch (err) {
    res.status(400).json({ msg: err });
  }
};

// deleting cat from the database with the given id
export const deleteCat = async (req, res) => {
  try {
    const query = await catModel.findByIdAndDelete(req.params.id);
    if (!query) {
      res.status(400).json({ msg: "No cat exists with this id !!" });
    } else {
      res.status(200).json(query);
    }
  } catch (err) {
    res.status(400).json({ msg: err });
  }
};