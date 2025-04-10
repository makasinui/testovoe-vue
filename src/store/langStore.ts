import { defineStore } from "pinia";
import { ref } from "vue";
import type { IDropdownItem } from "../types";

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

    const changeLang = (id: number) => {
        const langToChange = langs.find(item => item.id === id);
        if(!langToChange) {
            return
        };

        currentLang.value = langToChange;
    }

    return {
        langs,
        currentLang,
        changeLang
    }
});