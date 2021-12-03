<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
           <ion-title>Recipies</ion-title>
      </ion-toolbar>
         <ion-searchbar color="white"></ion-searchbar>
    </ion-header>
    <ion-content :fullscreen="true" color="secondary">
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="favorite" href="/favorite">
            <ion-icon :icon="starOutline" />
            <ion-label>Favorite</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="Shoplist" href="/Shoplist">
            <ion-icon :icon="cartOutline" />
            <ion-label>Shoping list</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
         
       <ion-segment size="large" @ionChange="segmentChanged($event)">
        <ion-segment-button value="Dessert" >
          <ion-label color="primary" style="font-size:15px">Dessert</ion-label>
          <ion-icon :src="desert" size="large" color="primary"></ion-icon>
        </ion-segment-button>
        <ion-segment-button value="Main">
          <ion-label color="primary" style="font-size:15px">Main</ion-label>
          <ion-icon :src="main" size="large" color="primary"></ion-icon>
        </ion-segment-button>
        <ion-segment-button value="Appetizer">
          <ion-label color="primary" style="font-size:15px">Appetizer</ion-label>
          <ion-icon :src="appt" size="large" color="primary"></ion-icon>
        </ion-segment-button>
      </ion-segment>
      <br><br>
       <ion-segment size="large" @ionChange="segmentChanged($event)">
        <ion-segment-button value="Breakfast">
          <ion-label color="primary" style="font-size:15px">Breakfast</ion-label>
          <ion-icon :src="Breakfast" size="large" color="primary"></ion-icon>
        </ion-segment-button>
        <ion-segment-button value="salad">
          <ion-label color="primary" style="font-size:15px">salad</ion-label>
          <ion-icon :src="salad" size="large" color="primary"></ion-icon>
        </ion-segment-button>
        <ion-segment-button value="soup">
          <ion-label color="primary" style="font-size:15px">soup</ion-label>
          <ion-icon :src="soup" size="large" color="primary"></ion-icon>
        </ion-segment-button>
      </ion-segment>
      <br><br>
        <ion-segment size="large" @ionChange="segmentChanged($event)">
        <ion-segment-button value="Side">
          <ion-label color="primary" style="font-size:15px">Side</ion-label>
          <ion-icon :src="Breakfast" size="large" color="primary"></ion-icon>
        </ion-segment-button>
        <ion-segment-button value="Drink">
          <ion-label color="primary" style="font-size:15px">Drink</ion-label>
          <ion-icon :src="salad" size="large" color="primary"></ion-icon>
        </ion-segment-button>
        <ion-segment-button value="Casserole">
          <ion-label color="primary" style="font-size:15px">Casserole</ion-label>
          <ion-icon :src="soup" size="large" color="primary"></ion-icon>
        </ion-segment-button>
      </ion-segment>
      
    </ion-content>
  </ion-page>
</template>

<script>
import desert from "../../public/assets/svg/dessert.svg";
import main from "../../public/assets/svg/main.svg";
import appt from "../../public/assets/svg/Appt.svg";
import Breakfast from "../../public/assets/svg/breakfast.svg";
import salad from "../../public/assets/svg/salad.svg";
import soup from "../../public/assets/svg/soup.svg";
import SideD from "../../public/assets/svg/sides.svg";
import Drink from "../../public/assets/svg/drink.svg";
import Casserole from "../../public/assets/svg/cass.svg";
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSearchbar,
  IonSegment, IonSegmentButton,
 
} from "@ionic/vue";
import { cartOutline, starOutline } from "ionicons/icons";
import { useRouter } from "vue-router";



export default {
  
  name: "Mainpage",
  components: {
    IonLabel,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonPage,
    IonRouterOutlet,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonSegment, 
    IonSegmentButton,
    IonSearchbar,

  },
  setup() {
  
    
     const router = useRouter()
      const segmentChanged =(ev) =>{
      var detail = ev['detail']
      var value = detail['value']
      router.push({name:'category', params:{TitlePer:value}});
    }
    return {
      starOutline,
      cartOutline,
      desert: desert,
      appt:appt,
      main:main,
      Breakfast,
      soup,
      salad,
      SideD,
      Drink,
      Casserole,
      segmentChanged,
    };
  },
};
</script>
<style scoped>

ion-segment{
   height: 70px;
   width:100%;
   font-size: 75px;
}
</style>
