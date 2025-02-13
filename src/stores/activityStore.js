import { defineStore } from "pinia";
import apiClient from "@/api/axiosConfig";

export const useActivityStore = defineStore("activityStore", {
  state: () => ({
    activities: [],
    loading: false,
  }),
  actions: {
    async fetchActivities() {
      this.loading = true;
      try {
        const response = await apiClient.get("/");
        this.activities = response.data;
      } catch (error) {
        console.error("Error fetching activities:", error);
      } finally {
        this.loading = false;
      }
    },

    async addActivity(name) {
      this.loading = true;
      try {
        const newActivity = { title: name, completed: false };
        const response = await apiClient.post("/", newActivity);
        this.activities.push(response.data);
      } catch (error) {
        console.error("Error adding activity:", error);
      } finally {
        this.loading = false;
      }
    },

    async toggleActivity(id) {
      this.loading = true;
      try {
        const activity = this.activities.find((act) => act.id === id);
        if (!activity) return;

        const updatedActivity = { ...activity, completed: !activity.completed };
        await apiClient.put(`/${id}`, updatedActivity);
        activity.completed = !activity.completed;
      } catch (error) {
        console.error("Error toggling activity:", error);
      } finally {
        this.loading = false;
      }
    },

    async deleteActivity(id) {
      this.loading = true;
      try {
        await apiClient.delete(`/${id}`);
        this.activities = this.activities.filter((act) => act.id !== id);
      } catch (error) {
        console.error("Error deleting activity:", error);
      } finally {
        this.loading = false;
      }
    },

    async editActivity(id, newName) {
      this.loading = true;
      try {
        const activity = this.activities.find((act) => act.id === id);
        if (!activity) return;

        const updatedActivity = { ...activity, title: newName };
        await apiClient.put(`/${id}`, updatedActivity);
        activity.title = newName;
      } catch (error) {
        console.error("Error editing activity:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});