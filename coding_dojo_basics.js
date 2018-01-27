const settingAndSwapping = (number, name) => {
    let temp = name;
    name = number;
    number = temp;
    console.log(name, number)
}
//settingAndSwapping(42, 'seth')


const printAndCount = () => {
    let i = 0;
    while (i < 60000) {
        if(i%6 === 0) {
            console.log(i)
        }
        i++;
    }
}
//printAndCount()

const leapYear = (year) => {
    if (year % 400 == 0) {
        console.log(true)
        return true;
    } else if (year / 400 == 0) {
        if (year / 100 == 0) {
            console.log(false)
            return false;
        }else {
            console.log(true)
            return true;
        }
    }
    else console.log(year / 400)
}
//leapYear(2016)

const checkPalandrom = (str) => {
    let reg = /[\W_]/g;
    //changes to Lowercase
    let newStr = str.toLowerCase().replace(reg, '')

    //reverses toLowerCaseString
    let reverseStr = newStr.split('').reverse().join('')
    
    return newStr === reverseStr ? true : false;

}

console.log(checkPalandrom('race2222eCAR'))