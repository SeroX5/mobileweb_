<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="warning">
        <ion-title>✏️ แก้ไขรายการ</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <ion-card>
        <ion-card-header>
          <ion-card-title>🛠 แก้ไขข้อมูล</ion-card-title>
        </ion-card-header>

        <ion-card-content>

          <ion-item>
            <ion-icon slot="start" :icon="documentText" />
            <ion-input label="ชื่อรายการ" label-placement="floating" v-model="title" />
          </ion-item>

          <ion-item>
            <ion-icon slot="start" :icon="cash" />
            <ion-input
              label="จำนวนเงิน"
              type="number"
              label-placement="floating"
              v-model="amount"
            />
          </ion-item>

          <ion-item>
            <ion-icon slot="start" :icon="swapVertical" />
            <ion-select label="ประเภท" label-placement="floating" v-model="type">
              <ion-select-option value="income">รายรับ</ion-select-option>
              <ion-select-option value="expense">รายจ่าย</ion-select-option>
            </ion-select>
          </ion-item>

          <ion-item>
            <ion-icon slot="start" :icon="pricetag" />
            <ion-input label="หมวดหมู่" label-placement="floating" v-model="category" />
          </ion-item>

          <ion-item>
            <ion-icon slot="start" :icon="create" />
            <ion-textarea label="หมายเหตุ" label-placement="floating" v-model="note" />
          </ion-item>

          <ion-button
            expand="block"
            size="large"
            color="primary"
            class="save-btn ion-margin-top"
            :class="type"
            @click="updateExpense"
          >
            <ion-icon slot="start" :icon="save" />
            บันทึกการแก้ไข
          </ion-button>

        </ion-card-content>
      </ion-card>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonItem, IonInput, IonSelect, IonSelectOption,
  IonTextarea, IonButton, IonIcon
} from "@ionic/vue";

import {
  documentText, cash, swapVertical,
  pricetag, create, save
} from "ionicons/icons";

import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase";

const route = useRoute();
const router = useRouter();
const id = route.params.id as string;

const title = ref("");
const amount = ref(0);
const type = ref("expense");
const category = ref("");
const note = ref("");

onMounted(async () => {
  const snap = await getDoc(doc(db, "expenses", id));
  if (snap.exists()) {
    const data: any = snap.data();
    title.value = data.title;
    amount.value = data.amount;
    type.value = data.type;
    category.value = data.category;
    note.value = data.note;
  }
});

const updateExpense = async () => {
  await updateDoc(doc(db, "expenses", id), {
    title: title.value,
    amount: Number(amount.value),
    type: type.value,
    category: category.value,
    note: note.value,
  });

  router.push("/tabs/tab1");
};
</script>

<style scoped>
.save-btn::part(native) {
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.save-btn.income::part(native):hover {
  background-color: var(--ion-color-success);
  box-shadow: 0 4px 12px rgba(0, 128, 0, 0.35);
}

.save-btn.expense::part(native):hover {
  background-color: var(--ion-color-danger);
  box-shadow: 0 4px 12px rgba(200, 0, 0, 0.35);
}
</style>
