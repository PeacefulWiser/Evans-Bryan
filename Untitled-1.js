
   function minimumDistances(a) {
    // Write your code here
    const distances = [];
    for (let idx = 0; idx < a.length; idx++) {
        if(a.indexOf(a[idx]) !== a.lastIndexOf(a[idx])) {
            let minimumDistance = a.lastIndexOf(a[idx]) - a.indexOf(a[idx]);
            distances.push(minimumDistance);
        }
    }
    
    if (distances.length === 0) {
        return -1;
    } else {
        distances.sort((a, b) => (a -b));
        return distances[0];
    }

}
