import express from 'express'

import * as diaryServices from '../services/diary'
import toNewDiaryEntry from '../utils'

const diaryRouter = express.Router()

diaryRouter.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

diaryRouter.get('/:id', (req, res) => {
//   const diary = diaryServices.findById(Number(req.params.id))
  console.log(req.params.id)
  const diary = diaryServices.findById(+req.params.id)
  return (diary !== undefined)
    ? res.send(diary)
    : res.sendStatus(404)
})

diaryRouter.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)
    const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)
    res.json(addedDiaryEntry)
  } catch (error: any) {
    res.status(400).send(error.message)
  }
})

export default diaryRouter
