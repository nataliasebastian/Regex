// v.js
// ----
function sinValor(denomina, campo)
{
  texto=campo.value;
  if (texto.length < 1) {
    alert("Tienes que completar el campo " + denomina + ".");
    campo.focus();
    campo.select();
    return true;
  }
  else
    return false;
}

function malEdad(campo)
{
   //var erEdad=/^(\d{1,3})$/;   
   var erEdad=/^([0-9]|[1-9][0-9]|1[0-2][0-9])$/; //Solo permite de 0 a 129
	
  if (!erEdad.test(campo.value)){
    alert("La edad " + campo.value + " es incorrecta.");
    campo.focus();
    campo.select();
    return true;
  }
  return false;
}

function malReal(campo)
{
  
   var erReal=/^(-{0,1}((0.)|([1-9]\d*.))[0-9]+)$/; 
	
  if (!erReal.test(campo.value)){
    alert("El n�mero real " + campo.value + " es incorrecto.");
    campo.focus();
    campo.select();
    return true;
  }
  return false;
}




function malNatural(campo)
{
   var erNatural=/^(0|[1-9]\d*)$/;

  if (!erNatural.test(campo.value)){
    alert("El n�mero natural " + campo.value + " es incorrecto.");
    campo.focus();
    campo.select();
    return true;
  }
  return false;
}

function malDni(campo)
{
   var erDni=/^(\d{8}[a-zA-Z])$/;

  if (!erDni.test(campo.value)){
    alert("El DNI " + campo.value + " es incorrecto.");
    campo.focus();
    campo.select();
    return true;
  }
  return false;
}

function malTelf(campo)
{
   
   var erTelf=/^([6-9]\d{8})$/; //Los n�meros de tel�fono de Espa�a est�n formados por nueve d�gitos. 
				//Los n�meros fijos empiezan por 9 u 8 y los m�viles empiezan por 6 o 7. 
	
  if (!erTelf.test(campo.value)){
    alert("El n�mero de tel�fono " + campo.value + " es incorrecto.");
    campo.focus();
    campo.select();
    return true;
  }
  return false;
}


function malMont(campo)
{
   
   var erMont=/^(\d+(k|m){0,1}\d*)$/; 
	
  if (!erMont.test(campo.value)){
    alert("El montante entero " + campo.value + " es incorrecto.");
    campo.focus();
    campo.select();
    return true;
  }
  return false;
}

function malEmail(campo)
{
  	var erEmail=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,3})$/; 

	
  if (!erEmail.test(campo.value)){
    alert("El correo electr�nico " + campo.value + " es incorrecto.");
    campo.focus();
    campo.select();
    return true;
  }
  return false;
}




function valida()
{
  if (sinValor("Nombre",     document.frmBasico.txtNom)) return;
  if (sinValor("Apellido 1", document.frmBasico.txtAp1)) return;
	
  if (sinValor("Edad",       document.frmBasico.txtEdd)) return;
  if (malEdad(document.frmBasico.txtEdd)) return;

  if (sinValor("Natural",    document.frmBasico.txtNat)) return;
  if (malNatural(document.frmBasico.txtNat)) return;

  if (sinValor("DNI",    document.frmBasico.txtDni)) return;
  if (malDni(document.frmBasico.txtDni)) return;

  if (sinValor("Real",    document.frmBasico.txtReal)) return;
  if (malReal(document.frmBasico.txtReal)) return;

  if (sinValor("N�mero de tel�fono",    document.frmBasico.txtTelf)) return;
  if (malTelf(document.frmBasico.txtTelf)) return;

  if (sinValor("Montante entero",    document.frmBasico.txtMont)) return;
  if (malMont(document.frmBasico.txtMont)) return;

  if (sinValor("Correo electr�nico",    document.frmBasico.txtEmail)) return;
  if (malEmail(document.frmBasico.txtEmail)) return;



  document.frmBasico.submit()
}






