import { dataset } from "./data_set";

for (let i = 0; i <= dataset.length - 1; i++) {
  var min = dataset[i];
  var minIndex = i;
  for (let j = i + 1; j < dataset.length; j++) {
    if (dataset[j] < min) {
      min = dataset[j];
      minIndex = j;
    }
  }
  var temp = dataset[i];
  dataset[i] = min;
  dataset[minIndex] = temp;
}

console.log(dataset);
