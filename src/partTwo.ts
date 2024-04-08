// Задача 1
export const isConsecutive = (arr: number[]): boolean => {
    arr.sort((a, b) => a - b);
    return arr.every((num, index) => index === 0 || num === arr[index - 1] + 1);
}

// Примеры использования
isConsecutive([5, 2, 3, 1, 41]); // true
isConsecutive([34, 23, 52, 12, 31]); // false
isConsecutive([7, 6, 5, 5, 3, 4]); // false

// Задача 2
export const uniqueSorted = (arr: number[]): number[] => [...new Set(arr)].sort((a, b) => a - b);

// Примеры использования
uniqueSorted([1, 3, 2, 2, 4, 3, 5, 6, 5]); // [1, 2, 3, 4, 5, 6]
uniqueSorted([9, 9, 9, 9, 9]); // [9]
uniqueSorted([1, 2, 3, 4, 5]); // [1, 2, 3, 4, 5]

// Задача 3
export const countOccurrences = (arr: number[]): { [key: number]: number } => {
    return arr.reduce((count: { [key: number]: number }, num) => {
        count[num] = (count[num] || 0) + 1;
        return count;
    }, {});
}

// Пример использования
countOccurrences([1, 3, 2, 2, 4, 3, 5, 6, 5]); // {1: 1, 3: 2, 2: 2, 4: 1, 5: 2, 6: 1}
