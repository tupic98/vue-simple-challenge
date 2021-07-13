<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-white shadow z-10" v-if="$route.meta.title">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold leading-tight text-gray-900">
          {{ $route.meta.title }}
        </h1>
      </div>
    </header>
    <main class="bg-gray-50 h-full flex-grow">
      <div class="container mx-auto">
        <router-view />
      </div>
    </main>
  </div>
</template>
