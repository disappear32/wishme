declare module '*.vue'

// declare interface ListOfWishes {
//     name: string,
//     description: string,
//     date: string,
//     url: string,
//   }

declare interface IListofWishlists {
    name: String, 
    description: String,
    date: String,
    totalGifts: Number
}

declare interface IGift {
    name: String, 
    description: String,
    price: String,
    status: 'active' | 'booked' | 'closed',
    isPinned: Boolean,
    url: String
}
