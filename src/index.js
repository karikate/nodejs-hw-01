import { readContacts } from './utils/readContacts.js';
import { writeContacts } from './utils/writeContacts.js';

async function main() {
  await readContacts();
  await writeContacts();
}

main().catch((error) => console.error(error));
