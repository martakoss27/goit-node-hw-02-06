import { getAllContacts } from "../../service/index.js";

async function getContacts(req, res, next) {
  const [user] = res.user;

  try {
    const results = await getAllContacts();
    //const newResults = results.filter((contact) =>
    //contact.owner.equals(user._id)
    //);

    return res.json({
      status: "succes",
      code: 200,
      data: {
        contacts: results,
        contactsCount: results.length,
      },
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
}

export { getContacts };
