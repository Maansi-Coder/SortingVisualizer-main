async function insertionSort() {
    var para1 = document.getElementById("info");
    para1.innerHTML = "<h1>Insertion Sort</h1><h5>Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.</h5><h3>Algorithm</h3><h5>1.The first element in the array is assumed to be sorted.Take the second element and store it separately in key.</h5><h5>2.Now, the first two elements are sorted. Take the third element and compare it with the elements on the left of it.</h5><h5>3.Similarly, place every unsorted element at its correct position.</h5><h6> <b style='color: deepskyblue'>Blue</b> :Unsorted array</h6><h6><b style='color: mediumspringgreen'>Green</b> :Sorted array</h6><h6><b style='color: crimson'>Red</b>: Compare</h6><h6><b style='color: blueviolet'>Purple</b> :Selected element</h6>";
    var i, j, key;
    await sleep(delay);

    setColor(0, SELECTED);
    await sleep(delay);

    setColor(0, SORTED);

    for (i = 1; i < size; i++) {
        await sleep(delay);

        setColor(i, SELECTED);
        await sleep(delay);

        j = i - 1;
        key = arr[i];

        while (j >= 0 && arr[j] > key) {
            setColor(j, COMPARE);
            await sleep(delay);

            swap(j, j + 1);
            setColor(j, SELECTED);
            setColor(j + 1, COMPARE);
            await sleep(delay);

            setColor(j + 1, SORTED);
            await sleep(delay);

            j--;
        }

        setColor(j + 1, SORTED);
    }
}
