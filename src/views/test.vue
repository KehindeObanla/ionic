<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ ppf }}</ion-title>
        <ion-buttons slot="start">
          <ion-back-button>
            <ion-icon name="arrow-back-outline"></ion-icon>
          </ion-back-button>
        </ion-buttons>
        <ion-buttons slot="end">
          <ion-button>
            <ion-icon slot="icon-only" :icon="addCircleOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <!-- Multi-line sliding item with icon options on both sides -->
      <ion-item-sliding v-for="categ in categories"
          :key="categ" >
        <ion-item  @click="clicked(categ)">
          {{categ}}
        </ion-item>

        <ion-item-options side="start">
          <ion-item-option>
            <ion-icon slot="icon-only" :icon="heart"></ion-icon>
          </ion-item-option>
        </ion-item-options>

        <ion-item-options side="end">
          <ion-item-option color="danger">
            <ion-icon slot="icon-only" :icon="trash"></ion-icon>
          </ion-item-option>
          <ion-item-option>
            <ion-icon slot="icon-only" :icon="star"></ion-icon>
          </ion-item-option>
        </ion-item-options>
      </ion-item-sliding>
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
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
 
} from "@ionic/vue";
import { addCircleOutline, heart, star, trash } from "ionicons/icons";
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
    IonItem,
    IonItemOption,
    IonItemOptions,
    IonItemSliding,
  
  },
  data() {
    return { addCircleOutline, ppf: "", playerfood: "", heart, star, trash
    , categories:[1,2,3,4,41,5,67,8,9,98,] };
  },
  ionViewWillEnter() {
    this.playerfood = this.player();
    this.ppf = this.playerfood.foodtype;
  },
  methods: {
    player() {
      return this.$store.getters.players;
    },
    clicked(id){
      console.log("clicked",id)
    }
  },
};
</script>

<style>
</style>