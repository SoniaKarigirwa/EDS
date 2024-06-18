import Joi from "joi";
import { errorResponse } from "../utils/api.response.js";

export async function validateEmployeeRegistration(req, res, next) {
  try {
    const schema = Joi.object({
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      nationalIdentity: Joi.number().min(16).required(),
      telephone: Joi.string().min(10).required(),
      email: Joi.string().email().required(),
      department: Joi.string().required(),
      position: Joi.string().required(),
      laptopManufacturer: Joi.string().required(),
      laptopModel: Joi.string().required(),
      serialNumber: Joi.string().required(),
    });

    const { error } = schema.validate(req.body);
    if (error) return errorResponse(error.message, res);

    return next();
  } catch (ex) {
    return errorResponse(ex.message, res);
  }
}
