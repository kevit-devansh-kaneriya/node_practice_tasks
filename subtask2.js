const timeoutPromise = (interval, intervalName) => {
    console.log(`Time: ${interval}ms, Letter: ${intervalName} - Execution started`);

    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log(" ")
            console.log(`Time: ${interval}ms, Letter: ${intervalName} - Execution completed`);
            resolve();
        }, interval);
    });
};

let main = () => {
    timeoutPromise(2000, 'A');
    timeoutPromise(1000, 'B');
    timeoutPromise(3000, 'C');
    timeoutPromise(2000, 'D');
};
main();