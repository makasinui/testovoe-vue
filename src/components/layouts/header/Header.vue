
<template>
    <header class="mx-4 py-2">
        <nav>
            <ul class="flex justify-between gap-2 text-xl">
                <li>
                    <RouterLink
                    class="hover:text-black/30 transition-colors"
                    to="/"
                    >
                        Главная
                    </RouterLink>
                    <RouterLink
                    class="hover:text-black/30 transition-colors"
                    to="/convert"
                    >
                        Конвертация
                    </RouterLink>
                </li>
                <li>
                    <Dropdown
                        :items="langs"
                        v-model="currentLang"
                        @update:modelValue="changeLang"
                    />
                </li>
            </ul>
        </nav>
    </header>
</template>
<script setup lang="ts">
import { Dropdown } from '@/components/ui';
import { useLangStore } from '@/store/langStore';
import { storeToRefs } from 'pinia';

const langStore = useLangStore();

const { currentLang } = storeToRefs(langStore);
const { changeLang, langs } = langStore;
</script>
