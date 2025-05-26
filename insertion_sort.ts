import { dataset } from "./data_set";

for (let i = 1; i < dataset.length; i++) {
  var j = i - 1;
  var temp = dataset[i];
  while (j >= 0 && dataset[j] > temp) {
    dataset[j + 1] = dataset[j];
    j--;
  }
  dataset[j + 1] = temp;
}

console.log(dataset);
