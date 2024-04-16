import { getContactById } from "../../service/index.js";

async function showContacts(req, res, next) {
  const [user] = res.user;
  const { contactId } = req.params;
  try {
    const result = await getContactById(contactId, user._id);
    if (result) {
      return res.json({
        status: "success",
        code: 200,
        data: { contact: result },
      });
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
}

export { showContacts };
