<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button>
            <ion-icon name="arrow-back-outline"></ion-icon>
          </ion-back-button>
        </ion-buttons>
        <ion-title>{{ ppf }} </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <form v-on:submit.prevent="submitpic">
        <ion-item>
          <ion-label position="stacked">Recipie name</ion-label>
          <ion-input placeholder="enter name" v-model="rname"></ion-input>
        </ion-item>

        <ion-item >
          <ion-label position="stacked">Recipie</ion-label>
          <ion-button @click="takepicture" size="small">
            <ion-icon :icon="camera" slot="start"></ion-icon>
          </ion-button>
          <ion-textarea
            placeholder="Type Recpie."
            v-model="recipe"
            auto-grow="true"
          >
            <ion-spinner
              v-if="workerready && captureProgress > 0"
            ></ion-spinner>
          </ion-textarea>
        </ion-item>

        <ion-item >
          <ion-label position="stacked">Ingredient</ion-label>
          <ion-button value="Ingredient"  @click="takepicture2">
            <ion-icon :icon="camera"></ion-icon>
          </ion-button>
          <ion-textarea

            placeholder="Type Ingredient."
            v-model="ringredient"
            auto-grow="true"
          >
          <ion-spinner
              v-if="workerready2 && captureProgress2 > 0"
            ></ion-spinner>
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
        <ion-button expand="block" @click="submitpic">Add Recipie</ion-button>
      </form>
    </ion-content>
  </ion-page>
</template>


<script>
import { auth, db } from "../main";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
import { collection, addDoc,  } from "firebase/firestore";
/* import {quickstart} from '../../backend/detect.js' */
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
  IonSpinner,
} from "@ionic/vue";
import { camera } from "ionicons/icons";
/* import {ref,uploadString,getDownloadURL } from "firebase/storage"; */
import Tesseract, { createWorker } from "tesseract.js";

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
    IonItem,
    IonLabel,
    IonTextarea,
    IonButton,
    IonTitle,
    IonInput,
    IonSpinner,
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
      captureProgress: 0,
      workerready: false,
      image: "",
      worker: Tesseract.Worker,
      worker2: Tesseract.Worker,
      image2: "",
      cameratext2: "",
      captureProgress2: 0,
      workerready2: false,
    };
  },

  methods: {
    player() {
      return this.$store.getters.players;
    },
    async takepicture() {
     
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Prompt,
      });
      
        this.image = image.dataUrl;
        this.recognizeimage();
    },
    async takepicture2() {
     
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Prompt,
      });
        this.image2 = image.dataUrl;
        this.recognizeimage2();
      
    },


    async submitpic() {
      
      const user = auth.currentUser;
      const userref =  collection(db, "user", user.uid, "recipies");
      const docData = {
        recipiename: this.rname,
        notes: this.rnotes,
        ingredient: this.ringredient,
        category: this.rcategory,
        recipie: this.recipe,
      };
     await addDoc(userref, docData);
      
    
    },
    async recognizeimage() {
      this.workerready = true;
      const result = await this.worker.recognize(this.image);
      this.cameratext = result.data.text;
      this.recipe = this.cameratext;
      this.workerready = false;
    },
    async loadWorker() {
      this.worker = createWorker({
        logger: (progress) => {
          if (progress.status == "recognizing text") {
            this.captureProgress = parseInt("" + progress.progress * 100);
          }
        },
      });
      await this.worker.load();
      await this.worker.loadLanguage("eng");
      await this.worker.initialize("eng");

     
    },
    async loadworker2() {
      this.worker2 = createWorker({
        logger: (progress) => {
          if (progress.status == "recognizing text") {
            this.captureProgress2 = parseInt("" + progress.progress * 100);
          }
        },
      });
      await this.worker2.load();
      await this.worker2.loadLanguage("eng");
      await this.worker2.initialize("eng");
      
    },
    async recognizeimage2() {
      this.workerready2 = true;
      const result = await this.worker2.recognize(this.image2);
      this.cameratext2 = result.data.text;
      this.ringredient = this.cameratext2;
      this.workerready2 = false;
    },
  },
  ionViewWillEnter() {
    this.playerfood = this.player();
    this.ppf = this.playerfood.foodtype;
    this.rcategory = this.ppf;
    this.loadWorker();
    this.loadworker2();
  },
};
</script>

<style scoped >
.testbutton {
  --ion--border-radius: 50%;
}
</style>