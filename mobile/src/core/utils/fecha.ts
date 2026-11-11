// core/utilidades/hora.utilidades.ts

//FUNCTION: Convierte una cadena de texto en formato "HH:mm" a un objeto Date
export function timeStringToDate(horaTexto: string): Date {
  const [horas, minutos] = horaTexto.split(":").map(Number);
  const fecha = new Date();
  fecha.setHours(horas || 0, minutos || 0, 0, 0);
  return fecha;
}

//FUNCTION: Convierte un objeto Date a una cadena de texto en formato "HH:mm"
export function dateToTimeString(fecha: Date): string {
  const horas = String(fecha.getHours()).padStart(2, "0");
  const minutos = String(fecha.getMinutes()).padStart(2, "0");
  return `${horas}:${minutos}`;
}

// FUNCTION: Convierte una cadena de texto en formato "YYYY-MM-DD" a un objeto Date
const MESES_CORTOS = [
  "ENE", "FEB", "MAR", "ABR", "MAY", "JUN",
  "JUL", "AGO", "SEP", "OCT", "NOV", "DIC",
];
const MESES = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
];

export function formatLongDate(isoDate: string): string {
  const [anio, mes, dia] = isoDate.split("-").map(Number);
  return `${dia} de ${MESES[mes - 1]} de ${anio}`;
}

export function formatShortMonth(isoDate: string): string {
  const mes = Number(isoDate.split("-")[1]);
  return MESES_CORTOS[mes - 1];
}