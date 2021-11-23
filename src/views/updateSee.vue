<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-title>{{ TitleUpdate }} </ion-title>
        <ion-buttons slot="start">
          <ion-back-button>
            <ion-icon name="arrow-back-outline"></ion-icon>
          </ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <form v-on:submit.prevent="submitpic">
        <ion-item>
          <ion-label position="stacked">Recipie name</ion-label>
          <ion-input placeholder="enter name" v-model="rname"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="stacked">Recipie</ion-label>
          <ion-textarea
            placeholder="Type Recpie."
            v-model="recipe"
            auto-grow="true"
          >
          </ion-textarea>
        </ion-item>

        <ion-item>
          <ion-label position="stacked">Ingredient</ion-label>
          <ion-textarea
            placeholder="Type Ingredient."
            v-model="ringredient"
            auto-grow="true"
          >
          </ion-textarea>
        </ion-item>

        <ion-item>
          <ion-label position="stacked">Notes</ion-label>
          <ion-textarea
            placeholder="Type Notes."
            v-model="rnotes"
            auto-grow="true"
          ></ion-textarea>
        </ion-item>
        <ion-button expand="block" @click="submitpic" v-if="needUpdate && count<=0"
          >Update Recipie</ion-button
        >
      </form>
    </ion-content>
  </ion-page>
</template>


<script>
import { auth, db } from "../main";
import { collection, setDoc } from "firebase/firestore";
import {
  IonHeader,
  IonToolbar,
  IonPage,
  IonContent,
  IonBackButton,
  IonButtons,
  IonIcon,
  IonItem,
  IonLabel,
  IonTextarea,
  IonButton,
  IonTitle,
  IonInput,
} from "@ionic/vue";
import { camera } from "ionicons/icons";
export default {
  name: "UpdateSee",
  props: ['TitleUpdate','id'],
  components: {
    IonHeader,
    IonToolbar,
    IonPage,
    IonContent,
    IonBackButton,
    IonButtons,
    IonIcon,
    IonItem,
    IonLabel,
    IonTextarea,
    IonButton,
    IonTitle,
    IonInput,
  },
  data() {
    return {
      topicName: "",
      camera,
      ppf: "",
      playerfood: "",
      cameratext: "",
      rname: "",
      rnotes: "",
      rcategory: "",
      ringredient: "",
      recipe: "",
      recipecleck: false,
      ingredientclick: false,
      url: "",
      fav: false,
      needUpdate: false,
      count:6
    };
  },

  methods: {
    async submitpic() {
      const user = auth.currentUser;
      const userref = collection(db, "user", user.uid, "recipies");
      const docData = {
        id: this.id,
        recipiename: this.rname,
        notes: this.rnotes,
        ingredient: this.ringredient,
        category: this.rcategory,
        recipie: this.recipe,
        favorite: this.fav,
      };
      await setDoc(userref, docData, { merge: true });
    },
  },
  ionViewDidEnter() {
      this.ppf = this.TitleUpdate;
      const category = this.$store.getters.catid(this.id);
       this.rname = category.recipiename;
       this.rname = category.recipiename;
      this.rnotes = category.notes;
      this.ringredient = category.ingredient;
      this.rcategory = category.category;
      this.recipe = category.recipie;
    },
    
     watch: {
      rname: function (val) {
        this.rname = val;
        this.needUpdate = true;
        
        this.count-=1;
        console.log("rname",this.count)
      },
      rnotes: function (val) {
        this.rnotes = val;
        this.needUpdate = true;
        this.count-=1;
       
      },
      ringredient: function (val) {
        this.ringredient = val;
        this.needUpdate = true;
        this.count-=1
         console.log("ringredient",this.count)
      },
      rcategory: function (val) {
        this.rcategory = val;
        this.needUpdate = true;
        this.count-=1
        console.log("rcategory",this.count)
      },
      recipe: function (val) {
        this.recipe = val;
        this.needUpdate = true;
        this.count-=1
        console.log("recipe",this.count)
      },
    },
};
</script>

<style scoped >
.testbutton {
  --ion--border-radius: 50%;
}
</style>