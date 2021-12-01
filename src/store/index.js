import { createStore } from 'vuex'
const store = createStore({
    state() {
        return {
            categories: [],
            player: [{
                foodtype: "",
            }],
            shoppingList: ""
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

                return state.categories.find((category) => category.id == id);
            }
        },
        players: state => {

            return state.player
        },
        catfav(state) {
            return () => {
                return state.categories.filter((category) => category.favorite == true);
            }
        },
        getShoppingList(state) {
            return state.shoppingList
        }
    },
    mutations: {
        changeCat(state, categorychange) {

            state.player.foodtype = categorychange

        },
        AddFromDB(state, recipies) {
            state.categories.push(recipies)

        },
        changespecfic(state, Payload) {
            const cate = state.categories.find((category) => { return category.id == Payload.id });
            const index = store.state.categories.indexOf(cate)
            state.categories[index] = Payload;
            state.categories = [...state.categories]

        },
        removeFromstore(state, Payload) {
            const cate = state.categories.find((category) => { return category.id == Payload.id });
            state.categories.splice(store.state.categories.indexOf(cate), 1);
        },
        AddShopping(state, list) {
            state.shoppingList = list

        }

    }


});
export default store