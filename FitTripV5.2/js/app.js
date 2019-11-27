$(document).ready(function(){
    $("#Registro").validate(
    {
        errorClass:'is-invalid',
        rules:{
            nombre:{
                required:true    
            },
            correo:{
                required:true
            },
            contraseña:{
                required:true,
                Number:true                
            },
            confirmar:{
                required:true
            }
    },

    messages:{
        nombre:{
            required:"Debe ingresar sus nombres"    
        },
        correo:{
            required:"Debe ingresar un correo valido"
        },
        contraseña:{
            required:"Debe ingresar su contraseña"
        },
        confirmar:{
            required:"Debe confirmar su contraseña",
        }
        
    }
    })
    })

    $("#Registro").submit(function(){
        if($("#Registro").valid()){
            return false;
      }else{
          Swal.fire({
              type: 'error',
              title: 'Oopss...',
              text: 'Creo que faltan unos datos!',        
            })      
      }
      })


      


    