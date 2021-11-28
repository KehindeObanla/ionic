<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Favorite</ion-title>
        <ion-buttons slot="start">
          <ion-back-button default-href="/Mainpage">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-item-sliding id="item100" v-for="categ in categories" :key="categ">
        <ion-item @click="Sendtosee(categ.id)">
          {{ categ.recipiename }}
        </ion-item>
        <ion-item-options side="end">
          <ion-item-option>
            <ion-button @click="Makeunfav(categ)">
              <ion-icon slot="icon-only" :icon="trash"></ion-icon>
            </ion-button>
          </ion-item-option>
        </ion-item-options>
      </ion-item-sliding>
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
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonButton
} from "@ionic/vue";
import { star, trash } from "ionicons/icons";
import { auth, db } from "../main";
import { collection, updateDoc, getDocs } from "firebase/firestore";
export default {
  name: "favorite",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonBackButton,
    IonButtons,
    IonIcon,
    IonItem,
    IonItemOption,
    IonItemOptions,
    IonItemSliding,
    IonButton
  },
  computed: {
    categories() {
      console.log("checked")
      return this.$store.getters.catfav();
    },
  },
  methods: {
    Sendtosee(id) {
      this.$router.push({
        name: "UpdateSee",
        params: { TitleUpdate: this.ppf, id: id },
      });
    },
    async Makeunfav(recipe) {
     console.log("tried")
      const user = auth.currentUser;
      const userref = collection(db, "user", user.uid, "recipies");
      const docData = {
        id: recipe.id,
        recipiename: recipe.recipiename,
        notes: recipe.notes,
        ingredient: recipe.ingredient,
        category: recipe.category,
        recipie: recipe.recipie,
        favorite: false,
      };
     
      const querySnapshot = await getDocs(userref);
      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          if (doc.data().id == docData.id) {
            updateDoc(doc.ref, docData);
          }
        });
      }
      //update store
      this.$store.commit("changespecfic", docData);
    },
  },
  data() {
    return { star, trash };
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
