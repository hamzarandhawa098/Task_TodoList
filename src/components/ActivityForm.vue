<template>
  <div class="flex gap-2 my-4">
    <input
      v-model="newActivity"
      placeholder="New task..."
      class="border border-white rounded-lg p-4 text-white w-full"
    />
    <button
      @click="addActivity"
      class="bg-blue-500 text-white px-4 py-2 rounded"
    >
      Add
    </button>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useActivityStore } from "../stores/activityStore";

const store = useActivityStore();
const newActivity = ref("");

const addActivity = () => {
  if (!newActivity.value.trim()) return;
  store.addActivity(newActivity.value);
  newActivity.value = "";
};
</script>
