<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Shopping</ion-title>
        <ion-buttons slot="start">
          <ion-back-button default-href="/Mainpage">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-textarea
        placeholder="enter shopping list."
        v-model="recipe"
        auto-grow="true"
      >
      </ion-textarea>
    </ion-content>
  </ion-page>
</template>
<script >
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonBackButton,
  IonButtons,
  IonIcon,
  IonTextarea,
} from "@ionic/vue";
import { auth, db } from "../main";
import { doc, updateDoc } from "firebase/firestore";
export default {
  name: "Shoplist",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonBackButton,
    IonButtons,
    IonIcon,
    IonTextarea,
  },
  data() {
    return {
      recipe: "",
      change: false,
      note: "",
    };
  },
  watch: {
    recipe: function (val) {
      this.note = val;
      this.change = true;
    },
  },
  ionViewWillLeave() {
    if (this.change) {
      this.updateDB();
    }
  },
  ionViewDidEnter() {
    this.recipe = this.categories;
  },
  computed: {
    categories() {
      return this.$store.getters.getShoppingList;
    },
  },
  methods: {
    async updateDB() {
      const user = auth.currentUser;
      const uid = user.uid;
      const docref2 = doc(db, "user", uid);
      await updateDoc(docref2, {
        shoppingList: this.recipe,
      });
      
      //update store
      this.$store.commit("AddShopping", this.recipe);
    },
  },
};
</script>

<style scoped>
.center {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
}
</style>
