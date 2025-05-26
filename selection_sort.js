"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_set_1 = require("./data_set");
for (var i = 0; i <= data_set_1.dataset.length - 1; i++) {
    var min = data_set_1.dataset[i];
    var minIndex = i;
    for (var j = i + 1; j < data_set_1.dataset.length; j++) {
        if (data_set_1.dataset[j] < min) {
            min = data_set_1.dataset[j];
            minIndex = j;
        }
    }
    var temp = data_set_1.dataset[i];
    data_set_1.dataset[i] = min;
    data_set_1.dataset[minIndex] = temp;
}
console.log(data_set_1.dataset);
