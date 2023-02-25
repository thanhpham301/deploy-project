import { data } from "./Shoes"


// export const category = ["Lifestyle", "Jordan", "Running"]
export const dataCategory = [...new Set(data.map(item => item.category))] 

// export const gender = ["Men", "Women"]
export const dataGender = [...new Set(data.map(item => item.gender))]

// export const size = [35, 35.5, 36, 36.5, 37, 37.5, 38, 38.5, 39, 40, 40.5, 41, 42]
export const dataSize = [...new Set(data.flatMap(item => item.size))] 