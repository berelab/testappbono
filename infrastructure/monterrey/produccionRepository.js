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
                         jobs.organization_id = 383
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
   
    
     // Almacenes , Choferes
     async findDespl(inicio, fin) {
        let response;
        const queryString = `SELECT organization_name, sum(volumen), attribute15 FROM
        (
        SELECT 
            (   SELECT  NAME
                FROM    apps.HR_ALL_ORGANIZATION_UNITS
                WHERE   ORGANIZATION_ID = Remisiones.ORGANIZATION_ID) ORGANIZATION_NAME,
            Remisiones.INITIAL_PICKUP_DATE,
            Remisiones.NAME,
            Clientes.CUSTOMER_NAME,
            Transp.FREIGHT_CODE,
            Productos.SEGMENT1 || '-' || Productos.SEGMENT2 CODIGO,
            Productos.DESCRIPTION,
            RemDetails.REQUESTED_QUANTITY_UOM,
            case when Productos.UNIT_VOLUME is null then 
                   1
            else
                 sum(RemDetails.PICKED_QUANTITY * nvl(Productos.UNIT_VOLUME, 0)) 
            end Volumen,
            sum(Remdetails.SHIPPED_QUANTITY) Unidades,
            RemDetails.SOURCE_HEADER_NUMBER num_order
              , Remisiones.attribute15 
        FROM
            apps.WSH_DELIVERY_ASSIGNMENTS Asignaciones,
            apps.WSH_NEW_DELIVERIES Remisiones,
            apps.WSH_DELIVERY_DETAILS RemDetails,
            apps.MTL_SYSTEM_ITEMS_B Productos,
            apps.WSH_CARRIERS_V Transp,    
            apps.AR_CUSTOMERS Clientes
        WHERE
            Remisiones.INITIAL_PICKUP_DATE between '${inicio}' AND '${fin}'--:P_FECHA_INI and :P_FECHA_FIN + 1
            and Remisiones.ORGANIZATION_ID =   383
            and Productos.ORGANIZATION_ID = 186
            and (Productos.segment1 not in ('MREC') and Remisiones.customer_id not in (1674, 6204)) 
            and Remisiones.DELIVERY_ID = Asignaciones.DELIVERY_ID
            and RemDetails.DELIVERY_DETAIL_ID = Asignaciones.DELIVERY_DETAIL_ID
            and Productos.INVENTORY_ITEM_ID = RemDetails.INVENTORY_ITEM_ID
            and Transp.CARRIER_ID (+)= Remisiones.CARRIER_ID
            and Clientes.CUSTOMER_ID = RemDetails.CUSTOMER_ID
            and NOT EXISTS (    SELECT  'X' 
                                FROM    apps.OE_ORDER_HEADERS
                                WHERE   ORDER_CATEGORY_CODE = 'RETURN'
                                        and SOURCE_DOCUMENT_ID = RemDetails.SOURCE_HEADER_ID)  
            and NOT EXISTS (    SELECT  'X'
                                FROM    apps.MTL_PARAMETERS
                                WHERE   ORGANIZATION_CODE = Transp.FREIGHT_CODE)        
                            
        GROUP BY
            Remisiones.ORGANIZATION_ID,
            Remisiones.INITIAL_PICKUP_DATE,
            Remisiones.NAME,
            Clientes.CUSTOMER_NAME,
            Transp.FREIGHT_CODE,
            Productos.SEGMENT1 || '-' || Productos.SEGMENT2,
            Productos.DESCRIPTION,
            RemDetails.REQUESTED_QUANTITY_UOM,
            RemDetails.SOURCE_HEADER_NUMBER,
            Productos.UNIT_VOLUME
          , Remisiones.attribute15 
        UNION ALL
        
        SELECT 
            (   SELECT  NAME
                FROM    apps.HR_ALL_ORGANIZATION_UNITS Orgs,
                        apps.MTL_PARAMETERS mp
                WHERE   mp.ORGANIZATION_ID = Orgs.ORGANIZATION_ID
                        and mp.ORGANIZATION_CODE = Transp.FREIGHT_CODE) ORGANIZATION_NAME,
            Remisiones.INITIAL_PICKUP_DATE,
            Remisiones.NAME,
            Clientes.CUSTOMER_NAME,
            Transp.FREIGHT_CODE,
            Productos.SEGMENT1 || '-' || Productos.SEGMENT2 CODIGO,
            Productos.DESCRIPTION,
            RemDetails.REQUESTED_QUANTITY_UOM,
            case when Productos.UNIT_VOLUME is null then 
                   1
             else
                    sum(RemDetails.PICKED_QUANTITY * nvl(Productos.UNIT_VOLUME, 0)) 
             end Volumen,
            sum(Remdetails.SHIPPED_QUANTITY) Unidades,
            RemDetails.SOURCE_HEADER_NUMBER num_order
          , Remisiones.attribute15 
        FROM
            apps.WSH_DELIVERY_ASSIGNMENTS Asignaciones,
            apps.WSH_NEW_DELIVERIES Remisiones,
            apps.WSH_DELIVERY_DETAILS RemDetails,
            apps.MTL_SYSTEM_ITEMS_B Productos,
            apps.WSH_CARRIERS_V Transp,
            apps.AR_CUSTOMERS Clientes
        WHERE
            Remisiones.INITIAL_PICKUP_DATE between '${inicio}' AND '${fin}'-- :P_FECHA_INI and :P_FECHA_FIN + 1
            and (   SELECT  Orgs.ORGANIZATION_ID
                    FROM    apps.HR_ALL_ORGANIZATION_UNITS Orgs,
                            apps.MTL_PARAMETERS mp
                    WHERE   mp.ORGANIZATION_ID = Orgs.ORGANIZATION_ID
                            and mp.ORGANIZATION_CODE = Transp.FREIGHT_CODE
                      ) =   383
            and Productos.ORGANIZATION_ID = 186
            and (Productos.segment1 not in ('MREC') and Remisiones.customer_id not in (1674, 6204)) 
            and Remisiones.DELIVERY_ID = Asignaciones.DELIVERY_ID
            and RemDetails.DELIVERY_DETAIL_ID = Asignaciones.DELIVERY_DETAIL_ID
            and Productos.INVENTORY_ITEM_ID = RemDetails.INVENTORY_ITEM_ID
            and Transp.CARRIER_ID (+)= Remisiones.CARRIER_ID
            and Clientes.CUSTOMER_ID = RemDetails.CUSTOMER_ID
            and NOT EXISTS (    SELECT  'X' 
                                FROM    apps.OE_ORDER_HEADERS
                                WHERE   ORDER_CATEGORY_CODE = 'RETURN'
                                        and SOURCE_DOCUMENT_ID = RemDetails.SOURCE_HEADER_ID)  
            and EXISTS     (    SELECT  'X'
                                FROM    apps.MTL_PARAMETERS
                                WHERE   ORGANIZATION_CODE = Transp.FREIGHT_CODE)      
                                          
        GROUP BY
            Remisiones.ORGANIZATION_ID,
            Remisiones.INITIAL_PICKUP_DATE,
            Remisiones.NAME,
            Clientes.CUSTOMER_NAME,
            Transp.FREIGHT_CODE,
            Productos.SEGMENT1 || '-' || Productos.SEGMENT2,
            Productos.DESCRIPTION,
            RemDetails.REQUESTED_QUANTITY_UOM   ,
            RemDetails.SOURCE_HEADER_NUMBER,
            Productos.UNIT_VOLUME
          , Remisiones.attribute15 
        ORDER BY
            2, 4
            )
            VALORES
            
            group by organization_name,  attribute15 
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
