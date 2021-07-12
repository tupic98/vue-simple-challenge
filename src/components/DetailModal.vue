<template>
  <TransitionRoot appear :show="open" as="template">
    <Dialog as="div" @close="$emit('close')">
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="min-h-screen px-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay class="fixed inset-0 bg-black opacity-30" />
          </TransitionChild>

          <span class="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>

          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <div
              class="
                inline-block
                w-full
                max-w-md
                p-6
                my-8
                overflow-hidden
                text-left
                align-middle
                transition-all
                transform
                bg-white
                shadow-xl
                rounded-2xl
              "
            >
              <DialogTitle
                as="h3"
                class="
                  text-lg
                  font-medium
                  leading-6
                  text-gray-900
                  flex
                  justify-between
                "
              >
                {{ currentTask.title }}
                <XIcon class="w-5 h-5 cursor-pointer" @click="$emit('close')" />
              </DialogTitle>
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                  {{ currentTask.description }}
                </p>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { reactive, toRef } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle,
} from "@headlessui/vue";
import { XIcon } from "@heroicons/vue/solid";

export default {
  components: {
    XIcon,
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
    open: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const currentTask = reactive({
      ...props.task,
    });

    return {
      currentTask,
    };
  },
};
</script>