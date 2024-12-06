import express from 'express'
import {
   getAllBarang,
   getBarangById,
   addBarang,
   updateBarang,
   deleteBarang
} from '../controllers/barang_controllers.js'

import {authorize} from '../controllers/auth_controllers.js'
import {IsAdmin,} from '../middleware/role_validation.js'

const app = express()


app.get('/',  getAllBarang)
app.get('/:id', getBarangById)
app.post('/', authorize, [IsAdmin], addBarang)
app.put('/:id', updateBarang)
app.delete('/:id', deleteBarang)

export default app