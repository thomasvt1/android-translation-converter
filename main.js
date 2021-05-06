function convert(input, prefix) {
    let result = ""
    for (let [key, value] of Object.entries(input)) {
        let formattedKey = key.replaceAll(" ", "_").toLowerCase();
        result += `<string name="${prefix}${formattedKey}">${value}</string>\n`
    }
    return result;
}

console.log("Thanks for using JSON to Android Translations converter!");


function onButtonClick() {
    const input = document.getElementById("json-input").value;
    const prefix = document.getElementById("prefix-input").value;

    try {
        const json = JSON.parse(input)
        const result = convert(json, prefix);
        document.getElementById("result-text").value = result.toString();

        //Make result visible
        document.getElementById("result-div").classList.remove("invisible");
        // Make error invisible
        document.getElementById("invalid-json").classList.add("hide");
    } catch (e) {
        console.log("Parse failed");
        console.error(e);
        // Make result invisible
        document.getElementById("result-div").classList.add("invisible");
        // Make error visible
        document.getElementById("invalid-json").classList.remove("hide");
    }
}

function copyToClipboard() {
    // alert("jsid");
    var copyText = document.getElementById("result-text");

    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    document.execCommand("copy");
}