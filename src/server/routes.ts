import * as express from 'express';
import database from './database';
import Blogs from './database/blogpost';

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});

router.get('/api/Blogs', async (req, res) => {
   try{
       // database.Jeoffrey.all
       let review = await database.Blogs.all();
       res.json(review)
   } catch(e) {
       console.log(e);
       res.sendStatus(500);
   }
})

export default router;