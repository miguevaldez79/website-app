export type Tipo = {
    Id:number
    Descripcion:string
    zona:string
}

export type Provincia = {
    Id:number
    Descripcion:string
    zona:string
}

export type Municipio = {
    Id:number
    Descripcion:string
    Id_Provincia:number
}

export type Regiones = {
    Id:number
    Descripcion:string
    Id_Provincia:number
    Codigo:string  
}

export type MacroRegiones = {
    Id:number
    Codigo: string
    Descripcion:string
    Direccion:string
    Id_Circunscripcion:number
    Id_Municipio:number
    Municipio:Municipio
  
}

export type Mesa = {
    idMesa:number 
    IdRecinto:number 
    CodigoMesa:string 
    DescripcionMesa:string 
    Habiles:number
    Inhabilitados:number
}

export type Colegio = {
    Id: number
    Codigo: string
    Id_Municipio: number
    Descripcion: string
    Id_Recinto: number
}

export type Sector = {
    Id:number
    Descripcion:string
    IDMunicipio: number
    Codigo:string
    Id_Ciudad_Seccion:number
}

export type DistritoMunicipal = {
    IDMunicipio: number
    IDDistritoMunicipal:number
    CodigoCiudad:string
    Descripcion:string
    Estatus: boolean
}