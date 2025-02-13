<template>
  <div class="max-w-md mx-auto py-10 px-4">
    <h1 class="text-2xl font-bold text-center text-white my-4">User Stories</h1>
    <Loader v-if="store.loading" />
    <ActivityForm />
    <ActivityList />
  </div>
</template>

<script setup>
import { useActivityStore } from "@/stores/activityStore";
import Loader from "@/components/global/Loader.vue";
import ActivityForm from "./components/ActivityForm.vue";
import ActivityList from "./components/ActivityList.vue";

const store = useActivityStore();
</script>