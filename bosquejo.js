/*class Propietario {
    constructor(nombre, direccion, telefono){
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
    }
    //datosPropietario()
    get getNombre(){
      return this._nombre;
    }
    get getDireccion(){
      return this._direccion;
    }
    get getTelefono(){
      return this._telefono;
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
class Mascota extends Propietario{
    constructor(nombre, direccion, telefono, nombreMasc, enfermedadMasc){
        super(nombre, direccion, telefono);
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

let prop1 = new Propietario("xd", "calle blanca 458", "+569133");
//let mascota1 = new Mascota ("Naruto", "Distemper");

console.log(prop1);*/