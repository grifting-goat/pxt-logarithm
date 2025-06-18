//% color="#4beb36"
namespace logarithm {

    /**
     * Returns the logarithm of a number with a specified base.
     * For example, log base 10 of 100 is 2.
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
}
