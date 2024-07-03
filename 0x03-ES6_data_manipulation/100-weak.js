export const weakMap = new WeakMap();

// Export a new function named queryAPI
export function queryAPI(endpoint) {
  // Check if the endpoint is already in the weakMap
  if (!weakMap.has(endpoint)) {
    // If not, set it with an initial count of 1
    weakMap.set(endpoint, 1);
  } else {
    // If it is, increment the count
    const count = weakMap.get(endpoint);
    weakMap.set(endpoint, count + 1);

    // If the count is >= 5, throw an error
    if (count + 1 >= 5) {
      throw new Error('Endpoint load is high');
    }
  }
}
