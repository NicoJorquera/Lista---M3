class Propietario {
    constructor(nombre, direccion, telefono){
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
    }
    //datosPropietario()
    get getNombre(){
      return this._nombre;
    }
    set setNombre(nuevoNombre){
        this._nombre = nuevoNombre;
    }
    get getDireccion(){
      return this._direccion;
    }
    set setDireccion(nuevaDireccion){
        this._direccion = nuevaDireccion;
    }
    get getTelefono(){
      return this._telefono;
    }
    set setTelefono (nuevoTelefono){
        this._telefono = nuevoTelefono;
    }
}
class Animal extends Propietario{
    constructor (nombre, direccion, telefono, tipo){
        super(nombre, direccion, telefono);
        this._tipo = tipo;
    }
    get getTipo(){
        return this._tipo;
    }
}
class Mascota extends Animal{
    constructor(nombre, direccion, telefono, tipo, nombreMasc, enfermedadMasc){
        super(nombre, direccion, telefono, tipo);
        this._nombreMasc = nombreMasc;
        this._enfermedadMasc = enfermedadMasc;
    }
    get getNombreMasc(){
        return this._nombreMasc
    }
    set setNombreMasc(nuevoNombreM){
        this._nombreMasc = nuevoNombreM;
    }
    get getEnfermedadMasc(){
        return this._enfermedadMasc
    }
    set setEnfermedadMasc(nuevaEnfermedadM){
        this._enfermedadMasc = nuevaEnfermedadM;
    }
}

//let prop1 = new Propietario("Nombre: Pablito", "DIreccion: calle blanca 458", "Telefono: +56956214473");
//let animal1 = new Animal("Perro", "Naruto");
//let mascota1 = new Mascota ("Pablito", "calle blanca 458", "+56956214473", "Perro", "Naruto", "Pata cumbia");

//console.log(mascota1);

function registar (){
    let nombre = document.getElementById("propietario").value; //ir al HTML y ver el id.
    let telefono = document.getElementById("telefono").value;
    let direccion = document.getElementById("direccion").value;
    let nombreMascota = document.getElementById("nombreMascota").value;
    let enfermedad = document.getElementById("enfermedad").value;

    let mascota1 = new Mascota (nombre, telefono, direccion, "tipo", nombreMascota, enfermedad);
    return mascota1;
}

//function