<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title> Reset Password </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card>
        <ion-card-subtitle> Reset User Password </ion-card-subtitle>
        <ion-card-content>
          <form @submit.prevent="reset()">
            <ion-item>
              <ion-label position="floating">Email</ion-label>
              <ion-input v-model="email"></ion-input>
              <ion-button @click="reset()">
                  Click to resetPassword
              </ion-button>
            </ion-item>
          </form>
        </ion-card-content>
        <ion-card-content v-if="errormsg" class="error-message" v-model="errormsg">
          {{ errormsg }}
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import {
  IonPage,
  IonHeader,
  IonTitle,
  IonContent,
  IonCard,
  IonCardSubtitle,
  IonCardContent,
  IonInput,
  IonButton,
  IonLabel,
  IonItem,
  IonToolbar,
 
} from "@ionic/vue";
export default {
     components: {
    IonPage,
    IonHeader,
    IonTitle,
    IonContent,
    IonCard,
    IonCardSubtitle,
    IonCardContent,
    IonInput,
    IonButton,
    IonLabel,
    IonItem,
    IonToolbar,
  },
    data(){
        return{
             errormsg:"",  
             email:"", 
        }
    },
    methods:{
    reset(){
        const auth = getAuth();
        sendPasswordResetEmail(auth, this.email)
  .then(() => {
  this.$router.push("/authentication");
  })
  .catch(() => {
    this.errormsg = "if email is valid reset email link has been sent"
    // ..
  });

    }
}
};


</script>

<style>
</style>