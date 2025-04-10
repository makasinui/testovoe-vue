import { computed, ref, watch } from "vue"
import { useLangStore } from "../../../store/langStore";
import { storeToRefs } from "pinia";

export const useConvert = () => {
    const langStore = useLangStore();

    const { langs } = langStore;

    const { priceList } = storeToRefs(langStore);

    let activeSide: 'first' | 'second' | null = null;

    const firstLang = ref(langs[0]);
    const secondLang = ref(langs[1]);

    const firstValue = ref(0);
    const secondValue = ref(0);

    const currencyConvertingPrice = computed(() => {
        if(!priceList.value) {
            return
        }
        const currencyCode = `${firstLang.value.name.toLowerCase()}-${secondLang.value.name.toLowerCase()}`;

        return priceList.value[currencyCode as keyof typeof priceList.value] as number;
    });

    const langOptions = computed(() => langs.filter(item => item.id !== firstLang.value.id && item.id !== secondLang.value.id))

    watch(() => firstValue.value, (newValue) => {
        if(activeSide === 'second' || !currencyConvertingPrice.value) return;
        activeSide = 'first';
        secondValue.value = Number((currencyConvertingPrice.value * newValue).toFixed(2));
        activeSide = null;
    });

    watch(() => secondValue.value, (newValue) => {
        if(activeSide === 'first' || !currencyConvertingPrice.value) return;
        activeSide = 'second';
        firstValue.value = Number((newValue / currencyConvertingPrice.value).toFixed(2));
        activeSide = null;
    });

    watch(() => [firstLang.value, secondLang.value], () => {
        if(firstValue.value && currencyConvertingPrice.value) {
            secondValue.value = currencyConvertingPrice.value * firstValue.value;
        }
    })

    return {
        firstLang,
        secondLang,
        firstValue,
        langs,
        secondValue,
        priceList,
        langOptions,
        currencyConvertingPrice
    }
}