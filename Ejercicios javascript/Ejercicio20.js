var reporte="lorem ipsum scammer simply laboris sit amet"

reporte = reporte.replace(/a/g,'x')
reporte = reporte.replace(/[eiou]/g, (match) => match.toUpperCase());

reporte = reporte.replace("l", "L")

reporte = reporte.split('');
reporte[reporte.length-1]='@';
reporte = reporte.join('');

cantVoc = reporte.replace(/[^EIOU]/g, "").length;


console.log(reporte);
console.log(cantVoc);