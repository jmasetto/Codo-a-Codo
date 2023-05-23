

const btnBorrar = document.querySelector('.btnBorrar');
const btnResumen = document.querySelector('.btnResumen');
const form = document.querySelector('.form');


function calcularTotal() {
    let tipoEntrada      = document.getElementById("tipoEntrada").value;
    let cantidadEntradas = document.getElementById("cantidadEntradas").value;
    let descuento        = 0;
    
    switch (tipoEntrada) {
      case "estudiante":
        descuento = 80;
        break;
      case "trainee":
        descuento = 50;
        break;
      case "junior":
        descuento = 15;
        break;
    }
 

    let importe = 200 * cantidadEntradas * (100 - descuento) / 100;

        
    // Formatear el valor calculado con separadores de miles y 2 decimales
    let importeFormateado = importe.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2 });


    document.getElementById("totalAPagar").innerHTML = "Total a Pagar: $" + importeFormateado;
    return;
  

  /*  document.getElementById("importe").innerHTML = "El importe a pagar es: $" + importe.toFixed(2);*/
  
/**
 * toLocaleString() de JavaScript. Esta función te permite especificar el formato de visualización,
 * incluyendo el formato de los números enteros y decimales. 
 **/

}


btnResumen.addEventListener('click' , function(event){
  event.preventDefault();
  return calcularTotal();
}
);

btnBorrar.addEventListener('click' , function(event){
  event.preventDefault();
  totalAPagar.textContent = 'Total a Pagar: $0,00'; 
  form.reset(); /**limpio los valores del form */
  return;
}
);