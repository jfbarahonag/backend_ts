import { Visibility, Weather } from './enums'
// export type Weather = 'sunny' | 'rainy' | 'windy' | 'cloudy' | 'stormy'
// export type Visibility = 'great' | 'good' | 'ok' | 'poor' | 'none'

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

// export type NonSensitiveInfoDiaryEntry = Pick< DiaryEntry, 'id' | 'date' | 'weather' | 'visibility' >

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>
export type NewDiaryEntry = Omit<DiaryEntry, 'id'>
