import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useInteressesStores = defineStore('interesses', () => {
    const ids = ref([])
    const total = computed(()=> ids.value.length)

    function temInteresse(id) {
        return ids.value.includes(String(id))
    }

    function alternar(id) {
        const idNormalizado = String(id)

        if (temInteresse(idNormalizado)) {
        ids.value = ids.value.filter(
            idSalvo => idSalvo !== idNormalizado
        )
        } else {
        ids.value.push(idNormalizado)
        }
    }

    return { ids, total, temInteresse, alternar }
})