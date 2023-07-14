var heapSize;

function left(i) {
    return 2 * i + 1;
}

function right(i) {
    return 2 * i + 2;
}

async function maxHeapify(i) {
    var para1 = document.getElementById("info");
    para1.innerHTML = "<h1>Heap Sort</h1><h5>Heap sort is a comparison-based sorting technique based on Binary Heap data structure. It is similar to the selection sort where we first find the minimum element and place the minimum element at the beginning. Repeat the same process for the remaining elements.</h5><h3>Algorithm</h3><h6>1:Construct a Binary Tree with given list of Elements.</h6><h6>2:Transform the Binary Tree into Min Heap.</h6><h6>3:Delete the root element from Min Heap using Heapify method.</h6><h6> 4:Put the deleted element into the Sorted list.</h6><h6>5:Repeat the same until Min Heap becomes empty</h6><h6>6:Display the sorted list.</h6><h6> <b style='color: deepskyblue'>Blue</b> :Unsorted array</h6><h6><b style='color: mediumspringgreen'>Green</b> :Sorted array</h6><h6><b style='color: orangered'>Orange</b>: Right element</h6><h6><b style='color: gold'>Yellow</b> :Left element</h6><h6><b style='color: blueviolet'>Purple</b> :Selected element</h6><h6><b style='color: crimson'>Red</b> : Compare</h6>";



    var l = left(i);
    var r = right(i);
    var largest, temp;

    setColor(i, COMPARE);
    if (l < heapSize)
        setColor(l, LEFT);
    if (r < heapSize)
        setColor(r, RIGHT);

    await sleep(delay);

    if (l < heapSize && arr[l] > arr[i])
        largest = l;
    else
        largest = i;

    if (r < heapSize && arr[r] > arr[largest])
        largest = r;

    if (l < heapSize)
        setColor(l, UNSORTED);
    if (r < heapSize)
        setColor(r, UNSORTED);
    setColor(largest, SELECTED);

    await sleep(delay);

    if (largest != i) {
        swap(i, largest);
        setColor(largest, COMPARE);
        setColor(i, SELECTED);
        await sleep(delay);

        setColor(largest, UNSORTED);
        setColor(i, UNSORTED);

        await maxHeapify(largest);
    }
    else
        setColor(i, UNSORTED);
}

async function buildMaxHeap() {
    heapSize = size;

    for (var i = Math.floor(size / 2) - 1; i >= 0; i--)
        await maxHeapify(i);
}

async function heapsort() {
    await sleep(delay);

    await buildMaxHeap();

    for (var i = size - 1; i > 0; i--) {
        setColor(0, SELECTED);
        setColor(i, COMPARE);
        await sleep(delay);

        setColor(0, COMPARE);
        setColor(i, SELECTED);
        swap(0, i);
        heapSize--;
        await sleep(delay);

        setColor(i, SORTED);

        await maxHeapify(0);
    }

    setColor(0, SORTED);
}
