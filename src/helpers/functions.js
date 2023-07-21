// Calculate the difference in hours two date Objects.
export function hoursDiff(dt2, dt1) {
  var diff = (dt2.getTime() - dt1.getTime()) / 1000
  diff /= 60 * 60
  return Math.abs(Math.round(diff))
}

export function capitalizeSentence(string) {
  return string
    .toLowerCase()
    .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())
}
