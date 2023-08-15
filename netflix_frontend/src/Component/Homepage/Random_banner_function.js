  import data from "./movie_data";
  const random = Math.floor(Math.random() * data.length)
 export const name1 = data[random].names
 export const video = data[random].videos
 export const description1 = data[random].description
 export let random_video = `Videos/${video}`

