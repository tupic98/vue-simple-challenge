<template>
  <div class="min-h-full">
    <label for="search" class="sr-only">Search</label>
    <div
      class="
        relative
        rounded-md
        shadow-sm
        mt-4
        w-11/12
        mx-auto
        sm:mx-0
        sm:w-8/12
        md:w-7/12
        lg:w-5/12
        xl:w-3/12
      "
    >
      <div
        class="
          absolute
          inset-y-0
          left-0
          pl-3
          flex
          items-center
          pointer-events-none
        "
      >
        <!-- Heroicon name: solid/search -->
        <svg
          class="h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <input
        v-model="search"
        type="search"
        name="search"
        id="search"
        class="
          focus:ring-pink-500
          focus:border-pink-500
          block
          w-full
          pl-10
          sm:text-sm
          border-gray-300
          rounded-md
        "
        placeholder="Search"
      />
    </div>
    <task-list :list="filteredTaskList" @delete:task="deleteTask" />
  </div>
</template>
<script>
import { ref, computed } from "vue";
import TaskList from "@/components/TaskList.vue";

export default {
  components: {
    TaskList,
  },
  setup() {
    const taskList = ref([
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
        name: "Learning Tailwind and Nuxt",
        description:
          "To learn these skills, I need to do blah blah blah, and also blah blah blah to make it work and blah blah blah",
        created_at: "06/30/2021",
        completed: false,
      },
      {
        id: 3,
        name: "Learning Tailwind and Vue 2",
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

    const search = ref("");

    const filteredKeys = ["name", "description"];

    const filteredTaskList = computed(() =>
      taskList.value.filter((task) =>
        Object.keys(task).some((key) => {
          if (filteredKeys.includes(key)) {
            return task[key].toLowerCase().includes(search.value.toLowerCase());
          }
        })
      )
    );

    const deleteTask = (id) => {
      taskList.value = taskList.value.filter((t) => t.id !== id);
    };

    return {
      taskList,
      deleteTask,
      search,
      filteredTaskList,
    };
  },
};
</script>
