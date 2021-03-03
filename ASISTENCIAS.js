const people = [
    {code: '700146', name: 'John', date: '01/18/2021' , entry: '06057'},
    {code: '700146', name: 'John', date: '01/19/2021' , entry: '---'}, 
    {code: '700147', name: 'Andrew', date: '01/18/2021' , entry: '06057'}, 
    {code: '700148', name: 'Peter', date: '01/18/2021' , entry: '06057'}, 
    {code: '700149', name: 'Hanna', date: '01/18/2021' , entry: '---'}, 
    {code: '700150', name: 'Adam', date: '01/18/2021' , entry: '06057'}, 
];


let orderedData = people.map(element => {
    let dateString = element.date
    var days = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
    var d = new Date(dateString);
    var dayName = days[d.getDay()];
    let asis;

    !isNaN(element.entry) ? asis = '1.0' : asis = '0.0';

    return {
        code: element.code,
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
