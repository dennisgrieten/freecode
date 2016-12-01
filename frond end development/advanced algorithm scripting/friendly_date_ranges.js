function makeFriendlyDates(arr) {
    var output = [];
    var months = {
        "01": "January",
        "02": "February",
        "03": "March",
        "04": "April",
        "05": "May",
        "06": "June",
        "07": "July",
        "08": "August",
        "09": "September",
        "10": "October",
        "11": "November",
        "12": "December"
    }

    var begin = arr[0].split("-");
    var end = arr[1].split("-");

    for (var i = 0; i < 2; i++) {
        
    }
    output.push([])

    return output;
}

makeFriendlyDates(['2016-07-01', '2016-07-04']);
