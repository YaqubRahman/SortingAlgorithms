"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_set_1 = require("./data_set");
for (var i = 1; i < data_set_1.dataset.length; i++) {
    var j = i - 1;
    var temp = data_set_1.dataset[i];
    while (j >= 0 && data_set_1.dataset[j] > temp) {
        data_set_1.dataset[j + 1] = data_set_1.dataset[j];
        j--;
    }
    data_set_1.dataset[j + 1] = temp;
}
console.log(data_set_1.dataset);
