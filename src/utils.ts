import { NewDiaryEntry } from './types'
import { Visibility, Weather } from './enums'

const isString = (object: any): boolean => {
  return (typeof object === 'string' || object instanceof String)
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

const isWeather = (weather: any): boolean => {
  // undesired way
  // return ['sunny', 'rainy', 'windy', 'cloudy', 'stormy'].includes(weather)
  return Object.values(Weather).includes(weather)
}

const isvisibility = (visibility: any): boolean => {
  return Object.values(Visibility).includes(visibility)
}

const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error('Incorrect or missing comment')
  }
  return commentFromRequest
}

const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Incorrect or missing date')
  }
  return dateFromRequest
}

const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error('Incorrect or missing weather')
  }
  return weatherFromRequest
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (!isString(visibilityFromRequest) || !isvisibility(visibilityFromRequest)) {
    throw new Error('Incorrect or missing visibility')
  }
  return visibilityFromRequest
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  }
  return newEntry
}

export default toNewDiaryEntry
