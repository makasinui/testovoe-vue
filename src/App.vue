<template>
    <Header />
    <RouterView />
</template>

<script lang="ts" setup>
import { useLangStore } from '@/store/langStore';
import Header from './components/layouts/header/Header.vue';
import { storeToRefs } from 'pinia';
import { httpGetCurrency } from '@/api/exchange/exchange.api';
import { onMounted } from 'vue';

const langStore = useLangStore();

const { priceList } = storeToRefs(langStore);

const fetchCurrencies = async () => {
    try {
        priceList.value = await httpGetCurrency();
    } catch(err) {
        console.error(err);
    }
}

onMounted(async () => {
    await fetchCurrencies();
});
</script>
