<template>
    <div class="relative p-4 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 shadow-lg hover:shadow-xl transition-shadow">
    <div class="flex items-center justify-between mt-2 mb-4">
      <div class="flex items-center gap-3">
        <span class="text-2xl">{{ getFlag(from) }}</span>
        <span class="font-semibold text-gray-700">{{ from }}</span>
      </div>
      
      <div class="flex items-center gap-3">
        <span class="text-2xl">{{ getFlag(to) }}</span>
        <span class="font-semibold text-gray-700">{{ to }}</span>
      </div>
    </div>

    <div class="text-center">
      <p class="text-xs text-gray-500 mb-1"></p>
      <p class="text-2xl font-bold text-gray-800">
        <span class="text-blue-600">1</span> {{ from }} = 
        <span class="text-purple-600">{{ price }}</span> {{ to }}
      </p>
    </div>

    <div class="absolute top-2 right-2">
      <button class="p-1 hover:bg-gray-100 rounded-full transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      </button>
    </div>
    </div>
</template>

<script lang="ts" setup>
import { getFlag } from '@/utils';

interface IProps {
    from: string;
    to: string;
    price: string
}

defineProps<IProps>();
</script>
