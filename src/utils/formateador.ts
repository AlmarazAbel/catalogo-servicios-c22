<<<<<<< HEAD
export const formatearPrecio = (valor: number) => {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  }).format(valor);
};
=======
export const formatearPrecio = (precio: number): string => {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 2,
  }).format(precio);
};
>>>>>>> dev
