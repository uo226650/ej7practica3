//La tarea 5 provoca que el archivo html no sea válido. Se desestima esta validación ya que
//la plantilla inicial valida, y el html generado dinámicamente para la tarea 5 tiene fines pedagógicos

/**
 * Clase destinada a encapsular jQuery en métodos
 * y así cumplir con el uso del paradigma orientado a objetos
 * 
 * Práctica inicial para familiarizarse con jQuery
 */
class WebDinamica {

    constructor() {

        this.parrafoOculto = false;
        this.esIngles = false;
        this.textoIngles = "Marty McFly, a typical American teenager of the Eighties, is accidentally sent back to 1955 in a plutonium-powered DeLorean 'time machine' invented by a slightly mad scientist. During his often hysterical, always amazing trip back in time, Marty must make certain his teenage parents-to-be meet and fall in love - so he can get back to the future.";

        this.textoEspañol = `Relata las aventuras de Marty McFly, un adolescente rebelde e impulsivo que vive con sus padres y viaja
        accidentalmente al pasado desde 1985 su época, a 1955 la época en que sus padres se conocieron.
        Eventualmente,
        cambia los hechos específicos de la línea original de tiempo en que sus padres se conocieron y enamoraron.
        Debido a esto, Marty debe recurrir a la ayuda del Dr. Emmett Brown para reunir a sus padres de nuevo,
        asegurando
        su propia existencia y la de sus hermanos.`;
    }

    //Tarea 1 (mostrar/ocultar elementos)
    ocultar() {

        if (this.parrafoOculto) {
            $("#ocultar").show();
            this.parrafoOculto = false;
        } else {
            $("#ocultar").hide();
            this.parrafoOculto = true;
        }

    }

    //Tarea 2 (Modificar elementos)
    traducir() {
        if (this.esIngles) {
            $("#traducible").text(this.textoEspañol);//Manipular contenido
            this.esIngles = false;
            $("#traducir").attr("value", "English");
        } else {
            $("#traducible").text(this.textoIngles);
            this.esIngles = true;
            $("#traducir").attr("value", "Español"); //Manipular valor de atributos         
        }

    }

    //Tarea 3: Añadir nuevos elementos html
    añadir() {

        // Crea elementos con jQuery
        var prota2 = $("<li></li>").text("Christopher Lloyd");
        var prota3 = $("<li></li>").text("Lea Thompson");
        var prota4 = $("<li></li>").text("Crispin Glover");
        var prota5 = $("<li></li>").text("Thomas F. Wilson");

        // Insertar contenido al final del elemento #protagonistas
        $("#protagonistas").append(prota2);
        $("#protagonistas").append(prota3);
        $("#protagonistas").append(prota4);
        $("#protagonistas").append(prota5);

    }

    //Tarea 4: Eliminar elementos html
    eliminar() {
        $("h3").remove(); //Dos elem h3 en mi .html 
    }

    //Tarea 5: Recorrer todos los elementos HTML y mostrar el tipo y el padre
    recorrer() {
        $("*", document.body).each(function () {
            var etiquetaPadre = $(this).parent().get(0).tagName;
            $(this).prepend(document.createTextNode("{Padre : <" + etiquetaPadre + "> Tipo : <" + $(this).get(0).tagName + "> } "));
        });
    }

    //Tarea 6: Sumar filas y columnas de la tabla
    sumar() {
        this.sumaFilas();
        this.sumaColumnas();
    }

    sumaFilas() {
        var totalFila = 0;
        $('tr').each(function () {
            $(this).children().each(function () {
                totalFila += parseInt($(this).text());
            });
            var fila = $("<td></td>").text(totalFila);
            fila.css("color", "darkred");
            $(this).append(fila);
            totalFila = 0;
        })
    }

    sumaColumnas() {
        //Totales de las 9 columnas
        var total_col1 = 0;
        var total_col2 = 0;
        var total_col3 = 0;
        var total_col4 = 0;
        var total_col5 = 0;
        var total_col6 = 0;
        var total_col7 = 0;
        var total_col8 = 0;
        var total_col9 = 0;

        //Recorro las filas
        $('tr').each(function () {

            // .eq(0) representa la fila 1    
            total_col1 += parseInt($(this).find('td').eq(0).text());
            total_col2 += parseInt($(this).find('td').eq(1).text());
            total_col3 += parseInt($(this).find('td').eq(2).text());
            total_col4 += parseInt($(this).find('td').eq(3).text());
            total_col5 += parseInt($(this).find('td').eq(4).text());
            total_col6 += parseInt($(this).find('td').eq(5).text());
            total_col7 += parseInt($(this).find('td').eq(6).text());
            total_col8 += parseInt($(this).find('td').eq(7).text());
            total_col9 += parseInt($(this).find('td').eq(8).text());
        });
        //Construyo el html para añadir a la tabla
        var htmlFila = "<td>" + total_col1 + "</td>";
        htmlFila += "<td>" + total_col2 + "</td>";
        htmlFila += "<td>" + total_col3 + "</td>";
        htmlFila += "<td>" + total_col4 + "</td>";
        htmlFila += "<td>" + total_col5 + "</td>";
        htmlFila += "<td>" + total_col6 + "</td>";
        htmlFila += "<td>" + total_col7 + "</td>";
        htmlFila += "<td>" + total_col8 + "</td>";
        htmlFila += "<td>" + total_col9 + "</td>";

        //Creo elemento fila con jQuery
        var filaTotales = $("<tr></tr>").html(htmlFila);
        filaTotales.css("color", "darkred");
        $("table").append(filaTotales);
    }

}
var web = new WebDinamica();