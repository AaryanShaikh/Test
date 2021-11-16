var main_string =
    "Hi {{USER}}<br><br>This is dynamic mail with dynamic subject, but source is Google Document.<br><br>{{item 1}}<br>{{item 2}}<br><br><br>Thanks<br>Cheers!";

var placeholder_array = getPlaceholders();
var final_string = placeholder_replace(placeholder_array);
console.log("final_string" + final_string)

function getPlaceholders() {
    var txt = main_string;
    var placeholder = [];
    //Find the placeholders
    for (var i = 0; i <= txt.length - 1; i++) {
        if (txt.charAt(i) === '{') {
            var startFrom = i;
            i++;
            while (txt.charAt(i) != '}') {
                i++;
            }
            let endTo = i + 1
            let obj = {
                start: parseInt(startFrom),
                end: parseInt(endTo)
            }
            placeholder.push(obj)
        }
    }
    return placeholder; //Array of placeholder

}

function placeholder_replace(placeholder_array) {
    //replace placeholders with your values.
    var values_array = ["Name", "Software", "Generalist"];
    var counter = 0;
    placeholder_array.forEach((element) => {
        console.log(main_string.substring(element.start, element.end + 1));
        main_string.replace("{{USER}}", "Name")
        main_string.replace(main_string.substring(element.start, element.end + 1),
            "Name")
        console.log(main_string);
        counter++;
    })

    return main_string;
}