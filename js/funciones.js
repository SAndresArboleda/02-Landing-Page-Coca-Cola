/* $(document) o */ jQuery(document).ready(listo);

function listo(){
    jQuery(".hamb").click(function(e){
        e.preventDefault(); /*preventDefault: Eliminamos la funcion natural que tienen los # (id) que al hacer click en la hamb devuelve a la primera pagina*/
        jQuery("header .container nav").toggleClass("open")
        jQuery(".hamb i").toggleClass("fa-times");  /*Este lleva a que cuando entre al menu hamb para salir cambie el icono hamb por una X*/

    })

    jQuery("header .container nav a").click(function(){
        
        jQuery("header .container nav").removeClass("open")
        jQuery(".hamb i").removeClass("fa-times");  /*Para que se cierre el menu*/
        var dev = jQuery(this).attr("href");  /*this: hace referencia al elemeneto que le estoy haciendo click
        attr: para optener el valor del atributo ej: herf */
        // alert(dev)
        jQuery("html,body").animate({    /*animate: para hacer una animacion */
            "scrollTop": jQuery(dev).offset().top  -67 /*offset (position):desde el punto de inicio al final decrime cual es su valor  
            el -67 es para que empiece a mostrar cada pagina 67 mas abajo del inicio de la pagina*/
        })  
    })
}