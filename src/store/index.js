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
            return state.topics
        },
        category(state) {
            return (id) => {
                return state.categories.find((category) => category.id == id);
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
            console.log(recipies)
            console.log(typeof(recipies))
        }

    }


});
export default store