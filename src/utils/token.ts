export const setItem = (key: any, value: any): void => {
  localStorage.setItem(key, value)
}
export const getItem = (key: string): any => {
  return localStorage.getItem(key)
}
export const removeItem = (key: string): void => {
  localStorage.removeItem(key)
}
