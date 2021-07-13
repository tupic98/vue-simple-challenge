<template>
  <div
    class="w-11/12 mx-auto sm:mx-0 sm:w-full bg-white mt-5 shadow rounded-xl"
  >
    <ul class="divide-y divide-gray-200">
      <task
        v-for="(task, i) in list"
        :key="i"
        class="first:rounded-t-xl last:rounded-b-xl"
        :task="task"
        @open:detail="openDetail"
        @open:delete="openDelete"
      />
    </ul>
    <detail-modal
      :open="isDetailOpen"
      :task="currentTask"
      @close="closeDetailModal()"
    />
    <delete-modal
      :open="isDeleteOpen"
      :task="currentTask"
      @close="closeDeleteModal()"
      @delete="deleteTask"
    />
  </div>
</template>
<script>
import { ref } from "vue";
import Task from "@/components/Task.vue";
import DetailModal from "@/components/DetailModal.vue";
import DeleteModal from "@/components/DeleteModal.vue";

export default {
  components: {
    Task,
    DetailModal,
    DeleteModal,
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  setup(props, { emit }) {
    const currentTask = ref({});

    const isDetailOpen = ref(false);

    const openDetail = (id) => {
      isDetailOpen.value = true;
      currentTask.value = props.list.find((t) => t.id === id);
    };

    const closeDetailModal = () => {
      isDetailOpen.value = false;
    };

    const isDeleteOpen = ref(false);

    const openDelete = (id) => {
      isDeleteOpen.value = true;
      currentTask.value = props.list.find((t) => t.id === id);
    };

    const closeDeleteModal = () => {
      isDeleteOpen.value = false;
    };

    const deleteTask = (id) => {
      emit("delete:task", id);
      isDeleteOpen.value = false;
    };

    return {
      isDetailOpen,
      isDeleteOpen,
      currentTask,
      openDetail,
      closeDetailModal,
      openDelete,
      closeDeleteModal,
      deleteTask,
    };
  },
};
</script>