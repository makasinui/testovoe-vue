<template>
    <main class="mx-4 mx-auto w-full flex flex-col gap-2 justify-center items-center">
        <h1 class="text-2xl">Конвертация валют</h1>
        <div class="w-1/2 flex flex-col border rounded-lg p-24 gap-2">
            <Dropdown v-model="firstLang" :items="langOptions" />
            <Input v-model="firstValue" />
            <Dropdown v-model="secondLang" :items="langOptions" />
            <Input v-model="secondValue" />
        </div>
    </main>
</template>

<script setup lang="ts">
import { Dropdown, Input } from '@/components/ui';
import { useConvert } from './composable';

const {
    firstLang,
    secondLang,
    firstValue,
    secondValue,
    langOptions,
} = useConvert();
</script>
