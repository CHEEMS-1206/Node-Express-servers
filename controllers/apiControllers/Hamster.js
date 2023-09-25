// Controllers for Hamster '/' after URL => http://localhost:5000/hamster

// importing model for hamster
import hamsterModel from "../../models/Hamster.js";

// getting a particular hamster from the database by the given id
export const getHamster = async (req, res) => {
  try {
    const query = await hamsterModel.findById(req.params.id);
    if (query) {
      res.status(200).json(query);
    } else {
      res.status(400).json({
        msg: "No Hamster found with this id !",
      });
    }
  } catch (e) {
    res.status(400).json({ msg: e });
  }
};

// getting list of all hamsters in the database
export const getAllHamsters = async (req, res) => {
  try {
    const query = await hamsterModel.find();
    if (query) {
      res.status(200).json(query);
    } else {
      res.status(400).json({
        msg: "Oops No Hamster available for sale !",
      });
    }
  } catch (e) {
    res.status(400).json({ msg: e });
  }
};

// Adding a new hamster in the database
export const postHamster = async (req, res) => {
  const newHamster = new hamsterModel({
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
    const addingNewHamster = await newHamster.save();
    res.status(200).json(newHamster);
  } catch (e) {
    res.status(400).json({ msg: e });
  }
};

// updating details for the hamster in the database with the id
export const updateHamster = async (req, res) => {
  try {
    const query = await hamsterModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    if (!query) {
      res.status(400).json({ msg: "No Hamster exists with this id !!" });
    } else {
      res.status(200).json(query);
    }
  } catch (err) {
    res.status(400).json({ msg: err });
  }
};

// deleting hamster from the database with the given id
export const deleteHamster = async (req, res) => {
  try {
    const query = await hamsterModel.findByIdAndDelete(req.params.id);
    if (!query) {
      res.status(400).json({ msg: "No Hamster exists with this id !!" });
    } else {
      res.status(200).json(query);
    }
  } catch (err) {
    res.status(400).json({ msg: err });
  }
};
