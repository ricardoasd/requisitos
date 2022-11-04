function validar() {

    var nombres = document.getElementById("nomp").value;
    var id = document.getElementById("idp").value;
    var worth = document.getElementById("costp").value;
    var hour = document.getElementById("horp").value;
    
    


     if (nombres == length || !isNaN(nombres)) {
         alert("Rellene los campos correctamente");
         return false;
     }
 
     if (id == length || isNaN(id)){
         alert("Rellene el Id de la pelicula ");
 
         return false;
     }
 
     if (worth == length || isNaN (worth))  {
         alert("Rellene el costo de su tiket");
         return false;
     } 
      
     if (hour == length || !isNaN (hour))  {
        alert("Rellene la hora de la pelicula");
        return false;
    } 

    let Usur =  JSON.parse(localStorage.getItem("User"))  || [] ;
     
   

  

}



