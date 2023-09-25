import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;

const hamsterSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: function () {
      return new ObjectId().toString();
    },
  },
  petName: {
    type: String,
    required: true,
  },
  petNickName: {
    type: String,
    required: false,
    default: "-",
  },
  petAge: {
    type: String,
    required: true,
  },
  petGender: {
    type: String,
    requyired: true,
  },
  petImage: {
    type: String,
    required: false,
    default: "",
  },
  petPrice: {
    type: Number,
    required: true,
  },
  petId: {
    type: Number,
    required: true,
  },
  petBio: {
    type: String,
    required: true,
  },
  petBreed: {
    type: String,
    required: true,
  },
  registerDate: {
    type: Date,
    default: Date.now,
  },
  petPrevOwner: {
    type: String,
    default: "None",
  },
});
const hamsterModel = mongoose.model("hamsterModel", hamsterSchema);
export default hamsterModel;
