function clear() {
    document.getElementById("xml_input").value = "";
    document.getElementById("xml_output").value = "";
    
}

function prettify() {

    var xml_input = document.getElementById("xml_input");
    var xml_output = document.getElementById("xml_output");


    if (xml_input.value == "") {
        alert("Please enter XML code to prettify");
        return;
    }
    //define la data a enviar
    const data = {
        "xml_input": xml_input.value
    };


    const requestbody = JSON.stringify(data);

    //realiza la peticion a la API
    fetch("https://mr8ugger.pythonanywhere.com/xmlPretty", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: requestbody
    })
        .then(response => response.json())
        .then
        (

            data => {
                xml_output.value = data["xml_output"];
                xml_count_lines = xml_output.value.split("\n").length;
                xml_output.style.height = xml_count_lines * 20 + "px";
            }
        )
        .catch(error => console.log(error));

        //Focus to output and scroll into view button panel
        xml_output.focus();
        botonera = document.getElementById("botonera");
        botonera.scrollIntoView();
        
    
        //copy to clipboard

        copyToClipboard();

}

function copyToClipboard() {
    var xml_output = document.getElementById("xml_output");
    xml_output.select();
    document.execCommand("copy");
}