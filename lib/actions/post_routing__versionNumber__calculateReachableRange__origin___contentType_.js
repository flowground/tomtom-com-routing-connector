/**
 * Auto-generated action file for "Routing" API.
 *
 * Generated at: 2019-05-07T14:44:25.159Z
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
 * Endpoint Path: '/routing/{versionNumber}/calculateReachableRange/{origin}/{contentType}'
 * Method: 'post'
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
    "origin",
    "contentType",
    "fuelBudgetInLiters",
    "energyBudgetInkWh",
    "timeBudgetInSec",
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
    "constantSpeedConsumptionInLitersPerHundredkm",
    "currentFuelInLiters",
    "auxiliaryPowerInLitersPerHour",
    "fuelEnergyDensityInMJoulesPerLiter",
    "accelerationEfficiency",
    "decelerationEfficiency",
    "uphillEfficiency",
    "downhillEfficiency",
    "vehicleEngineType",
    "constantSpeedConsumptionInkWhPerHundredkm"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "versionNumber": "versionNumber",
    "origin": "origin",
    "contentType": "contentType",
    "fuelBudgetInLiters": "fuelBudgetInLiters",
    "energyBudgetInkWh": "energyBudgetInkWh",
    "timeBudgetInSec": "timeBudgetInSec",
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
    "constantSpeedConsumptionInLitersPerHundredkm": "constantSpeedConsumptionInLitersPerHundredkm",
    "currentFuelInLiters": "currentFuelInLiters",
    "auxiliaryPowerInLitersPerHour": "auxiliaryPowerInLitersPerHour",
    "fuelEnergyDensityInMJoulesPerLiter": "fuelEnergyDensityInMJoulesPerLiter",
    "accelerationEfficiency": "accelerationEfficiency",
    "decelerationEfficiency": "decelerationEfficiency",
    "uphillEfficiency": "uphillEfficiency",
    "downhillEfficiency": "downhillEfficiency",
    "vehicleEngineType": "vehicleEngineType",
    "constantSpeedConsumptionInkWhPerHundredkm": "constantSpeedConsumptionInkWhPerHundredkm",
    "allowVignette": "allowVignette",
    "rectangles": "rectangles",
    "avoidAreas": "avoidAreas",
    "avoidVignette": "avoidVignette",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = cfg.body_content_type;

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
        pathName: '/routing/{versionNumber}/calculateReachableRange/{origin}/{contentType}',
        method: 'post',
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