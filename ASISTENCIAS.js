
let orderedData = entries.map(element => {
    let dateString = element.fecha
    var days = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
    var d = new Date(dateString);
    var dayName = days[d.getDay()];
    let asis;

    !isNaN(element.entrada_real) ? asis = '1.0' : asis = '0.0';

    return {
        code: element.userid,
        asistencia: {
          [dayName]: asis
        }
    };
});

var seen = {};
result = orderedData.filter(function(entry) {
    var previous;
    if (seen.hasOwnProperty(entry.code)) {
        previous = seen[entry.code];
        previous.asistencia.push(entry.asistencia);
        return false;
    }
    if (!Array.isArray(entry.asistencia)) {
        entry.asistencia = [entry.asistencia];
    }
    seen[entry.code] = entry;
    return true;
});
console.log(result)


// res = orderedData.reduce(function(arr, properties){
//     obj = {};  

//     obj[properties.code] = {
//         'asistencia' : properties.a
//     }
//     obj =
//     arr.push(obj);

//     return arr;
// }, []);
