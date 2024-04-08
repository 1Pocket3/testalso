import { isConsecutive, uniqueSorted, countOccurrences } from '@/partTwo'; // Укажите правильное имя вашего файла

describe('isConsecutive', () => {
  it('should return true if array elements are consecutive', () => {
    expect(isConsecutive([5, 2, 3, 1, 41])).toBe(false);
    expect(isConsecutive([1, 2, 3, 4, 5])).toBe(true);
  });

  it('should return false if array elements are not consecutive', () => {
    expect(isConsecutive([34, 23, 52, 12, 31])).toBe(false);
    expect(isConsecutive([7, 6, 5, 5, 3, 4])).toBe(false);
  });
});

describe('uniqueSorted', () => {
  it('should return an array with unique elements in sorted order', () => {
    expect(uniqueSorted([1, 3, 2, 2, 4, 3, 5, 6, 5])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should return an array with a single element if all elements are the same', () => {
    expect(uniqueSorted([9, 9, 9, 9, 9])).toEqual([9]);
  });

  it('should return the same array if elements are already unique and sorted', () => {
    expect(uniqueSorted([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });
});

describe('countOccurrences', () => {
  it('should return an object with counts of each element', () => {
    expect(countOccurrences([1, 3, 2, 2, 4, 3, 5, 6, 5])).toEqual({ 1: 1, 2: 2, 3: 2, 4: 1, 5: 2, 6: 1 });
  });

  it('should return an empty object for an empty array', () => {
    expect(countOccurrences([])).toEqual({});
  });
});
