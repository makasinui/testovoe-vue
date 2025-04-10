<template>
    <div class="flex flex-col w-fit text-black">
        <div
            class="flex px-4 py-2 gap-4 rounded-sm items-center bg-black/40 duration-200 transition-all"
            :class="{ 'bg-white': isOpen }"
            @click.stop="onOpen"
        >
            <span>{{ currentItem }}</span>
        </div>
        <div class="bg-white gap-4 px-4 py-2 flex flex-coll w-full duration-200 transition-all" v-if="isOpen">
            <span v-for="item in items" @click.stop="onSelect(item)" :key="item.id" class="text-sm">
                {{ item.name }}
            </span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { IDropdownItem } from '@/types';
import { computed, ref } from 'vue';

interface IProps {
    items: IDropdownItem[]
}

const props = defineProps<IProps>();

const modelValue = defineModel<IDropdownItem>();

const isOpen = ref(false);

const currentItem = computed(() => modelValue.value?.name)

const onOpen = () => isOpen.value = !isOpen.value;

const onSelect = (item: IDropdownItem) => {
    modelValue.value = item;
}

</script>
