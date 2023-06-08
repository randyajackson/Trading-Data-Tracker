import fs from "fs"

const addNumber = (a: number, b:number) => {
    return a + b
}

fs.writeFileSync("test.txt", "test")
console.log(addNumber(1,2))