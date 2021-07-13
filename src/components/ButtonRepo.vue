<template>
  <div class="inline-flex ml-3 rounded-md shadow">
    <router-link
      :to="{ name: 'Tasks' }"
      class="
        inline-flex
        items-center
        justify-center
        px-5
        py-3
        text-base
        font-medium
        leading-6
        text-indigo-600
        transition
        duration-150
        ease-in-out
        bg-white
        border border-transparent
        rounded-md
        hover:text-indigo-500
        focus:outline-none
      "
      >{{ title }}</router-link
    >
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup() {},
};
</script>
