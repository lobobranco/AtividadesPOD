export function insertionSort(vector) {
    let atual = 0
    let j
    for (let i = 1; i < vector.length; i++) {
        atual = vector[i]
        for (j = i - 1; j >= 0 && atual < vector[j]; j--) {
            vector[j + 1] = vector[j]
        }
        vector[j + 1] = atual
    }
}