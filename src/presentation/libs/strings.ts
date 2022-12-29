export const cutBase64Result = (fileBase64: string) => {
  return fileBase64.replace(/^data:image\/\w+;base64,/, "");
}

export const formStringDate = (date: string) => {
  const splitDate = date.split('/')
  return `${splitDate[2]}${splitDate[1]}${splitDate[0]}`
}