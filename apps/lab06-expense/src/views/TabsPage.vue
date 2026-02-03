<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>

      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon :icon="triangle" />
          <ion-label>List</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonTabs, IonTabBar, IonTabButton,
  IonLabel, IonIcon, IonPage, IonRouterOutlet
} from "@ionic/vue";
import { triangle, ellipse, square } from "ionicons/icons";
</script>
