<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ppf}}</ion-title>
        <ion-buttons slot="start">
          <ion-back-button default-href="/Mainpage">
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
      <ion-list>
        <ion-item>
                number 1
        </ion-item>
      </ion-list>
      
      
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
  IonList,
  IonItem,
} from "@ionic/vue";
import { addCircleOutline  } from "ionicons/icons";
/* import {store} from '../store/index.js' */

export default {
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
    IonList,
    IonItem,
  },
  data() {
    return {addCircleOutline,
    ppf:"",
    playerfood:""};
  }, ionViewWillEnter() {
    this.playerfood = this.player();
    this.ppf = this.playerfood.foodtype;
   
  },
  methods:{
    player() {
      return this.$store.getters.players;
    },
    toAddrecipie(){
        console.log(this.ppf)
        this.$router.push({name:'recpiepercat', params:{TitlePerCat:this.ppf}});
    }
  }
};
</script>

<style>
</style>