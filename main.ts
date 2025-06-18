
//% color="#4beb36"
namespace logarithm {

    /**
     * loge
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