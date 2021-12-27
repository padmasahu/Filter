//it filters the array and returns the elements that are true for the condition.


    //in my logic:
function filter(arr, filterFunc) {
        const filterArr = []; // empty array
// loop though array
        for(let i=0;i<arr.length;i++) {
            const result = filterFunc(arr[i], i, arr);
// push the current element if result is true
            if(result)
                filterArr.push(arr[i]);
        }
        return filterArr;
    }

    let arr = [10,20,35,42,45];
//new filter function
    const result = filter(arr,num => num % 2 === 0);
    console.log(result);
