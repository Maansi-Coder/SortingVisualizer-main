async function merge(p, q, r) {
    var para1 = document.getElementById("info");

    para1.innerHTML = "<h1>Merge Sort</h1><h5>Merge sort is defined as a sorting algorithm that works by dividing an array into smaller subarrays, sorting each subarray, and then merging the sorted subarrays back together to form the final sorted array.</h5><h3>Algorithm</h3><h5>1 : if it is only one element in the list it is already sorted, return.</h5><h5>2 : divide the list recursively into two halves until it can no more be divided.</h5><h5>3 : merge the smaller lists into new list in sorted order.</h5><h6> <b style='color: deepskyblue'>Blue</b> : Unsorted array</h6><h6><b style='color: mediumspringgreen'>Green</b> : Sorted array</h6><h6><b style='color: orangered'>Orange</b>: Right Element</h6><h6><b style='color: gold'>Yellow</b>: Left Element</h6><h6><b style='color: blueviolet'>Purple</b> :Selected Element</h6>";

    await sleep(delay);

    var i, j;
    var n1 = q - p + 1;
    var n2 = r - q;
    var L = [];
    var R = [];

    for (i = 0; i < n1; i++) {
        L.push(arr[p + i]);
        setColor(p + i, LEFT);
    }
    for (j = 0; j < n2; j++) {
        R.push(arr[q + j + 1]);
        setColor(q + j + 1, RIGHT);
    }

    L.push(Infinity);
    R.push(Infinity);

    i = 0;
    j = 0;

    for (var k = p; k <= r; k++) {
        await sleep(delay);

        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }

        setHeight(k, arr[k]);
        setColor(k, SELECTED);
    }

    await sleep(delay);

    if (p == 0 && r == size - 1)
        setColorRange(p, r, SORTED);
    else
        setColorRange(p, r, UNSORTED);
}

async function mergeSort(p, r) {
    if (p < r) {
        var q = Math.floor((p + r) / 2);

        await mergeSort(p, q);

        await mergeSort(q + 1, r);

        await merge(p, q, r);
    }
}
