function objectToLowercase(fila) {
  const objetLowercase = {};
  const keys = Object.keys(fila)
  keys.forEach((key)=>{
          const value = fila[key].toLowerCase();
          objetLowercase[key] = value;
  }) 

  return objetLowercase;
}

export {objectToLowercase}