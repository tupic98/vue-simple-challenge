<script>
import { defineComponent } from 'vue'
import ButtonRepo from '@/components/ButtonRepo.vue'

export default defineComponent({
  components: { ButtonRepo },
})
</script>

<template>
    <div class="bg-gray-50">
      <div
        class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
      >
        <h2
          class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
        >
          Ready to dive in?
          <br />
          <span class="text-indigo-600">Let's start your test! Good luck!</span>
        </h2>
      </div>
    </div>
</template>
