import { defineStore } from 'pinia';

export const useActivityStore = defineStore('activityStore', {
  state: () => ({
    activities: JSON.parse(localStorage.getItem('activities')) || [],
  }),
  actions: {
    addActivity(name) {
      if (!name.trim()) return;
      const newActivity = { id: Date.now(), name, completed: false };
      this.activities.push(newActivity);
      this.saveActivities();
    },
    toggleActivity(id) {
      const activity = this.activities.find(act => act.id === id);
      if (activity) {
        activity.completed = !activity.completed;
        this.saveActivities();
      }
    },
    deleteActivity(id) {
      this.activities = this.activities.filter(act => act.id !== id);
      this.saveActivities();
    },
    editActivity(id, newName) {
      const activity = this.activities.find(act => act.id === id);
      if (activity && newName.trim()) {
        activity.name = newName;
        this.saveActivities();
      }
    },
    saveActivities() {
      localStorage.setItem('activities', JSON.stringify(this.activities));
    }
  }
});
