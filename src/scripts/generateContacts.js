import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const currentContacts = await readContacts();
  const newCont = [];
  for (let index = 0; index < number; index++) {
    newCont.push(createFakeContact());
  }
  const updatedContacts = [...currentContacts, ...newCont];
  await writeContacts(updatedContacts);
};

generateContacts(5);
