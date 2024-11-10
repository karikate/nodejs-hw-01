import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  const remove = await writeContacts([]);
  return remove;
};

removeAllContacts();
