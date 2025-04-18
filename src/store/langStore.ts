import { defineStore } from "pinia";
import { ref } from "vue";
import type { IDropdownItem, TCurrency } from "../types";

export const useLangStore = defineStore('langStore', () => {
    const langs: IDropdownItem[] = [
        {
            id: 1,
            name: 'USD'
        },
        {
            id: 2,
            name: 'EUR'
        },
        {
            id: 3,
            name: 'RUB'
        }
    ];

    const currentLang = ref(langs[2]);
    const priceList = ref<TCurrency[]>();

    const changeLang = (langItem: IDropdownItem) => {
        if(!langItem) {
            return
        };

        currentLang.value = langItem;
    }

    return {
        langs,
        currentLang,
        priceList,
        changeLang
    }
});