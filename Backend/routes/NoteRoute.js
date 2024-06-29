import express, { Router } from 'express'
import addNote from '../controler/addNote.js'
import findNote from '../controler/findNote.js'
import deleteNote from '../controler/deleteNote.js'
import editNote from '../controler/editNote.js'
const router = express.Router()
router.get('/find/:id',findNote)
router.post('/add',addNote)
router.delete("/delete/:id",deleteNote)
router.post('/edit',editNote)
export default router;