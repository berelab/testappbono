'use strict'

const { response } = require('express');
const { oracleConnection  } = require ('../oracleSQLclient');

class OracleProduccionRepository {

    async find(dia) {
        let response;
        const queryString = `select
        organization
      , area
      , sum(compleados)
      , sum(m3)
    from
        (
            select
                ORGANIZATION
              ,
                (
                    CASE
                        WHEN jobs.line_id in (2401, 2441, 2423, 2424, 2456, 2457, 2403, 8, 315, 2413, 2444, 2443, 2408, 2407, 2468, 2467, 2494, 2493, 2492, 2486, 2462, 2430, 2431, 2508) THEN 'PREEXPANSION'
                        WHEN jobs.line_id in (1001, 1002, 301, 302, 2001, 6, 7, 8, 2503, 2, 303, 304, 2498, 2499, 2500, 2501, 2502, 801, 802, 803, 2487, 2484, 2483, 1602, 2481, 2464, 2465, 2466, 2484, 2459, 2460, 2438, 2439, 1406, 1901, 2425, 2426, 2415, 2416, 2410, 2510, 2511, 2512, 2513, 2514, 2441, 2434, 2101, 2435, 501, 601, 2411, 2412, 2458, 2461, 2433) THEN 'CORTE'
                        WHEN JOBS.LINE_ID IN(2437) THEN 'NIP'
                        WHEN jobs.line_id in (1003, 1004, 2404, 2405, 2440, 2417) THEN 'EMPAQUE CORTADO'
                        WHEN jobs.line_id in (2406) THEN 'T G'
                        WHEN jobs.line_id in (2507, 2445) THEN 'ROTULADO'
                        WHEN jobs.line_id in (309, 2482) THEN 'INSULPANEL'
                        WHEN jobs.line_id in (2488, 2489, 2418, 2419, 2420) THEN 'CONSTRUPANEL'
                        WHEN jobs.line_id in (2469, 2455, 1301, 2414, 2409, 3, 2497, 2495, 2496, 2497, 2491, 2490, 2485, 2463, 2455, 2436, 1402, 2509, 2402) THEN 'BLOQUERA'
                        WHEN jobs.line_id in (2470, 2471) THEN 'MOLINOS'
                        WHEN jobs.line_id in (2472, 901) THEN 'DKM'
                        WHEN jobs.line_id in (2473) THEN 'PLACA'
                        WHEN jobs.line_id in (2474, 2476) THEN 'ELECTROLUX'
                        WHEN jobs.line_id in (2475) THEN 'ALIGERANTES'
                        WHEN jobs.line_id in (2477) THEN 'AOS MITH'
                        WHEN jobs.line_id in (2478) THEN 'MCS FRAME'
                        WHEN jobs.line_id in (2479) THEN 'KBRS'
                        WHEN jobs.line_id in (2480) THEN 'COMMSCOPE'
                            ELSE 'SIN AREA'
                    END
                )
                            AREA
              , COMPLETADOS COMPLEADOS
              , tot_M3      M3
            from
                (
                    select distinct
                                    (
                                        select
                                            name
                                        from
                                            apps.HR_ALL_ORGANIZATION_UNITS
                                        where
                                            organization_id = jobs.organization_id
                        )
                                                                                                                 ORGANIZATION
                      , jobs.quantity_completed                                                                  COMPLETADOS
                      , (jobs.quantity_completed * prod.attribute5) + (jobs.quantity_scrapped * prod.attribute5) tot_M3
                      , ents.wip_entity_name
                      , (
                            select
                                description
                            from
                                apps.wip_lines
                            where
                                line_id             = jobs.line_id
                                and organization_id = jobs.organization_id
                        )
                        linea
                      , jobs.line_id
                    from
                        apps.wip_discrete_jobs jobs
                        left outer join
                            apps.wip_entities ents
                            on
                                jobs.wip_entity_id = ents.wip_entity_id
                        left outer join
                            apps.wip_requirement_operations ops
                            on
                               jobs.wip_entity_id = ops.wip_entity_id
                        left outer join
                            (
                                select
                                    inventory_item_id
                                  , segment1
                                  , segment2
                                  , organization_id
                                  , description
                                  , attribute5
                                from
                                    apps.mtl_system_items_b
                            )
                            prod
                            on
                                prod.inventory_item_id = jobs.primary_item_id
                        left outer join
                            (
                                select
                                   inventory_item_id
                                  , segment1
                                  , segment2
                                  , organization_id
                                  , description
                                  , attribute5
                                from
                                    apps.mtl_system_items_b
                            )
                            comp
                            on
                                comp.inventory_item_id = ops.inventory_item_id
                    where
                         jobs.organization_id = 343
                        and
                        comp.segment1 between 'A' and 'Z'
                        and comp.segment2 between '000000' and '999999'
                        and prod.organization_id = 186
                        and comp.organization_id = 186
                        and to_date(jobs.scheduled_completion_date) =  '${dia}'
                    order by
                        jobs.organization_id
                )
                jobs
        )
    group by
        area
      , organization  
      `;

        try {
            response = oracleConnection(queryString);
            
        } catch(error) {
            console.log(error);
        }

        return response
    }
   
    
};

module.exports = OracleProduccionRepository;
/*
response : {
    "metaData": [
        {
            "name": "ORGANIZATION"
        },
        {
            "name": "AREA"
        },
        {
            "name": "COMPLETADOS"
        },
        {
            "name": "M3"
        }
    ],
    "rows": [
        [
            "250_LA_PAZ",
            "CORTE",
            1492.3672000000001,
            169.33844
        ],
        [
            "250_LA_PAZ",
            "SIN AREA",
            12000,
            12000
        ],
        [
            "250_LA_PAZ",
            "PREEXPANSION Y MOLDEO",
            114,
            716.074128
        ]
    ]
}
*/