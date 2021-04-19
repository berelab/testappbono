'use strict'
const { oracleConnection  } = require ('../oracleSQLclient');

class OracleProduccionRepository {

    async find(dia) {
        let response;
        const queryString = `select
        (
            SELECT
                NAME
            FROM
                apps.HR_ORGANIZATION_UNITS
            WHERE
                ORGANIZATION_ID = SUMBUL.ORGANIZATION_ID
        )                                                                                            organization           
      , SUM(SUM_BULTO / FACTOR_BULTO)                                                                 TOT_ORG                
    
    from
        (
            SELECT
                B.ORGANIZATION_ID
              , (
                    SELECT
                        SUM(PRIMARY_QUANTITY)
                    FROM
                        apps.MTL_MATERIAL_TRANSACTIONS
                    WHERE
                        TO_DATE(TRANSACTION_DATE) = '${dia}'--:FECHA_INICIAL AND :FECHA_FINAL --'01/ENE/2021' AND '14/FEB/2021' --
                        AND INVENTORY_ITEM_ID = A.INVENTORY_ITEM_ID
                        AND TRANSACTION_TYPE_ID in (44
                                                  , 17)
                        AND ORGANIZATION_ID = B.ORGANIZATION_ID
                )
                              sum_bulto
              , B.UNIT_WEIGHT FACTOR_BULTO
            FROM
                apps.MTL_MATERIAL_TRANSACTIONS A
                INNER JOIN
                    apps.MTL_SYSTEM_ITEMS_B B
                    ON
                        A.INVENTORY_ITEM_ID = B.INVENTORY_ITEM_ID
            where
                1                     = 1
                AND B.ORGANIZATION_ID = A.ORGANIZATION_ID
                AND TO_DATE(A.TRANSACTION_DATE) = '${dia}' --:FECHA_INICIAL AND :FECHA_FINAL --'01/ENE/2021' AND '14/FEB/2021'  --
                AND A.TRANSACTION_TYPE_ID in (44
                                            , 90
                                            , 17)
                AND B.SEGMENT1 in ('MAQU'
                                 , 'CAJA'
                                 , 'TORT'
                                 , 'FOAM'
                                 , 'HIEL'
                                 , 'SEMI'
                                 , 'CLAS'
                                 , 'SILL'
                                 ,'EMMO'
                                 , 'PRAR')
                AND
                (
                    SELECT
                        FAMILIA_D.DESCRIPTION
                    FROM
                        apps.MTL_SYSTEM_ITEMS_B
                        INNER JOIN
                            apps.MTL_ITEM_CATEGORIES
                            ON
                                apps.MTL_SYSTEM_ITEMS_B.INVENTORY_ITEM_ID   = apps.MTL_ITEM_CATEGORIES.INVENTORY_ITEM_ID
                                AND apps.MTL_SYSTEM_ITEMS_B.ORGANIZATION_ID = apps.MTL_ITEM_CATEGORIES.ORGANIZATION_ID
                        INNER JOIN
                            apps.MTL_CATEGORIES_B
                            ON
                                apps.MTL_ITEM_CATEGORIES.CATEGORY_ID = apps.MTL_CATEGORIES_B.CATEGORY_ID
                        INNER JOIN
                            apps.FND_FLEX_VALUES FAMILIA
                            ON
                                FAMILIA.FLEX_VALUE = apps.MTL_CATEGORIES_B.SEGMENT4
                        INNER JOIN
                            apps.FND_FLEX_VALUES_TL FAMILIA_D
                            ON
                                FAMILIA_D.FLEX_VALUE_ID = FAMILIA.FLEX_VALUE_ID
                        INNER JOIN
                            apps.FND_ID_FLEX_SEGMENTS FAMILIA_S
                            ON
                                FAMILIA.FLEX_VALUE_SET_ID = FAMILIA_S.FLEX_VALUE_SET_ID
                    WHERE
                        apps.MTL_SYSTEM_ITEMS_B.ORGANIZATION_ID       = 186
                        AND MTL_SYSTEM_ITEMS_B.INVENTORY_ITEM_ID = A.INVENTORY_ITEM_ID
                        AND MTL_CATEGORIES_B.STRUCTURE_ID        = 50231
                        AND FAMILIA_S.ID_FLEX_NUM                = 50231
                        AND FAMILIA_S.SEGMENT_NAME               = 'TIPO'
                        AND FAMILIA_D.LANGUAGE                   = 'ESA'
                )
                not like '%PLACA%'
                AND
                (
                    SELECT
                        FAMILIA_D.DESCRIPTION
                    FROM
                       apps.MTL_SYSTEM_ITEMS_B
                        INNER JOIN
                            apps.MTL_ITEM_CATEGORIES
                            ON
                                apps.MTL_SYSTEM_ITEMS_B.INVENTORY_ITEM_ID   = apps.MTL_ITEM_CATEGORIES.INVENTORY_ITEM_ID
                                AND apps.MTL_SYSTEM_ITEMS_B.ORGANIZATION_ID = apps.MTL_ITEM_CATEGORIES.ORGANIZATION_ID
                        INNER JOIN
                            apps.MTL_CATEGORIES_B
                            ON
                                apps.MTL_ITEM_CATEGORIES.CATEGORY_ID = apps.MTL_CATEGORIES_B.CATEGORY_ID
                        INNER JOIN
                            apps.FND_FLEX_VALUES FAMILIA
                            ON
                                apps.FAMILIA.FLEX_VALUE = apps.MTL_CATEGORIES_B.SEGMENT4
                        INNER JOIN
                            apps.FND_FLEX_VALUES_TL FAMILIA_D
                            ON
                                FAMILIA_D.FLEX_VALUE_ID = FAMILIA.FLEX_VALUE_ID
                        INNER JOIN
                            apps.FND_ID_FLEX_SEGMENTS FAMILIA_S
                            ON
                                FAMILIA.FLEX_VALUE_SET_ID = FAMILIA_S.FLEX_VALUE_SET_ID
                    WHERE
                        apps.MTL_SYSTEM_ITEMS_B.ORGANIZATION_ID       = 186
                        AND MTL_SYSTEM_ITEMS_B.INVENTORY_ITEM_ID = A.INVENTORY_ITEM_ID
                        AND MTL_CATEGORIES_B.STRUCTURE_ID        = 50231
                        AND FAMILIA_S.ID_FLEX_NUM                = 50231
                        AND FAMILIA_S.SEGMENT_NAME               = 'TIPO'
                        AND FAMILIA_D.LANGUAGE                   = 'ESA'
                )
                not like '%CORT%'
            group by
                B.SEGMENT1
              , B.SEGMENT2
              , B.ATTRIBUTE6
              , B.UNIT_WEIGHT
              , A.INVENTORY_ITEM_ID
              , B.DESCRIPTION
              , B.UNIT_VOLUME
              , B.ORGANIZATION_ID
            order by
                B.ORGANIZATION_ID
        )
        SUMBUL
    group by
        ORGANIZATION_ID
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
