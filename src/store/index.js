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

                return state.categories.filter((category) => category.category == id);
            }
        },
        catid(state) {
            return (id) => {
                console.log("id", id)
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

        },


    }


});
export default store