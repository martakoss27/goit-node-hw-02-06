import path from "path";
import fs from "fs/promises";
import { uuid } from "uuidv4";

import { getUserById } from "../../service/index.js";
import { updateUser } from "../../service/index.js";
import { uploadDir } from "../../multer/multerConfig.js";
import { checkImageAndTransform } from "../../middlewares/uploadMiddleware.js";

async function updateUserAvatar(req, res, next) {
  if (res.user.length === 0) {
    return res.status(401).json({ message: "Not authorized" });
  }

  if (!req.file) {
    return res.status(400).json({ message: "File isn't a photo" });
  }

  const id = res.user[0]._id;
  const [user] = await getUserById(id);

  const { path: temporaryPath } = req.file;
  const extension = path.extname(temporaryPath);
  const fileName = `${uuid()}_${user.email}${extension}`;
  const filePath = path.join(uploadDir, fileName);

  try {
    await fs.rename(temporaryPath, filePath);
  } catch (e) {
    await fs.unlink(temporaryPath);
    return next(e);
  }

  const isValidAndTransform = await checkImageAndTransform(filePath);
  if (!isValidAndTransform) {
    await fs.unlink(filePath);
    return res
      .status(400)
      .json({ message: "File isnt a photo but is pretending" });
  }

  await updateUser(id, { avatarURL: fileName });

  res.status(200).json({
    message: `File load successfuly. Press to see your new beautiful avatar: /${fileName}`,
  });
}

export { updateUserAvatar };
