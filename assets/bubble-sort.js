async function bubbleSort() {
    var para1 = document.getElementById("info");

    para1.innerHTML = "<h1>Bubble sort</h1> <h5>Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order.</h5> <h3>Algorithm</h3> <h5>1.Start with the first element.</h5> <h5>2.Compare the current element with the next element.</h5> <h5>3.If the current element is greater than the next element, then swap both the elements.If not, move to the next element.</h5> <h5>4.Repeat steps 1 to 3 until we get the sorted list</h5> <h6> <b style='color: deepskyblue'>Blue</b> :Unsorted array</h6><h6><b style='color: mediumspringgreen'>Green</b> :Sorted array</h6><h6><b style='color: crimson'>Red</b>: Compare</h6>";


    var i, j;
    await sleep(delay);

    for (i = 0; i < size - 1; i++) {
        for (j = 0; j < size - i - 1; j++) {
            await sleep(delay);

            setColor(j, COMPARE);
            setColor(j + 1, COMPARE);
            await sleep(delay);

            if (arr[j] > arr[j + 1]) {
                swap(j, j + 1);
                await sleep(delay);
            }

            setColor(j, UNSORTED);
            setColor(j + 1, UNSORTED);
        }

        await sleep(delay);

        setColor(j, SORTED);
    }

    setColor(0, SORTED);
    var para1 = document.getElementById("info");


}
