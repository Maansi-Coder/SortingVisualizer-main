async function selectionSort() {
    var para1 = document.getElementById("info");

    para1.innerHTML = "<h1>Selection Sort</h1><h5>Selection sort is a simple and efficient sorting algorithm that works by repeatedly selecting the smallest (or largest) element from the unsorted portion of the list and moving it to the sorted portion of the list. </h5><h3>Algorithm</h3><h5> 1: Set Min to location 0 in Step 1.</h5><h5> 2: Look for the smallest element on the list. </h5><h5>3: Replace the value at location Min with a different value. </h5><h5> 4: Continue until the list is sorted.</h5><h6> <b style='color: deepskyblue'>Blue</b> : Unsorted array</h6><h6><b style='color: mediumspringgreen'>Green</b> :Sorted array</h6><h6><b style='color: orangered'>Red</b>: Compare</h6><h6><b style='color: blueviolet'>Purple</b> :Selected Element</h6>";



    var i, j, min_idx;

    for (i = 0; i < size - 1; i++) {
        await sleep(delay);

        min_idx = i;
        setColor(min_idx, SELECTED);

        for (j = i + 1; j < size; j++) {
            await sleep(delay);

            setColor(j, COMPARE);

            await sleep(delay);

            if (arr[j] < arr[min_idx]) {
                setColor(min_idx, UNSORTED);
                min_idx = j;
                setColor(min_idx, SELECTED);
                await sleep(delay);
            }
            else
                setColor(j, UNSORTED);
        }

        await sleep(delay);

        if (min_idx != i) {
            setColor(i, COMPARE);
            await sleep(delay);

            setColor(min_idx, COMPARE);
            setColor(i, SELECTED);
            swap(min_idx, i);
            await sleep(delay);
        }

        setColor(min_idx, UNSORTED);
        setColor(i, SORTED);
    }

    setColor(size - 1, SORTED);
}
