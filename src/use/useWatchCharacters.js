import { watch } from "vue";

export function useWatchCharacters(value) {
    watch(value, (newValue) => {
        if (newValue.length >= 100) {
            alert('You have reached the maximum number of characters.');
        }
    })
}