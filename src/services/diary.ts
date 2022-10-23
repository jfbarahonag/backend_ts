import { DiaryEntry, NonSensitiveInfoDiaryEntry, Visibility, Weather } from '../types'
import diaryData from './diaries.json'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find(d => d.id === id)
  if (entry !== undefined) {
    const { comment, ...restOfDiary } = entry
    return restOfDiary
  }
  return undefined
}

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => diaries.map(({ id, date, weather, visibility }) => {
  return {
    id,
    date,
    weather,
    visibility
  }
})

export const addDiary = (date: string, weather: Weather, visibility: Visibility, comment: string): DiaryEntry => {
  const newDiaryEntry = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
    date,
    weather,
    visibility,
    comment
  }
  diaries.push(newDiaryEntry)
  return newDiaryEntry
}
