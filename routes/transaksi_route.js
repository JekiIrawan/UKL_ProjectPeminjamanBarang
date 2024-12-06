import express from 'express'
import {
   getAllPeminjaman,
   getPeminjamanById,
   addPeminjaman,
   pengembalianBarang,
   getUsageAnalysis,
   analyzeItems
} from '../controllers/transaksi_controllers.js'
import { authorize } from '../controllers/auth_controllers.js'
import { IsAdmin, IsMember } from '../middleware/role_validation.js'

// import {authorize} from '../controllers/auth_controllers.js'
// import {IsMember, IsAdmin} from '../middleware/role_validation.js'

const app = express()


app.get('/borrow', getAllPeminjaman)
app.get('/borrow/:id', getPeminjamanById)
app.post('/borrow', authorize, [IsMember], addPeminjaman)
app.post('/return', authorize, [IsMember], pengembalianBarang)
app.post('/usage', getUsageAnalysis)
app.post('/analyze', analyzeItems)

export default app