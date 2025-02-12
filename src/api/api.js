export default {
    getActivities: () => JSON.parse(localStorage.getItem('activities')) || [],
    addActivity: (activity) => {
      const activities = JSON.parse(localStorage.getItem('activities')) || [];
      activities.push(activity);
      localStorage.setItem('activities', JSON.stringify(activities));
    },
    deleteActivity: (id) => {
      const activities = JSON.parse(localStorage.getItem('activities')) || [];
      const updatedActivities = activities.filter(act => act.id !== id);
      localStorage.setItem('activities', JSON.stringify(updatedActivities));
    },
    toggleActivity: (id) => {
      const activities = JSON.parse(localStorage.getItem('activities')) || [];
      const updatedActivities = activities.map(act =>
        act.id === id ? { ...act, completed: !act.completed } : act
      );
      localStorage.setItem('activities', JSON.stringify(updatedActivities));
    }
  };
  