import { getContactById } from "../../models/contacts.js";

async function showContacts(req, res, next) {
  try {
    const { contactId } = req.params;
    const contact = await getContactById(contactId);

    if (!contact) {
      res.status(404).json({ message: "Not found" });
    } else {
      res.status(200).json(contact);
    }
  } catch (error) {
    next(new Error(`An error occured: ${error}`));
  }
}

export { showContacts };
