let map = new Map();
map.set("nombre", "Val")
map.set("edad", "16")
map.set("ocupacion", "estudiante")
console.log(map);
console.log(map.get("nombre"))

/* Consulta si existe o no la clave */
console.log(map.has("edad"))
/* Consulta el tamaño o la cantidad de claves */
console.log(map.size)
