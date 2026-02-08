<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>📋 รายรับ–รายจ่าย</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>

      <!-- ===== Summary Card ===== -->
      <ion-card class="summary-card">
        <ion-card-content>

          <div class="summary-header">
            <h2>💰 ยอดคงเหลือ</h2>

            <ion-button fill="clear" @click="showBalance = !showBalance">
              <ion-icon
                :icon="showBalance ? eyeOff : eye"
                size="large"
              />
            </ion-button>
          </div>

          <h1 class="balance">
            {{ showBalance ? formattedBalance + ' ฿' : '•••••' }}
          </h1>

          <ion-grid>
            <ion-row>
              <ion-col>
                <ion-text color="success">
                  <p>รายรับ</p>
                  <strong>{{ incomeTotal }} ฿</strong>
                </ion-text>
              </ion-col>

              <ion-col>
                <ion-text color="danger">
                  <p>รายจ่าย</p>
                  <strong>{{ expenseTotal }} ฿</strong>
                </ion-text>
              </ion-col>
            </ion-row>
          </ion-grid>

        </ion-card-content>
      </ion-card>

      <!-- ===== Expense List ===== -->
      <ion-list v-if="expenses.length">

        <ion-item
          v-for="item in expenses"
          :key="item.id"
          :class="item.type"
        >
          <ion-icon
            slot="start"
            :icon="item.type === 'income' ? addCircle : removeCircle"
            :color="item.type === 'income' ? 'success' : 'danger'"
          />

          <ion-label>
            <h2>{{ item.title }}</h2>
            <p>{{ item.category }} • {{ item.note }}</p>
          </ion-label>

          <ion-badge
            :color="item.type === 'income' ? 'success' : 'danger'"
          >
            {{ item.amount }} ฿
          </ion-badge>

          <!-- Edit -->
          <ion-button fill="clear" @click="goEdit(item.id)">
            <ion-icon slot="icon-only" :icon="create" />
          </ion-button>

          <!-- Delete -->
          <ion-button
            fill="clear"
            color="danger"
            @click="confirmDelete(item.id)"
          >
            <ion-icon slot="icon-only" :icon="trash" />
          </ion-button>

        </ion-item>

      </ion-list>

      <ion-text v-else color="medium">
        <p class="empty-text">ยังไม่มีรายการ</p>
      </ion-text>

      <!-- FAB Add -->
      <ion-fab vertical="bottom" horizontal="start" slot="fixed">
        <ion-fab-button color="primary" @click="goAdd">
          <ion-icon :icon="add" />
        </ion-fab-button>
      </ion-fab>

      <!-- Delete Confirm Alert -->
      <ion-alert
        :is-open="showDeleteAlert"
        header="ยืนยันการลบ"
        message="คุณต้องการลบรายการนี้ใช่หรือไม่?"
        :buttons="[
          { text: 'ยกเลิก', role: 'cancel', handler: () => showDeleteAlert = false },
          { text: 'ลบ', role: 'destructive', handler: deleteExpense }
        ]"
      />

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonCard, IonCardContent,
  IonList, IonItem, IonLabel, IonIcon,
  IonBadge, IonButton, IonText,
  IonFab, IonFabButton,
  IonGrid, IonRow, IonCol,
  IonAlert,
  onIonViewWillEnter
} from "@ionic/vue";

import {
  add, addCircle, removeCircle,
  create, trash, eye, eyeOff
} from "ionicons/icons";

import { ref, computed } from "vue";
import {
  collection, query, orderBy,
  deleteDoc, doc, onSnapshot 
} from "firebase/firestore";
import { db } from "@/firebase";
import { useRouter } from "vue-router";

const router = useRouter();

const expenses = ref<any[]>([]);
const showBalance = ref(true);

const showDeleteAlert = ref(false);
const selectedId = ref<string | null>(null);

/* ===== Load Data ===== */
const loadExpenses = () => {
  const q = query(
    collection(db, "expenses"),
    orderBy("createdAt", "desc")
  );

  onSnapshot(q, (snapshot) => {
    expenses.value = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  });
};


/* ===== Summary ===== */
const incomeTotal = computed(() =>
  expenses.value
    .filter(e => e.type === "income")
    .reduce((sum, e) => sum + Number(e.amount), 0)
);

const expenseTotal = computed(() =>
  expenses.value
    .filter(e => e.type === "expense")
    .reduce((sum, e) => sum + Number(e.amount), 0)
);

const balance = computed(() =>
  incomeTotal.value - expenseTotal.value
);

const formattedBalance = computed(() =>
  balance.value.toFixed(2)
);

/* ===== Navigation ===== */
const goAdd = () => router.push("/tabs/add");
const goEdit = (id: string) => router.push(`/tabs/edit/${id}`);

/* ===== Delete ===== */
const confirmDelete = (id: string) => {
  selectedId.value = id;
  showDeleteAlert.value = true;
};

const deleteExpense = async () => {
  if (!selectedId.value) return;

  await deleteDoc(doc(db, "expenses", selectedId.value));
  showDeleteAlert.value = false;
  selectedId.value = null;

  loadExpenses();
};

onIonViewWillEnter(loadExpenses);
</script>

<style scoped>
.summary-card {
  margin: 12px;
  border-radius: 16px;
  background: linear-gradient(rgb(0, 0, 27), rgb(52, 123, 255));
}

.summary-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.balance {
  font-size: 34px;
  font-weight: bold;
  color: #ffffff;
  margin: 8px 0 12px;
}

.income {
  --background: #ecfdf5;
}

.expense {
  --background: #fff1f2;
}

.empty-text {
  text-align: center;
  margin-top: 40px;
}
</style>
