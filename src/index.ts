function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

(async () => { 
    while (true) {
        console.log("hello world :) = ", new Date )
        await delay(5000);

    }
})();