<template>
  <li
    class="
      relative
      bg-white
      py-5
      px-4
      transition
      duration-300
      ease-in-out
      flex
      justify-between
      items-center
    "
  >
    <input
      :id="currentTask.id"
      v-model="currentTask.completed"
      type="checkbox"
      class="
        rounded
        text-blue-500
        mr-10
        pointer-events-auto
        focus:outline-none
        focus:ring-transparent
        hover:cursor-pointer
        transition
        duration-300
        ease-in-out
      "
    />
    <div class="flex-grow">
      <div class="flex justify-between items-stretch space-x-3">
        <div class="flex-1">
          <div class="min-w-0 flex-1">
            <div
              class="block focus:outline-none cursor-pointer"
              :class="{
                'pointer-events-none resize-none': currentTask.completed,
              }"
              @click="$emit('open:detail', currentTask.id)"
            >
              <p
                class="text-lg font-medium text-gray-900 truncate"
                :class="{ 'text-gray-600 line-through': currentTask.completed }"
              >
                {{ currentTask.name }}
              </p>
            </div>
          </div>

          <div class="mt-1">
            <p
              class="line-clamp-1 text-sm text-gray-600 pr-16"
              :class="{ 'text-gray-500 line-through': currentTask.completed }"
            >
              {{ currentTask.description }}
            </p>
          </div>
        </div>
        <div class="flex flex-col justify-between items-end">
          <time
            v-show="timeSince(currentTask.created_at)"
            :datetime="currentTask.created_at"
            class="flex-shrink-0 whitespace-nowrap text-sm text-gray-500"
          >
            {{ timeSince(currentTask.created_at) }}
          </time>
          <div class="flex space-x-2">
            <TrashIcon
              class="
                h-5
                w-5
                text-gray-500
                hover:text-gray-900
                transition
                cursor-pointer
              "
            />
            <PencilIcon
              class="
                h-5
                w-5
                text-gray-500
                hover:text-gray-900
                transition
                cursor-pointer
              "
            />
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import { reactive, ref } from "vue";
import { TrashIcon, PencilIcon } from "@heroicons/vue/solid";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle,
} from "@headlessui/vue";

export default {
  components: {
    TrashIcon,
    PencilIcon,
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogTitle,
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
  },
  setup(props) {
    const isOpen = ref(true);

    const timeSince = (date) => {
      const date1 = new Date(date);
      const date2 = new Date(Date.now());
      const timeDifference = date2.getTime() - date1.getTime();

      const dayDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
      if (dayDifference === 0) return "Today";
      return `${dayDifference} ${dayDifference === 1 ? "day" : "days"} ago`;
    };

    const closeModal = () => {
      isOpen.value = false;
    };

    const openModal = () => {
      isOpen.value = true;
    };

    const currentTask = reactive({
      ...props.task,
    });

    return {
      currentTask,
      timeSince,
      isOpen,
      closeModal,
      openModal,
    };
  },
};
</script>