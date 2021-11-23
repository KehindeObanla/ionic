<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title> Sigin In/UP </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-card>
        <ion-card-header>
          <ion-card-title>Welcome to My little Helper</ion-card-title>
          <ion-card-subtitle> Sign In/Up</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <form
            @submit.prevent="
              mode === AuthMode.SignIn
                ? usersiginWithemailandPassword(email, password)
                : usersSiginUpEmailAndPassword(name, email, password)
            "
          >
            <ion-item v-if="mode === AuthMode.SignUp">
              <ion-label position="floating">Name</ion-label>
              <ion-input v-model="name"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Email</ion-label>
              <ion-input v-model="email"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Password</ion-label>
              <ion-input v-model="password" type="password"></ion-input>
            </ion-item>
            <ion-button
              expand="block"
              color="primary"
              class="ion-margin-top"
              type="submit"
            >
              {{ mode === AuthMode.SignIn ? "Sign In" : "Sign Up" }}
            </ion-button>
            <ion-button
              expand="block"
              color="secondary"
              class="ion-margin-top"
              @click="
                mode =
                  mode === AuthMode.SignIn ? AuthMode.SignUp : AuthMode.SignIn
              "
            >
              {{ mode === AuthMode.SignIn ? "Sign Up" : "Cancel" }}
            </ion-button>
          </form>
        </ion-card-content>
        <ion-card-content v-if="errormsg" class="error-message">
          {{ errormsg }}
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonTitle,
  IonContent,
  IonCard,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonInput,
  IonButton,
  IonLabel,
  IonItem,
  IonToolbar,
  IonCardHeader,
} from "@ionic/vue";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { db, auth } from "../main";
import { doc, setDoc, getDocs , collection } from "firebase/firestore";
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import {useStore} from 'vuex'
const AuthMode = {
  SignIn: "SignIn",
  SignUp: "SignUp",
};
export default {
  name: "authentication",
  components: {
    IonPage,
    IonHeader,
    IonTitle,
    IonContent,
    IonCard,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonInput,
    IonButton,
    IonLabel,
    IonItem,
    IonToolbar,
    IonCardHeader,
  },
  setup() {
    const store = useStore()
    const router = useRouter();
    const state = reactive({
      name: "",
      email: "",
      password: "",
      mode: AuthMode.SignIn,
      errormsg: "",
      id: "",
    });
    const usersiginWithemailandPassword = async (email, password) => {
      try {
        if (!email || !password) {
          state.errormsg = "email and password required!";
          return;
        }
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            onSiginInOrUP(user);
            router.push("/Mainpage");
            // ...
          })
          .catch((error) => {
            state.errormsg = error.message;
          });
      } catch (error) {
        state.errormsg = error.message;
      }
    };
    const usersSiginUpEmailAndPassword = async (name, email, password) => {
      try {
        if (!name || !email || !password) {
          state.errormsg = "Name,email and password required!";
          return;
        }
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            state.id = user.uid;
            const userref = doc(db, "user", state.id);
            const docData = {
              name: state.name,
              email: state.email,
            };
            setDoc(userref, docData);

            router.push("/Mainpage");
            // ...
          })
          .catch((error) => {
            state.errormsg = error.message;
            // ..
          });

        router.push("/Mainpage");
      } catch (error) {
        state.errormsg = error.message;
      }
    };
    const onSiginInOrUP = async (user) => {
      
      const uid = user.uid;
      const docRef = collection(db, "user", uid, "recipies");
      const querySnapshot = await getDocs (docRef);
      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          toggle(doc.data())
        });
      }
    };
    const toggle = (value) => {
      store.commit('AddFromDB',value)};
    return {
      ...toRefs(state),
      usersiginWithemailandPassword,
      usersSiginUpEmailAndPassword,
      onSiginInOrUP,

      AuthMode,
    };
  },
};
</script>

<style scoped>
.center {
  display: flex;
  height: 90vh;
  width: 100%;
  align-items: center;
  justify-content: center;
}
.error-message {
  color: #842029;
  background-color: #f8d7da;
  border-color: #f5c2c7;
  text-align: center;
}
</style>
