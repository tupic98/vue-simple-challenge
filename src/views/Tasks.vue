<template>
  <div class="min-h-full">
    <task-list :list="taskList" />
  </div>
</template>
<script>
import { reactive } from "vue";
import TaskList from "@/components/TaskList.vue";

export default {
  components: {
    TaskList,
  },
  setup() {
    const taskList = reactive([
      {
        id: 1,
        name: "Develop the Home page",
        description:
          "For the home page, I need to do blah blah blah, and also blah blah blah to make it work and blah blah blah",
        created_at: "06/30/2021",
        completed: false,
      },
      {
        id: 2,
        name: "Learning Tailwind and Vue 3",
        description:
          "To learn these skills, I need to do blah blah blah, and also blah blah blah to make it work and blah blah blah",
        created_at: "06/30/2021",
        completed: false,
      },
      {
        id: 3,
        name: "Learning Tailwind and Vue 3",
        description:
          "To learn these skills, I need to do blah blah blah, and also blah blah blah to make it work and blah blah blah",
        created_at: "06/30/2021",
        completed: false,
      },
      {
        id: 4,
        name: "Learning Tailwind and Vue 3",
        description:
          "To learn these skills, I need to do blah blah blah, and also blah blah blah to make it work and blah blah blah",
        created_at: "07/12/2021",
        completed: true,
      },
    ]);

    return {
      taskList,
    };
  },
};
</script>
