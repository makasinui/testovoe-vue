<template>
    <h1 class="text-2xl">Курс валют</h1>
    <div class="flex gap-2 mt-2">
        <ExchangeInfo
            v-for="currency in currencyToShow"
            :to="currentLang.name"
            :from="currency.name"
            :price-list="currenciesPrice"
            @refresh="fetchCurrencies"
        />
    </div>
</template>

<script lang="ts" setup>
import { httpGetCurrency } from '@/api/exchange/exchange.api';
import { ExchangeInfo } from '@/components/ui';
import { useLangStore } from '@/store/langStore';
import { storeToRefs } from 'pinia';
import { computed, onMounted, ref } from 'vue';

const langStore = useLangStore();

const { currentLang } = storeToRefs(langStore);
const { langs } = langStore;

const currencyToShow = computed(() => langs.filter((lang) => lang.id !== currentLang.value.id));
const currenciesPrice = ref();

const fetchCurrencies = async () => {
    try {
        currenciesPrice.value = await httpGetCurrency();    
    } catch(err) {
        console.error(err);
    }
}

onMounted(async () => {
    await fetchCurrencies();
});
</script>
