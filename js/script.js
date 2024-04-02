// const xmlFormatter = require('xml-formatter');


function clear() {
    document.getElementById("xml_input").value = "";
    document.getElementById("xml_output").value = "";
    
}

function prettify() {

    var xml_input = document.getElementById("xml_input");
    var xml_output = document.getElementById("xml_output");


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

        // focus to output
        xml_output.focus();
        //scroll to output
        botonera = document.getElementById("botonera");
        //scroll in top
        botonera.scrollIntoView();
    
        //set textarea heigth to content
        
        // xml_output.style.height = xml_count_lines * 20 + "px";





    
    
        
        //copy to clipboard

        copyToClipboard();

}

function copyToClipboard() {
    var xml_output = document.getElementById("xml_output");
    xml_output.select();
    document.execCommand("copy");
}