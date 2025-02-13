<template>
  <div>
    <ActivityItem
      v-for="activity in store.activities"
      :key="activity.id"
      :activity="activity"
      :toggleActivity="store.toggleActivity"
      :deleteActivity="store.deleteActivity"
      :editActivity="store.editActivity"
    />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useActivityStore } from "../stores/activityStore";
import ActivityItem from "./ActivityItem.vue";

const store = useActivityStore();

onMounted(() => {
  store.fetchActivities();
});
</script>
