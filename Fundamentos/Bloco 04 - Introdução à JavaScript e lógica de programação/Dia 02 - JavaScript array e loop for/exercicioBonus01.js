
let number = [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54];
for (let index = 1; index < number.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (number[index] < number[secondIndex]) {
        let position = number[index];
        number[index] = number[secondIndex];
        number[secondIndex] = position;
      }
    }
  }

  console.log(number);