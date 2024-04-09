import express from "express";
import { getContacts } from "../../controllers/contacts/getContacts.js";
import { showContacts } from "../../controllers/contacts/showContacts.js";
import { createContacts } from "../../controllers/contacts/createContacts.js";
import { updateContacts } from "../../controllers/contacts/updateContacts.js";
import { deleteContacts } from "../../controllers/contacts/deleteContacts.js";
import { updateStatus } from "../../controllers/contacts/updateStatus.js";

const router = express.Router();

router.get("/", getContacts);

router.get("/:contactId", showContacts);

router.post("/", createContacts);

router.delete("/:contactId", deleteContacts);

router.put("/:contactId", updateContacts);

router.patch("/:contactId/status", updateStatus);

export { router };
