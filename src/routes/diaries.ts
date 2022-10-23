import express from 'express'

import * as diaryServices from '../services/diary'

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
  const { date, weather, visibility, comment } = req.body

  const newDiaryEntry = diaryServices.addDiary(
    date,
    weather,
    visibility,
    comment
  )
  res.json(newDiaryEntry)
})

export default diaryRouter
