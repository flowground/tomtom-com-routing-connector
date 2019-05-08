/**
 * Auto-generated action file for "Routing" API.
 *
 * Generated at: 2019-05-07T14:44:25.160Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / tomtom-com-routing-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: undefined
 * Endpoint Path: '/routing/{versionNumber}/calculateRoute/{locations}/{contentType}'
 * Method: 'get'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "versionNumber",
    "locations",
    "contentType",
    "maxAlternatives",
    "alternativeType",
    "minDeviationDistance",
    "minDeviationTime",
    "instructionsType",
    "language",
    "computeBestOrder",
    "routeRepresentation",
    "computeTravelTimeFor",
    "vehicleHeading",
    "sectionType",
    "callback",
    "report",
    "departAt",
    "arriveAt",
    "routeType",
    "traffic",
    "avoid",
    "travelMode",
    "hilliness",
    "windingness",
    "vehicleMaxSpeed",
    "vehicleWeight",
    "vehicleAxleWeight",
    "vehicleLength",
    "vehicleWidth",
    "vehicleHeight",
    "vehicleCommercial",
    "vehicleLoadType",
    "vehicleEngineType",
    "constantSpeedConsumptionInLitersPerHundredkm",
    "currentFuelInLiters",
    "auxiliaryPowerInLitersPerHour",
    "fuelEnergyDensityInMJoulesPerLiter",
    "accelerationEfficiency",
    "decelerationEfficiency",
    "uphillEfficiency",
    "downhillEfficiency",
    "constantSpeedConsumptionInkWhPerHundredkm"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "versionNumber": "versionNumber",
    "locations": "locations",
    "contentType": "contentType",
    "maxAlternatives": "maxAlternatives",
    "alternativeType": "alternativeType",
    "minDeviationDistance": "minDeviationDistance",
    "minDeviationTime": "minDeviationTime",
    "instructionsType": "instructionsType",
    "language": "language",
    "computeBestOrder": "computeBestOrder",
    "routeRepresentation": "routeRepresentation",
    "computeTravelTimeFor": "computeTravelTimeFor",
    "vehicleHeading": "vehicleHeading",
    "sectionType": "sectionType",
    "callback": "callback",
    "report": "report",
    "departAt": "departAt",
    "arriveAt": "arriveAt",
    "routeType": "routeType",
    "traffic": "traffic",
    "avoid": "avoid",
    "travelMode": "travelMode",
    "hilliness": "hilliness",
    "windingness": "windingness",
    "vehicleMaxSpeed": "vehicleMaxSpeed",
    "vehicleWeight": "vehicleWeight",
    "vehicleAxleWeight": "vehicleAxleWeight",
    "vehicleLength": "vehicleLength",
    "vehicleWidth": "vehicleWidth",
    "vehicleHeight": "vehicleHeight",
    "vehicleCommercial": "vehicleCommercial",
    "vehicleLoadType": "vehicleLoadType",
    "vehicleEngineType": "vehicleEngineType",
    "constantSpeedConsumptionInLitersPerHundredkm": "constantSpeedConsumptionInLitersPerHundredkm",
    "currentFuelInLiters": "currentFuelInLiters",
    "auxiliaryPowerInLitersPerHour": "auxiliaryPowerInLitersPerHour",
    "fuelEnergyDensityInMJoulesPerLiter": "fuelEnergyDensityInMJoulesPerLiter",
    "accelerationEfficiency": "accelerationEfficiency",
    "decelerationEfficiency": "decelerationEfficiency",
    "uphillEfficiency": "uphillEfficiency",
    "downhillEfficiency": "downhillEfficiency",
    "constantSpeedConsumptionInkWhPerHundredkm": "constantSpeedConsumptionInkWhPerHundredkm"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = undefined;

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['api_key'] = cfg['api_key'];

    let callParams = {
        spec: spec,
        operationId: undefined,
        pathName: '/routing/{versionNumber}/calculateRoute/{locations}/{contentType}',
        method: 'get',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}