let size = 8;
let oddeven = 0;
for (let i = 0; i < size; i++) {
    oddeven = i%2;
    if (oddeven === 1) {
        console.log("# ".repeat(size/2));
    }
    else{
        console.log(" #".repeat(size/2));
    }
}