import { dataset } from "./data_set";

for (let i = 0; i <= dataset.length - 1; i++) {
  var swapped = false;
  for (let j = 1; j < dataset.length; j++) {
    if (dataset[j - 1] > dataset[j]) {
      swapped = true;
      var temp = dataset[j - 1];
      dataset[j - 1] = dataset[j];
      dataset[j] = temp;
    }
  }
  if (!swapped) {
    break;
  }
}

console.log(dataset);
