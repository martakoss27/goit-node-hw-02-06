import { createUser, getUserByEmail } from "../../service/index.js";
import { schema } from "../../validation/validation.js";

async function signUp(req, res, next) {
  const { email, password } = req.body;
  const user = await getUserByEmail(email);

  if (user) {
    return res.status(409).json({ message: "Email in use" });
  }

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  try {
    const result = await createUser({ email, password });

    return res.status(201).json({
      user: {
        email: result.email,
        subscription: result.subscription,
      },
    });
  } catch (e) {
    console.error(e);
    next(e);
  }
}

export { signUp };
