//% color="#8f2929"
namespace logarithm {

    /**
     * Returns the logarithm of a number with a specified base.
     * Returns NaN if base ≤ 0, base = 1, or number ≤ 0.
     * 
     * @param base the base of the logarithm (e.g. 2, 10)
     * @param num the number to take the logarithm of
     */
    //% block="log base $base of $num"
    //% weight=90
    //% inlineInputMode=inline
    export function logarithm(base: number, num: number): number {
        if (base <= 0 || base == 1 || num <= 0) {
            return NaN
        }
        return Math.log(num) / Math.log(base)
    }

    /**
     * Returns the natural logarithm of a number
     * Returns NaN if number ≤ 0.
     * @param num the number to take the logarithm of
     */
    //% block="ln $num"
    //% weight=90
    //% inlineInputMode=inline
    export function ln(num: number): number {
        if (num <= 0) {
            return NaN
        }
        return Math.log(num)
    }
}
