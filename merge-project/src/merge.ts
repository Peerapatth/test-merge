export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[],
): number[] {
  const result: number[] = [];

  let i = 0;
  let j = collection_2.length - 1;
  let k = 0;

  while (i < collection_1.length || j >= 0 || k < collection_3.length) {
    let next: number;

    if (
      i < collection_1.length &&
      (j < 0 || collection_1[i] <= collection_2[j]) &&
      (k >= collection_3.length || collection_1[i] <= collection_3[k])
    ) {
      next = collection_1[i++];
    } else if (
      j >= 0 &&
      (i >= collection_1.length || collection_2[j] <= collection_1[i]) &&
      (k >= collection_3.length || collection_2[j] <= collection_3[k])
    ) {
      next = collection_2[j--];
    } else {
      next = collection_3[k++];
    }

    result.push(next);
  }

  return result;
}