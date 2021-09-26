import { createSlice } from "@reduxjs/toolkit";

const designsSlice = createSlice({
    name: "designs",
    initialState: {
        products: [
            {
                "id": 1,
                "name": "Winter Jacket",
                "catId": 1,
                "category": "Men Accessories",
                "price": 20,
                "image": "jacket.png"
            },
            {
                "id": 2,
                "name": "Wrist Watch",
                "catId": 1,
                "category": "Men Accessories",
                "price": 30,
                "image": "watch.png"
            },
            {
                "id": 3,
                "name": "Wrist Band",
                "catId": 2,
                "category": "Women Accessories",
                "price": 5,
                "image": "band.png"
            },
            {
                "id": 4,
                "name": "Hand bag",
                "catId": 2,
                "category": "Women Accessories",
                "price": 20,
                "image": "bag.png"
            },
            {
                "id": 5,
                "name": "Shoes",
                "catId": 3,
                "category": "Children Accessories",
                "price": 20,
                "image": "shoes.png"
            },
            {
                "id": 6,
                "name": "Kid's Scraf",
                "catId": 3,
                "category": "Children Accessories",
                "price": 10,
                "image": "scraf.png"
            },
            {
                "id": 7,
                "name": "Soccer Ball",
                "catId": 4,
                "category": "Sports Accessories",
                "price": 20,
                "image": "soccerball.png"
            },
            {
                "id": 8,
                "name": "Base Ball",
                "catId": 4,
                "category": "Sports Accessories",
                "price": 15,
                "image": "baseball.png"
            }
        ]
    } 
})

export default designsSlice.reducer;