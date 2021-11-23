import { createStore } from 'vuex'
const store = createStore({
    state() {
        return {
            categories: [],
            player: [{
                foodtype: "",
            }]
        };
    },
    getters: {
        categories(state) {
            return state.categories
        },
        category(state) {
            return (id) => {
                /* console.log("state", id) */
                return state.categories.filter((category) => category.category == id);
            }
        },
        players: state => {

            return state.player
        },
    },
    mutations: {
        changeCat(state, categorychange) {

            state.player.foodtype = categorychange

        },
        AddFromDB(state, recipies) {
            state.categories.push(recipies)

        }

    }


});
export default store