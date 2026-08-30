  function showResult() {
            let lenght = Number(document.getElementById("lenght").value);
            let width = Number(document.getElementById("width").value);
            let area = (lenght * width);
            let perimeter = 2 * (lenght + width)

            //output in fronted
            document.getElementById("output").innerHTML =
                "--------------------------------------------" + "<br>" +
                "                 Answer                     " + "<br>" +
                "--------------------------------------------" + "<br>" +
                "       Area         : " + area + "<br>" +
                "       perimeter    : " + perimeter
            "--------------------------------------------"
        }