import { createStore } from 'vuex'
const store = createStore({
    state() {
        return {
            categories: [{
                    id: '1',
                    name: "Dessert",
                    photo: '',
                    recipie: '',
                    ingredient: '',
                    note: ''
                },
                {
                    id: '2',
                    name: "Casserole",
                    photo: '',
                    recipie: '',
                    ingredient: '',
                    note: ''
                },
                {
                    id: '3',
                    name: "Drink",
                    photo: '',
                    recipie: '',
                    ingredient: '',
                    note: ''
                },
                {
                    id: '4',
                    name: "Side",
                    photo: '',
                    recipie: '',
                    ingredient: '',
                    note: ''
                },
                {
                    id: '5',
                    name: "soup",
                    photo: '',
                    recipie: '',
                    ingredient: '',
                    note: ''
                },

                {
                    id: '6',
                    name: "salad",
                    photo: '',
                    recipie: '',
                    ingredient: '',
                    note: ''
                },
                {
                    id: '7',
                    name: "Breakfast",
                    photo: '',
                    recipie: '',
                    ingredient: '',
                    note: ''
                },
                {
                    id: '8',
                    name: "Appetizer",
                    photo: '',
                    recipie: '',
                    ingredient: '',
                    note: ''
                },
                {
                    id: '9',
                    name: "Main",
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