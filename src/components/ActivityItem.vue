<template>
  <div class="flex justify-between items-center border border-white p-3 my-2 rounded-lg">
    <div class="flex gap-2 items-center w-full">
      <input
        type="checkbox"
        :checked="activity.completed"
        @change="toggleActivity(activity.id)"
        class="cursor-pointer"
      />

      <span
        v-if="!isEditing"
        :class="{ 'line-through text-gray-500': activity.completed }"
        class="w-full text-white"
      >
        {{ activity.title }}
      </span>

      <input
        v-if="isEditing"
        v-model="editedName"
        class="text-white border border-gray-400 rounded-lg p-1 mr-3 w-full"
      />
    </div>

    <div class="flex gap-2">
      <button v-if="!isEditing" @click="startEditing" class="bg-yellow-500 text-white px-3 py-0.5 rounded cursor-pointer">
        Edit
      </button>
      <button v-if="!isEditing" @click="deleteActivity(activity.id)" class="bg-red-500 text-white py-0.5 px-2 rounded cursor-pointer">
        Delete
      </button>
      <button v-if="isEditing" @click="saveEdit" class="bg-green-500 text-white px-3 py-0.5 rounded cursor-pointer">
        Save
      </button>
      <button v-if="isEditing" @click="cancelEdit" class="bg-gray-500 text-white px-3 py-0.5 rounded cursor-pointer">
        Cancel
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps(["activity", "toggleActivity", "deleteActivity", "editActivity"]);

const isEditing = ref(false);
const editedName = ref("");

const startEditing = () => {
  isEditing.value = true;
  editedName.value = props.activity.title;
};

const saveEdit = async () => {
  if (!editedName.value.trim()) {
    alert("Task name cannot be empty!");
    return;
  }

  await props.editActivity(props.activity.id, editedName.value);
  isEditing.value = false;
};

const cancelEdit = () => {
  isEditing.value = false;
  editedName.value = "";
};
</script>
