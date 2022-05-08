import { watch } from "vue";

export function useWatchCharacters(value, maxChars = 100) {
    watch(value, (newValue) => {
        if (newValue.length >= maxChars) {
            alert(`You have reached the maximum number of characters of ${maxChars}.`);
        }
    })
}