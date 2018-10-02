const initialState =[
  { id: 0, breed: "affenpinscher", imgurl: "https://www.dogfocus.co.uk/imgs/dogfocus/breeds/affenpinscher_5094.jpg" },
  { id: 1, breed: "snauzer", imgurl: "https://images.dog.ceo/breeds/schnauzer-miniature/n02097047_1392.jpg" },
  { id: 2, breed: "doberman", imgurl: "https://images.dog.ceo/breeds/doberman/n02107142_788.jpg" },
  { id: 3, breed: "pinscher", imgurl: "https://images.dog.ceo/breeds/pinscher-miniature/n02107312_6926.jpg" },
  { id: 4, breed: "husky", imgurl: "https://images.dog.ceo/breeds/husky/n02110185_4133.jpg" },
]


const dogData = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DOGS":
     return [...state, action.payload]
  default:
    return state
  }
}

export default dogData