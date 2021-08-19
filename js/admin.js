//agregamos variantes disponibles y adiciones disponibles al selector
    //VARIANTES
    var sel_variantes = document.getElementById("sel-variantes-disponibles");
    var sel_adiciones = document.getElementById("sel-adiciones-disponibles");
    var input_variantes =  document.getElementById("input-variantes-disponibles");
    var input_adiciones = document.getElementById("input-adiciones-disponibles");
    //validar que el campo del imput  este lleno   al presionar el boton de agregar      
    document.querySelector(".btn-add-variantes").addEventListener("click", function(){        
        if(!input_variantes.value == ""){                                
            //primero eliminarmos la option que decia "Ninguna"   
            if (sel_variantes[0].value == "Ninguna" ){
                sel_variantes.remove(sel_variantes[0]);
            }else{
                
            }
            const option = document.createElement('option');
            const valor = input_variantes.value; //le pasamos al option creado el valor escrito en el input
            option.value = valor;
            option.text = valor;
            sel_variantes.appendChild(option); //agregamos la n ueva option creada con el valor del input al selector            
        }
    });
    //eliminar elementos del select variantes 
    document.querySelector("#btn-del-variantes").addEventListener("click", function () {        
        x = sel_variantes;
        x.remove(x.selectedIndex);
        var optionLength = $("#sel-variantes-disponibles option").length; //longuitud de  el select                        
        alert(optionLength);
        if(optionLength == 0){
            alert("asdas");
            const option = document.createElement('option');
            const valor = "Ninguna"; //le pasamos al option creado el valor escrito en el input
            option.value = valor;
            option.text = valor;
            sel_variantes.appendChild(option);
        }
      });
      //ADICIONES
    document.querySelector(".btn-add-adiciones").addEventListener("click", function(){        
        if(!input_adiciones.value == ""){
            //primero eliminarmos la option que decia "Ninguna"   
            if (sel_adiciones[0].value == "Ninguna" ){
                sel_adiciones.remove(sel_adiciones[0]);
            }
            //primero eliminarmos la option que decia "Ninguna"                             
            const option = document.createElement('option');
            const valor = input_adiciones.value; //le pasamos al option creado el valor escrito en el input
            option.value = valor;
            option.text = valor;
            sel_adiciones.appendChild(option); //agregamos la n ueva option creada con el valor del input al selector            
        }
    });
    //eliminar elementos del select adiciones
    document.querySelector("#btn-del-adiciones").addEventListener("click", function () {
        x = sel_adiciones;
        x.remove(x.selectedIndex);
        var optionLengthAdiciones = sel_adiciones.length; //longuitud de  el select                                
        if(optionLengthAdiciones == 0){            
            const option = document.createElement('option');
            const valor = "Ninguna"; //le pasamos al option creado el valor escrito en el input
            option.value = valor;
            option.text = valor;
            sel_adiciones.appendChild(option);
        }
      });

