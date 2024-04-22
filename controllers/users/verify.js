import { getUserByVerToken, updateUser } from "../../service/index.js";

async function verify(req, res, next) {
  const { verificationToken } = req.params;
  const user = await getUserByVerToken(verificationToken);

  const fieldsToUpdate = {
    verify: true,
    verificationToken: null,
  };

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  try {
    const id = user._id;

    await updateUser(id, fieldsToUpdate);

    return res.status(200).json({
      message: `Verification successful. User #${user.email} - verified`,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
}

export { verify };
