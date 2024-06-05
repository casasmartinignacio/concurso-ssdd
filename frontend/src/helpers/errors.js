export const mapError = (error) => {
  switch (error) {
    case 1:
      return "Empujar el arma hacia adelante.";
    case 2:
      return "Inclinar las muñecas.";
    case 3:
      return "Poner poco volumen de dedo en el gatillo.";
    case 4:
      return "Mucho volumen de dedo en el gatillo.";
    case 5:
      return "Apretar los dedos";
    case 6:
      return "Apretar el empuñe";
    default:
      return "Error desconocido";

  }
}