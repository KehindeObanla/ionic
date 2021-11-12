<template>
<ion-page>
<ion-header class="ion-no-border">
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button>
            <ion-icon name="arrow-back-outline"></ion-icon>
        </ion-back-button>
      </ion-buttons>
       <ion-title>{{ppf}} </ion-title>
    </ion-toolbar>
  </ion-header>
<ion-content >
 
   <form  @submit.prevent="">
     <ion-item>
       <ion-label position="stacked">Recipie name</ion-label>
        <ion-input placeholder="enter name"></ion-input>
       
     </ion-item>
     <ion-item>
       
  <ion-label position="stacked">Recipie</ion-label>
      <ion-icon  :icon="camera"></ion-icon>
      <ion-textarea placeholder="Type Recpie."></ion-textarea>
    </ion-item>  
    <ion-item>
      <ion-label position="stacked">Ingredient</ion-label>
      <ion-icon  :icon="camera"></ion-icon>
      <ion-textarea placeholder="Type Ingredient."></ion-textarea>
    </ion-item>
    <ion-item>
      <ion-label position="stacked">Notes</ion-label>
      <ion-icon  :icon="camera"></ion-icon>
      <ion-textarea placeholder="Type Notes."></ion-textarea>
    </ion-item> 
     <ion-button expand="block">Add Recipie</ion-button>
   </form>
    
</ion-content>
</ion-page>

</template>


<script>
import {
    IonHeader, 
    IonToolbar,
    IonPage,
    IonContent,
     IonBackButton,
    IonButtons,
    IonIcon,
    IonItem, IonLabel, IonTextarea ,
    IonButton,
     IonTitle,
     IonInput,
    } from '@ionic/vue'
    import { camera } from "ionicons/icons"
export default {
    name: "recpiepercat",
   
 components: {  
    IonHeader, 
    IonToolbar,
    IonPage,
    IonContent,
    IonBackButton,
    IonButtons,
    IonIcon,
    IonItem, IonLabel, IonTextarea ,
    IonButton,
    IonTitle,
    IonInput,

 },
  data(){
      return {
        topicName:'',
        camera,
        ppf:"",
        playerfood:""
      }
    },

    methods: {
      player(){
          return this.$store.getters.players
        }
    },
    ionViewWillEnter() {
     this.playerfood = this.player()
      this.ppf = this.playerfood.foodtype
    }
 
}
</script>

<style >

</style>