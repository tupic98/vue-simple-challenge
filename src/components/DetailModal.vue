<template>
  <div
    v-if="open"
    class="fixed z-10 inset-0 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="
        flex
        items-end
        justify-center
        min-h-screen
        pt-4
        px-4
        pb-20
        text-center
        sm:block
        sm:p-0
      "
    >
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
        >&#8203;</span
      >
      <div
        class="
          inline-block
          align-bottom
          bg-white
          rounded-lg
          px-4
          pt-5
          pb-4
          text-left
          overflow-hidden
          shadow-xl
          transform
          transition-all
          sm:my-8
          sm:align-middle
          sm:max-w-lg
          sm:w-full
          sm:p-6
        "
      >
        <div class="block absolute top-0 right-0 pt-4 pr-4">
          <button
            type="button"
            class="
              bg-white
              rounded-md
              text-gray-400
              hover:text-gray-500
              focus:outline-none
              focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
            "
            @click="$emit('close')"
          >
            <span class="sr-only">Close</span>
            <!-- Heroicon name: outline/x -->
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="sm:flex sm:items-start">
          <div class="mt-3 text-center sm:mt-0 sm:ml-0 sm:text-left">
            <h2
              class="text-xl leading-6 font-medium text-gray-900"
              id="modal-title"
            >
              {{ currentTask.name }}
            </h2>
            <div class="mt-5">
              <p class="text-sm text-gray-500">
                {{ currentTask.description }}
              </p>
            </div>
          </div>
        </div>
        <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse text-sm">
          Date created: {{ formatDate(currentTask.created_at) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import { XIcon } from "@heroicons/vue/solid";

export default {
  components: {
    XIcon,
  },
  props: {
    task: {
      type: Object,
      default: () => ({
        id: 0,
        name: "",
        description: "",
        created_at: "",
        completed: false,
      }),
    },
    open: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const currentTask = ref({
      ...props.task,
    });

    const formatDate = (date) => {
      const newDate = new Date(date);
      return new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(newDate);
    };

    watch(
      () => props.task,
      (task) => {
        currentTask.value = task;
      }
    );

    return {
      currentTask,
      formatDate,
    };
  },
};
</script>