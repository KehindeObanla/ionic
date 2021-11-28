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
      <ion-textarea>

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
  setup() {
    
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
