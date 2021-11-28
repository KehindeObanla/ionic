<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{TitlePer}}</ion-title>
        <ion-buttons slot="start">
          <ion-back-button>
            <ion-icon name="arrow-back-outline"></ion-icon>
          </ion-back-button>
        </ion-buttons>
        <ion-buttons slot="end">
          <ion-button @click="toAddrecipie">
              <ion-icon slot="icon-only" :icon="addCircleOutline"></ion-icon>
          </ion-button>
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
            <ion-button @click="deleteitem(categ)">
              <ion-icon slot="icon-only" :icon="trash"></ion-icon>
            </ion-button>
          </ion-item-option>
        </ion-item-options>
      </ion-item-sliding>
      <!-- <ion-list>
        <ion-item v-for="categ in categories" :key="categ" @click="Sendtosee(categ.id)">
                {{categ.recipiename}}
        </ion-item>
      </ion-list> -->
       </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonBackButton,
  IonButtons,
  IonIcon,
  IonButton,
   IonItemOption,
    IonItemOptions,
    IonItemSliding,
  /* IonList, */
  IonItem,
} from "@ionic/vue";
import { addCircleOutline,star, trash } from "ionicons/icons";
import { auth, db } from "../main";
import { collection, deleteDoc, getDocs } from "firebase/firestore";

export default {
  props: ['TitlePer'],
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonBackButton,
    IonButtons,
    IonIcon,
    IonButton,
    /* IonList, */
    IonItem,
     IonItemOption,
    IonItemOptions,
    IonItemSliding,
  },
  data() {
    return {addCircleOutline,
    ppf:"",
    playerfood:"",
    star, trash
    };
  }, 
  methods:{
    
    toAddrecipie(){
        this.$router.push({name:'recpiepercat', params:{TitlePerCat:this.ppf}});
    },
    Sendtosee(id){
      this.$router.push({name:'UpdateSee', params:{TitleUpdate:this.ppf,id:id}});
    },
    async deleteitem(recipe){
      const user = auth.currentUser;
      const userref = collection(db, "user", user.uid, "recipies");
      const docData = {
        id: recipe.id,
        recipiename: recipe.recipiename,
        notes: recipe.notes,
        ingredient: recipe.ingredient,
        category: recipe.category,
        recipie: recipe.recipie,
        favorite: recipe.favorite,
      };
     
      const querySnapshot = await getDocs(userref);
      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          if (doc.data().id == docData.id) {
            deleteDoc(doc.ref, docData);
          }
        });
      }
      //update store
      this.$store.commit("removeFromstore", docData);
    }
  },
  computed:{
        categories(){
          return this.$store.getters.category(this.ppf);
        }
    },
    ionViewDidEnter(){
      this.ppf = this.TitlePer;
    }
};
</script>

<style>
</style>