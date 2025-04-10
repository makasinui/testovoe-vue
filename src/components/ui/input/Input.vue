<template>
    <label class="w-full flex flex-col">
        <span>{{ label }}</span>
        <input
            type="text"
            :placeholder="placeholder"
            v-model="modelValue"
            class="py-2 px-4 border rounded-lg"
        />
    </label>
</template>

<script lang="ts" setup>
interface IProps {
    placeholder?: string;
    label?: string
}

defineProps<IProps>();

const modelValue = defineModel<number>();
</script>
