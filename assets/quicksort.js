async function partition(p, r) {
    var para1 = document.getElementById("info");
    para1.innerHTML = "<h1>Quick Sort</h1><h5>QuickSort is a sorting algorithm based on the Divide and Conquer algorithm that picks an element as a pivot and partitions the given array around the picked pivot by placing the pivot in its correct position in the sorted array.</h5><h3>Algorithm</h3><h6>1 : Choose the highest index value has pivot</h6><h6>2 : Take two variables to point left and right of the list excluding pivot</h6><h6>3 : left points to the low index</h6><h6> 4 : right points to the high</h6><h6>5 : while value at left is less than pivot move right</h6><h6>6 : while value at right is greater than pivot move left</h6><h6>7 : if both step 5 and step 6 does not match swap left and right</h6><h6>8 : if left ≥ right, the point where they met is new pivot</h6><h6><b style='color: deepskyblue'>Blue</b> is Unsorted array</h6><h6><b style='color: mediumspringgreen'>Green</b> is sorted array</h6><h6><b style='color: orangered'>Orange</b>: Right array</h6><h6><b style='color: gold'>Yellow</b>: Left array</h6><h6><b style='color: blueviolet'>Purple</b> :pivot element</h6>";

    await sleep(delay);

    var i = p - 1;
    setColor(r, SELECTED);

    for (var j = p; j < r; j++) {
        await sleep(delay);

        if (arr[j] <= arr[r]) {
            i++;
            swap(i, j);
            setColor(j, RIGHT);
            setColor(i, LEFT);
        }
        else
            setColor(j, RIGHT);
    }

    if (i + 1 < r) {
        await sleep(delay);

        swap(i + 1, r);
        setColor(r, RIGHT);
        setColor(i + 1, SELECTED);
    }

    await sleep(delay);

    setColorRange(p, r, UNSORTED);

    return i + 1;
}

async function quicksort(p, r) {
    if (p < r) {
        var q = await partition(p, r);

        await quicksort(p, q - 1);

        setColorRange(p, q, SORTED);
        await quicksort(q + 1, r);

        setColorRange(q + 1, r, SORTED);
    }

    if (p == 0 && r == size - 1)
        await sleep(delay);
}
