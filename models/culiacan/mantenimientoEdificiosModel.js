'use strict'

const mantenimientoEdificiosBaseData = {
        message: 'Mantenimiento Edificios',
        city: 'Culiacan',
        semana:{
            del:'15/02/2021',
            al:'21/02/2021'
        },
        encargado:'Isabel Lopez',
        revisa: 'Ramon sarabia',
        dias_sucios:0,
        dias: 4.8,
        factor_dias_laborados: 1,
        horas_por_turno: 10, 
        asistencia_total: 3.6, 
        $_extra_m3: 800,
        colaboradores: {
            lunes: 0,
            martes: 0,
            miercoles: 1.2,
            jueves: 1.2,
            viernes: 1.2,
            sabado: 0
        },
        actividades:[
            {
                codigo: 'A01',
                descripcion: 'Revision de extintores',
                responsable: 'DIEGO AMARILLAS',
                estatus:'TERMINADO',
                fecha_inicio:'14/02/2021',
                fecha_fin:'19/02/2021',
                porc_cumplimiento: 100
            },
            {
                codigo: 'A02',
                descripcion: 'Limpieza estacionamiento',
                responsable: 'DIEGO AMARILLAS',
                estatus:'TERMINADO',
                fecha_inicio:'14/02/2021',
                fecha_fin:'19/02/2021',
                porc_cumplimiento: 100
            },
            {
                codigo: 'A03',
                descripcion: 'Limpieza en area de cuarto electrico',
                responsable: 'DIEGO AMARILLAS',
                estatus:'TERMINADO',
                fecha_inicio:'14/02/2021',
                fecha_fin:'19/02/2021',
                porc_cumplimiento: 100
            },
            {
                codigo: 'A04',
                descripcion: 'limpieza de contenedor de basura',
                responsable: 'DIEGO AMARILLAS',
                estatus:'TERMINADO',
                fecha_inicio:'14/02/2021',
                fecha_fin:'19/02/2021',
                porc_cumplimiento: 100
            },
            {
                codigo: 'A05',
                descripcion: 'Retiro de basura construpanel y comedor',
                responsable: 'DIEGO AMARILLAS',
                estatus:'TERMINADO',
                fecha_inicio:'14/02/2021',
                fecha_fin:'19/02/2021',
                porc_cumplimiento: 100
            },
            {
                codigo: 'A06',
                descripcion: 'llenadode cubetas para lavado de manos',
                responsable: 'DIEGO AMARILLAS',
                estatus:'TERMINADO',
                fecha_inicio:'14/02/2021',
                fecha_fin:'19/02/2021',
                porc_cumplimiento: 100
            },
            {
                codigo: 'A07',
                descripcion: 'llenado de solucion de agua y tapetes',
                responsable: 'DIEGO AMARILLAS',
                estatus:'TERMINADO',
                fecha_inicio:'14/02/2021',
                fecha_fin:'19/02/2021',
                porc_cumplimiento: 100
            },
            {
                codigo: 'A08',
                descripcion: 'relleno de dispensadores de antibacterial',
                responsable: 'DIEGO AMARILLAS',
                estatus:'TERMINADO',
                fecha_inicio:'14/02/2021',
                fecha_fin:'19/02/2021',
                porc_cumplimiento: 100
            },
            {
                codigo: 'A09',
                descripcion: 'limpieza en interior de cuarto de silo MR',
                responsable: 'DIEGO AMARILLAS',
                estatus:'TERMINADO',
                fecha_inicio:'14/02/2021',
                fecha_fin:'19/02/2021',
                porc_cumplimiento: 100
            },
            {
                codigo: 'A10',
                descripcion: 'Revision y prueba a bombas contra incendio',
                responsable: 'DIEGO AMARILLAS',
                estatus:'TERMINADO',
                fecha_inicio:'14/02/2021',
                fecha_fin:'19/02/2021',
                porc_cumplimiento: 100
            },
            {
                codigo: 'A11',
                descripcion: 'Acomodo de extintores e hidrantes',
                responsable: 'DIEGO AMARILLAS',
                estatus:'TERMINADO',
                fecha_inicio:'14/02/2021',
                fecha_fin:'19/02/2021',
                porc_cumplimiento: 100
            },
            {
                codigo: 'A12',
                descripcion: 'revision de tierras de tolvas',
                responsable: 'DIEGO AMARILLAS',
                estatus:'TERMINADO',
                fecha_inicio:'14/02/2021',
                fecha_fin:'19/02/2021',
                porc_cumplimiento: 100
            },
        ],
        equipo: [
            {
                nombre: 'DIEGO ISAEL AMARILLAS BENITEZ',
                num: 400774,
                asistencia: {
                    lunes: 0,
                    martes: 0,
                    miercoles: 1.2,
                    jueves: 1.2,
                    viernes: 1.2,
                    sabado:0,
                },
                faltas : 0,
                retardos: 0
            },
            

        ],
       
};

module.exports = mantenimientoEdificiosBaseData;
