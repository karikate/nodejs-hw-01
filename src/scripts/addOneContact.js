import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const currentContacts = await readContacts();
  const newCont = [createFakeContact()];
  const updatedContacts = [...currentContacts, ...newCont];
  await writeContacts(updatedContacts);
};

addOneContact();
