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
      <ion-list>
        <ion-item v-for="categ in categories" :key="categ" @click="Sendtosee(categ.id)">
                {{categ.recipiename}}
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
    IonList,
    IonItem,
  },
  data() {
    return {addCircleOutline,
    ppf:"",
    playerfood:"",
    };
  }, 
  methods:{
    
    toAddrecipie(){
        this.$router.push({name:'recpiepercat', params:{TitlePerCat:this.ppf}});
    },
    Sendtosee(id){
      this.$router.push({name:'UpdateSee', params:{TitleUpdate:this.ppf,id:id}});
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