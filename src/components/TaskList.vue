<template>
  <div class="w-full bg-white mt-5 shadow rounded-xl">
    <ul class="divide-y divide-gray-200">
      <task
        v-for="(task, i) in list"
        :key="i"
        class="first:rounded-t-xl last:rounded-b-xl"
        :task="task"
        @open:detail="openDetail"
      />
    </ul>
    <detail-modal
      :open="isDetailOpen"
      :task="currentTask"
      @close="closeDetailModal()"
    />
  </div>
</template>
<script>
import { reactive, ref } from "vue";
import Task from "@/components/Task.vue";
import DetailModal from "@/components/DetailModal.vue";

export default {
  components: {
    Task,
    DetailModal,
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const isDetailOpen = ref(false);
    const currentTask = ref({});

    const openDetail = (id) => {
      isDetailOpen.value = true;
      currentTask.value = props.list.find((t) => t.id === id);
    };

    const closeDetailModal = () => {
      isDetailOpen.value = false;
    };

    return {
      isDetailOpen,
      currentTask,
      openDetail,
      closeDetailModal,
    };
  },
};
</script>