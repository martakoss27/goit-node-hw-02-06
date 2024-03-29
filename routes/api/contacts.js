import express from "express";
import { indexContacts } from "../../controllers/contacts/indexContacts";
import { showContacts } from "../../controllers/contacts/showContacts";
import { createContacts } from "../../controllers/contacts/createContacts";
import { updateContacts } from "../../controllers/contacts/updateContacts";
import { deleteContacts } from "../../controllers/contacts/deleteContacts";

const router = express.Router();

router.get("/", indexContacts);

router.get("/:contactId", showContacts);

router.post("/", createContacts);

router.delete("/:contactId", deleteContacts);

router.put("/:contactId", updateContacts);

export { router };
