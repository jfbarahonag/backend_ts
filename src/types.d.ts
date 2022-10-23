export type Weather = 'sunny' | 'rainy' | 'windy' | 'cloudy' | 'stormy'
export type Visibility = 'great' | 'good' | 'ok' | 'poor' | 'none'
export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}
