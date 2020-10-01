module.exports = function reverse (n) {
    let res;
    res = parseInt(n.toString().match(/[\d]/g).reverse().join(''));

    // let res = 0;
    // n = Math.abs(n);

    // while(n) {
    //     res = res*10 + n % 10;
    //     n = Math.floor( n / 10 );
    // }
    
    return res;
}
