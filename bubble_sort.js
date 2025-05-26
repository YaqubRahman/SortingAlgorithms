"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_set_1 = require("./data_set");
for (var i = 0; i <= data_set_1.dataset.length - 1; i++) {
    var swapped = false;
    for (var j = 1; j < data_set_1.dataset.length; j++) {
        if (data_set_1.dataset[j - 1] > data_set_1.dataset[j]) {
            swapped = true;
            var temp = data_set_1.dataset[j - 1];
            data_set_1.dataset[j - 1] = data_set_1.dataset[j];
            data_set_1.dataset[j] = temp;
        }
    }
    if (!swapped) {
        break;
    }
}
console.log(data_set_1.dataset);
