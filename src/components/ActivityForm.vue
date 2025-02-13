<template>
  <div class="flex items-stretch my-4">
    <input
      v-model="newActivity"
      placeholder="New task..."
      class="border-y border-l border-white rounded-l-xl px-4 py-2 text-xl text-white w-full"
    />
    <button
      @click="addActivity"
      class="bg-blue-500 hover:bg-blue-500/90 border-y border-r border-white text-white cursor-pointer px-4 rounded-r-xl"
    >
      Add
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useActivityStore } from "@/stores/activityStore";

const store = useActivityStore();
const newActivity = ref("");

const addActivity = async () => {
  if (!newActivity.value.trim()) return;
  await store.addActivity(newActivity.value);
  newActivity.value = "";
};
</script>
