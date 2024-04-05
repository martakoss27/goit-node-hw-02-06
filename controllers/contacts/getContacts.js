import { listContacts } from "../../models/contacts.js";

async function getContacts(req, res, next) {
  try {
    const contacts = await listContacts();

    res.status(200).json({ contacts, itemCount: contacts.length });
  } catch (error) {
    next(new Error(`An error occured: ${error}`));
  }
}

export { getContacts };
