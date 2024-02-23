
import Router from 'express';
import { getUserDelete, getUserGet, getUserPatch, getUserPost, getUserPut } from '../controllers/users.controler.js';

export const router = Router();


router.get('/', getUserGet);
router.post('/', getUserPost)
router.put('/:id', getUserPut);
router.patch('/', getUserPatch);
router.delete('/', getUserDelete);



// router.put('/', (req, res) => {
//     res.status(403).json(
//         {
//             "ok": true,
//             "msg": "Put API"
//         }
//     );

// });

// router.post('/', (req, res) => {
//     res.status(403).json(
//         {
//             "ok": true,
//             "msg": "Post API"
//         }
//     );

// });

// router.patch('/', (req, res) => {
//     res.status(403).json(
//         {
//             "ok": true,
//             "msg": "Delete API"
//         }
//     );

// });