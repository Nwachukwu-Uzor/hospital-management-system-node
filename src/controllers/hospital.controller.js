import bcrypt from "bcrypt";
import { Hospital } from "../models/";

const ROUNDS = 10;

const createHospital = async (req, res) => {
  try {
    const { name, email, password, headOfAddress, phoneNumber } = req.body;
    const hashedPassword = await bcrypt.hash(password, ROUNDS);

    const newHospitalDetails = {
      name,
      email,
      headOfAddress,
      phoneNumber,
      password: hashedPassword,
    };

    const createdHospital = await Hospital.create(newHospitalDetails);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
