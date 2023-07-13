import { Router, Request, Response } from "express";
import { check, validationResult } from "express-validator";
import dbData from "../../dbData/data.json";
import timeOut from "../../middleware/timeOut.middleware";
import { formData } from "../../../frontend/src/types";
const router = Router();

router.post(
  "/",
  timeOut,
  [
    check("email", "Incorrect Email address").isEmail(),
    check("number", "incorrect password length")
      .optional({ checkFalsy: true })
      .matches(/^\d{2}-\d{2}-\d{2}/),
  ],
  async (req: Request, res: Response) => {
    try {
      const validErrors = validationResult(req);
      console.log(validErrors);
      if (!validErrors.isEmpty()) {
        return res.status(400).json({
          errors: validErrors.array(),
          message: "Incorrect submitted data",
        });
      }
      const { email, number }: formData = req.body;
      console.log("VALIDATION OK", email, number);
      const result = dbData.filter(function (el) {
        if (number) {
          const normNum = number.replace(/-/g, "");
          return (
            el.email.indexOf(email) > -1 && el.number.indexOf(normNum) > -1
          );
        } else {
          return el.email.indexOf(email) > -1;
        }
      });
      return res.status(200).json({ result });
    } catch (e) {
      return res.status(500).json({ message: "What`s wrong, try again" });
    }
  }
);

export default router;
