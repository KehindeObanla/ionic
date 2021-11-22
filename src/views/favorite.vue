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
      <div id="map" ref="mapRef"></div>
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
} from "@ionic/vue";

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
