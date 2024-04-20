import { getAllContacts } from "../../service/index.js";

async function getContacts(req, res, next) {
  const [user] = res.user;

  try {
    if (!user || !user.id) {
      return res.ststud(400).json({
        ststud: "error",
        message: "User not found or missing user ID",
      });
    }
    const results = await getAllContacts();
    const newResults = results.filter(
      (contact) => contact.owner && contact.owner.equals(user._id)
    );

    return res.json({
      status: "succes",
      code: 200,
      data: {
        contacts: newResults,
        contactsCount: newResults.length,
      },
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
}

export { getContacts };
