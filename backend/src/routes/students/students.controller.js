import { Router } from 'express';
import { db } from '../../repositories/couchdb.js';

const router = Router();

function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
}

router.get('/students', async (req, res) => {
  try {
      const result = await db.find({
        selector: {
            name: { $exists: true }
        },
        fields: ['name']
      });
      const names = result?.docs?.map(doc => doc.name)?.filter(onlyUnique);
      res.json(names);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error' });
  }
});

export default router;