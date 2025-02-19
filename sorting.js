// Bubble sort
function bbsort(array) {
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
  return array
}
console.log(bbsort([9, 3, 6, 2, 8, 1, 4]))

// Selection Sort
function selection(array) {
  let min

  for (let i = 0; i < array.length - 1; i++) {
    min = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) min = j
    }
    let temp = array[min]
    array[min] = array[i]
    array[i] = temp
  }
  return array
}

console.log(selection([9, 3, 6, 2, 8, 1, 4]))

// Insertion Sort

function insertion(array) {
  let temp
  for (let i = 1; i < array.length; i++) {
    temp = array[i]
    for (var j = i - 1; array[j] > temp; j--) {
      array[j + 1] = array[j]
    }
    array[j + 1] = temp
  }
  return array
}

console.log(insertion([9, 3, 6, 2, 8, 1, 4]))

function insertion2(array) {
  let temp

  for (let i = 1; i < array.length; i++) {
    temp = array[i]
    let j = i - 1

    while (array[j] > temp) {
      array[j + 1] = array[j]
      j--
    }
    array[j + 1] = temp
  }

  return array
}

console.log(insertion2([9, 3, 6, 2, 8, 1, 4]))
