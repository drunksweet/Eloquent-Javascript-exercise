let flag = 0;
for (let i = 0; i < 100; i++) {
    flag = 0;
    if (i % 3 === 0) {
        flag += 1;
    }
    if (i % 5 === 0) {
        flag += 2;
    }
    switch (flag) {
        case 0:
            console.log(i);
            break;
        case 1:
            console.log("fizz");
            break;
        case 2:
            console.log("buzz");
            break;
        case 3:
            console.log("fizzbuzz");
            break;
    }
}