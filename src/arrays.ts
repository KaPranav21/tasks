/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    console.log(numbers);
    if (numbers.length == 0) {
        return [];
    } else if (numbers.length == 1) {
        const xArr = [...numbers, ...numbers];
        return xArr;
    } else {
        const yArr = [...numbers];
        yArr.splice(1, yArr.length - 2);
        return yArr;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const xArr = numbers.map((xArr: number): number => xArr * 3);
    return xArr;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const yArr = numbers.map((xStr: string): number =>
        isNaN(parseInt(xStr)) ? 0 : parseInt(xStr)
    );
    return yArr;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const yArr = amounts.map(
        (xStr: string): string => (xStr = xStr.replace("$", ""))
    );
    const zArr = yArr.map((xStr: string): number =>
        isNaN(parseInt(xStr)) ? 0 : parseInt(xStr)
    );
    return zArr;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const yArr = messages.filter(
        (xStr: string): boolean => !xStr.includes("?")
    );
    const zArr = yArr.map((xStr: string): string =>
        xStr.includes("!") ? xStr.toUpperCase() : xStr
    );
    return zArr;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const yArr = words.filter((xStr: string): boolean => xStr.length < 4);
    return yArr.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length == 0) {
        return true;
    } else {
        return colors.every(
            (xStr: string): boolean =>
                xStr == "red" || xStr == "blue" || xStr == "green"
        );
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length == 0) {
        return "0=0";
    }
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const str = sum.toString() + "=" + addends.join("+");
    return str;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    if (values.every((price: number): boolean => price > 0)) {
        const sum = values.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        const fArr = [...values];
        fArr.push(sum);
        return fArr;
    } else {
        const negInd = values.findIndex((xNum: number): boolean => xNum < 0);
        const myArr = [...values];
        const a = myArr.slice(0, negInd);

        const sum = a.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        const xArr = [...values];
        xArr.splice(negInd + 1, 0, sum);
        return xArr;
    }
}
