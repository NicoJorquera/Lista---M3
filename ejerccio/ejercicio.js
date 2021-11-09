class Personal {
    constructor (nombre, departamento, tipo, activo){
      this._nombre = nombre;
      this._departamento = departamento;
      this._tipo = tipo;
      this._activo = activo;
      }
  }
class Administrativo extends Personal{
    constructor (nombre, departamento, tipo, activo){
        super(nombre, departamento, tipo, activo);
    }    
}
class Docente extends Personal{
    constructor (nombre, departamento, tipo, activo){
        super(nombre, departamento, tipo, activo);
    }
}
class Obrero extends Personal{
    constructor (nombre, departamento, tipo, activo){
        super(nombre, departamento, tipo, activo);
    }
}

let admin1 = new Administrativo("Diego Urrutia", 587, "Clasificado", true);

console.log(admin1);