import PouchDB from 'pouchdb';
import PouchDBFind from 'pouchdb-find';

PouchDB.plugin(PouchDBFind);

export const db = new PouchDB('students');

export async function saveToDatabase(data) {
    try {
        await db.post(data);
    } catch (error) {
        console.error(error);
    }
}
