import { createStore } from 'vuex'
const store = createStore({
    state() {
        return {
            categories: [{
                    id: '1',
                    category: "Dessert",
                    photo: '',
                    recipie: '',
                    ingredient: '',
                    note: ''
                },
                {
                    id: '2',
                    category: "Casserole",
                    photo: '',
                    recipie: '',
                    ingredient: '',
                    note: ''
                },
                {
                    id: '3',
                    category: "Drink",
                    photo: '',
                    recipie: '',
                    ingredient: '',
                    note: ''
                },
                {
                    id: '4',
                    category: "Side",
                    photo: '',
                    recipie: '',
                    ingredient: '',
                    note: ''
                },
                {
                    id: '5',
                    category: "soup",
                    photo: '',
                    recipie: '',
                    ingredient: '',
                    note: ''
                },

                {
                    id: '6',
                    category: "salad",
                    photo: '',
                    recipie: '',
                    ingredient: '',
                    note: ''
                },
                {
                    id: '7',
                    category: "Breakfast",
                    photo: '',
                    recipie: '',
                    ingredient: '',
                    note: ''
                },
                {
                    id: '8',
                    category: "Appetizer",
                    photo: '',
                    recipie: '',
                    ingredient: '',
                    note: ''
                },
                {
                    id: '9',
                    category: "Main",
                    photo: '',
                    recipie: '',
                    ingredient: '',
                    note: ''
                },
            ],
            player: [{
                foodtype: "",
            }]
        };
    },
    getters: {
        categories(state) {
            return state.topics
        },
        category(state) {
            return (categoryname) => {
                return state.categories.find((category) => category.name == categoryname);
            }
        },
        players: state => {
            console.log('player')
            return state.player
        },
    },
    mutations: {
        changeCat(state, categorychange) {
            console.log(categorychange)
            state.player.foodtype = categorychange

        },

    }


});
export default store