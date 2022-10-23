import express from 'express'

import * as diaryServices from '../services/diary'

const diaryRouter = express.Router()

diaryRouter.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

diaryRouter.post('/', (_req, res) => {
  res.send('Saving a diary')
})

export default diaryRouter
