import type CITIES from '@/shared/constants/cities'

export const getCityByJceUrl = (
  url: string,
): (typeof CITIES)[keyof typeof CITIES] => {
  // Not a schedule URL means JCE API service
  // JCE API url always starts with https://sms.(city).nis.edu.kz/...
  // this method will return the city (NIS filial) abbreviation (like ura, atr, pvl, etc.)

  return url.split('.')[1]!
}

export const getCityByScheduleUrl = (url: string): keyof typeof CITIES => {
  // Schedule URL always starts with https://schedule.micros.nis.edu.kz/(city)/...
  // this method will return the city (NIS filial) full name (like Uralsk, Astana_FMSH, Pavlodar, etc.)

  return url.split('/')[3]!
}
