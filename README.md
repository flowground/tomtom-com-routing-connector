# ![LOGO](logo.png) Routing **flow**ground Connector

## Description

A generated **flow**ground connector for the Routing API (version 1.0.0).

Generated from: https://api.apis.guru/v2/specs/tomtom.com/routing/1.0.0/openapi.json<br/>
Generated at: 2019-05-07T17:44:25+03:00

## API Description

Routing consists of the following service:
<b>Calculate Route</b>
Calculates a route between an origin and a destination, passing through waypoints (if specified). Additional routing parameters like traffic, avoidance conditions, departure/arrival time etc. can be taken into account.
<b>Calculate Reachable Range</b>
Calculates a set of locations that can be reached from the origin point, subject to the available fuel or energy budget that is specified in the request.

## Authorization

Supported authorization schemes:
- API Key
## Actions

### Reachable Range

> Calculates a set of locations that can be reached from the origin point.

*Tags:* `Routing`

#### Input Parameters
* `versionNumber` - _required_ - Service version number. The current value is 1.
    Possible values: 1.
* `origin` - _required_ - Point from which the range calculation should start.
* `contentType` - _required_ - The content type of the response structure. If the content type is jsonp, a callback method can be specified in the query parameters.
    Possible values: xml, json, jsonp.
* `fuelBudgetInLiters` - _optional_ - Fuel budget in liters. Determines the maximum vehicle range using the specified Combustion Consumption Model.
* `energyBudgetInkWh` - _optional_ - Electric energy budget in kilowatt hours (kWh). Determines the maximum vehicle range using the specified Electric Consumption Model.
* `timeBudgetInSec` - _optional_ - Time budget in seconds. Determines the maximum vehicle range using the specified driving time. The consumption parameters in the request will only affect eco-routes, and thereby indirectly the driving time.
* `callback` - _optional_ - Specifies the jsonp callback method.
* `report` - _optional_ - Specifies which data should be reported for diagnosis purposes.
    Possible values: effectiveSettings.
* `departAt` - _optional_ - The date and time of departure from the origin point. Departure times apart from <i>now</i> must be specified as a dateTime.
* `arriveAt` - _optional_ - The date and time of arrival at the destination point. It must be specified as a dateTime.
* `routeType` - _optional_ - The type of route requested.
    Possible values: fastest, shortest, eco, thrilling.
* `traffic` - _optional_ - Determines whether current traffic is used in route calculations. Note that information on historic road speeds is always used.
* `avoid` - _optional_ - Specifies whether the routing engine should try to avoid specific types of road segment when calculating the route. Can be specified multiple times.
Possible values:
  - tollRoads
  - motorways
  - ferries
  - unpavedRoads
  - carpools
* `travelMode` - _optional_ - The mode of travel for the requested route.
    Possible values: car, truck, taxi, bus, van, motorcycle, bicycle, pedestrian.
* `hilliness` - _optional_ - Degree of hilliness for calculating a thrilling route.
    Possible values: low, normal, high.
* `windingness` - _optional_ - Amount that a thrilling route should wind.
    Possible values: low, normal, high.
* `vehicleMaxSpeed` - _optional_ - Maximum speed of the vehicle in km/hour.
* `vehicleWeight` - _optional_ - Weight of the vehicle in kilograms.
* `vehicleAxleWeight` - _optional_ - Weight per axle of the vehicle in kg.
* `vehicleLength` - _optional_ - Length of the vehicle in meters.
* `vehicleWidth` - _optional_ - Width of the vehicle in meters.
* `vehicleHeight` - _optional_ - Height of the vehicle in meters.
* `vehicleCommercial` - _optional_ - Indicates that the vehicle is used for commercial purposes. This means it may not be allowed on certain roads.
* `vehicleLoadType` - _optional_ - Indicates what kinds of hazardous materials the vehicle is carrying (if any). This means it may not be allowed on certain roads.
Use these for routing in the US:

  - <i>USHazmatClass1</i> Explosives
  - <i>USHazmatClass2</i> Compressed gas
  - <i>USHazmatClass3</i> Flammable liquids
  - <i>USHazmatClass4</i> Flammable solids
  - <i>USHazmatClass5</i> Oxidizers
  - <i>USHazmatClass6</i> Poisons
  - <i>USHazmatClass7</i> Radioactive
  - <i>USHazmatClass8</i> Corrosives
  - <i>USHazmatClass9</i> Miscellaneous

Use these for routing in all other countries:

  - <i>otherHazmatExplosive</i> Explosives
  - <i>otherHazmatGeneral</i> Miscellaneous
  - <i>otherHazmatHarmfulToWater</i> Harmful to water

vehicleLoadType can be specified multiple times. This parameter is currently only considered for <b>travelMode</b>=<i>truck</i>.
* `constantSpeedConsumptionInLitersPerHundredkm` - _optional_ - Specifies the speed-dependent component of consumption. Provided as an unordered list of speed/consumption-rate pairs.
* `currentFuelInLiters` - _optional_ - Specifies the current supply of fuel in liters.
* `auxiliaryPowerInLitersPerHour` - _optional_ - Specifies the amount of fuel consumed for sustaining auxiliary systems of the vehicle, in liters per hour.
* `fuelEnergyDensityInMJoulesPerLiter` - _optional_ - Specifies the amount of chemical energy stored in one liter of fuel in megajoules (MJ).
* `accelerationEfficiency` - _optional_ - Specifies the efficiency of converting chemical energy stored in fuel to kinetic energy when the vehicle accelerates (i.e. KineticEnergyGained/ChemicalEnergyConsumed).
* `decelerationEfficiency` - _optional_ - Specifies the efficiency of converting kinetic energy to saved (not consumed) fuel when the vehicle decelerates (i.e. ChemicalEnergySaved/KineticEnergyLost).
* `uphillEfficiency` - _optional_ - Specifies the efficiency of converting chemical energy stored in fuel to potential energy when the vehicle gains elevation (i.e. PotentialEnergyGained/ChemicalEnergyConsumed).
* `downhillEfficiency` - _optional_ - Specifies the efficiency of converting potential energy to saved (not consumed) fuel when the vehicle loses elevation (i.e. ChemicalEnergySaved/PotentialEnergyLost).
* `vehicleEngineType` - _optional_ - Engine type of the vehicle.
    Possible values: combustion, electric.
* `constantSpeedConsumptionInkWhPerHundredkm` - _optional_ - Specifies the speed-dependent component of consumption. Provided as an unordered list of speed/consumption-rate pairs.

### Reachable Range

> Calculates a set of locations that can be reached from the origin point. POST method handles additionally parameters: <em>supportingPoints</em>, <em>allowVignette</em>, <em>avoidVignette</em>, <em>avoidAreas</em>.

*Tags:* `Routing`

#### Input Parameters
* `versionNumber` - _required_ - Service version number. The current value is 1.
    Possible values: 1.
* `origin` - _required_ - Point from which the range calculation should start.
* `contentType` - _required_ - The content type of the response structure. If the content type is jsonp, a callback method can be specified in the query parameters.
    Possible values: xml, json, jsonp.
* `fuelBudgetInLiters` - _optional_ - Fuel budget in liters. Determines the maximum vehicle range using the specified Combustion Consumption Model.
* `energyBudgetInkWh` - _optional_ - Electric energy budget in kilowatt hours (kWh). Determines the maximum vehicle range using the specified Electric Consumption Model.
* `timeBudgetInSec` - _optional_ - Time budget in seconds. Determines the maximum vehicle range using the specified driving time. The consumption parameters in the request will only affect eco-routes, and thereby indirectly the driving time.
* `callback` - _optional_ - Specifies the jsonp callback method.
* `report` - _optional_ - Specifies which data should be reported for diagnosis purposes.
    Possible values: effectiveSettings.
* `departAt` - _optional_ - The date and time of departure from the origin point. Departure times apart from <i>now</i> must be specified as a dateTime.
* `arriveAt` - _optional_ - The date and time of arrival at the destination point. It must be specified as a dateTime.
* `routeType` - _optional_ - The type of route requested.
    Possible values: fastest, shortest, eco, thrilling.
* `traffic` - _optional_ - Determines whether current traffic is used in route calculations. Note that information on historic road speeds is always used.
* `avoid` - _optional_ - Specifies whether the routing engine should try to avoid specific types of road segment when calculating the route. Can be specified multiple times.
Possible values:
  - tollRoads
  - motorways
  - ferries
  - unpavedRoads
  - carpools
* `travelMode` - _optional_ - The mode of travel for the requested route.
    Possible values: car, truck, taxi, bus, van, motorcycle, bicycle, pedestrian.
* `hilliness` - _optional_ - Degree of hilliness for calculating a thrilling route.
    Possible values: low, normal, high.
* `windingness` - _optional_ - Amount that a thrilling route should wind.
    Possible values: low, normal, high.
* `vehicleMaxSpeed` - _optional_ - Maximum speed of the vehicle in km/hour.
* `vehicleWeight` - _optional_ - Weight of the vehicle in kilograms.
* `vehicleAxleWeight` - _optional_ - Weight per axle of the vehicle in kg.
* `vehicleLength` - _optional_ - Length of the vehicle in meters.
* `vehicleWidth` - _optional_ - Width of the vehicle in meters.
* `vehicleHeight` - _optional_ - Height of the vehicle in meters.
* `vehicleCommercial` - _optional_ - Indicates that the vehicle is used for commercial purposes. This means it may not be allowed on certain roads.
* `vehicleLoadType` - _optional_ - Indicates what kinds of hazardous materials the vehicle is carrying (if any). This means it may not be allowed on certain roads.
Use these for routing in the US:

  - <i>USHazmatClass1</i> Explosives
  - <i>USHazmatClass2</i> Compressed gas
  - <i>USHazmatClass3</i> Flammable liquids
  - <i>USHazmatClass4</i> Flammable solids
  - <i>USHazmatClass5</i> Oxidizers
  - <i>USHazmatClass6</i> Poisons
  - <i>USHazmatClass7</i> Radioactive
  - <i>USHazmatClass8</i> Corrosives
  - <i>USHazmatClass9</i> Miscellaneous

Use these for routing in all other countries:

  - <i>otherHazmatExplosive</i> Explosives
  - <i>otherHazmatGeneral</i> Miscellaneous
  - <i>otherHazmatHarmfulToWater</i> Harmful to water

vehicleLoadType can be specified multiple times. This parameter is currently only considered for <b>travelMode</b>=<i>truck</i>.
* `constantSpeedConsumptionInLitersPerHundredkm` - _optional_ - Specifies the speed-dependent component of consumption. Provided as an unordered list of speed/consumption-rate pairs.
* `currentFuelInLiters` - _optional_ - Specifies the current supply of fuel in liters.
* `auxiliaryPowerInLitersPerHour` - _optional_ - Specifies the amount of fuel consumed for sustaining auxiliary systems of the vehicle, in liters per hour.
* `fuelEnergyDensityInMJoulesPerLiter` - _optional_ - Specifies the amount of chemical energy stored in one liter of fuel in megajoules (MJ).
* `accelerationEfficiency` - _optional_ - Specifies the efficiency of converting chemical energy stored in fuel to kinetic energy when the vehicle accelerates (i.e. KineticEnergyGained/ChemicalEnergyConsumed).
* `decelerationEfficiency` - _optional_ - Specifies the efficiency of converting kinetic energy to saved (not consumed) fuel when the vehicle decelerates (i.e. ChemicalEnergySaved/KineticEnergyLost).
* `uphillEfficiency` - _optional_ - Specifies the efficiency of converting chemical energy stored in fuel to potential energy when the vehicle gains elevation (i.e. PotentialEnergyGained/ChemicalEnergyConsumed).
* `downhillEfficiency` - _optional_ - Specifies the efficiency of converting potential energy to saved (not consumed) fuel when the vehicle loses elevation (i.e. ChemicalEnergySaved/PotentialEnergyLost).
* `vehicleEngineType` - _optional_ - Engine type of the vehicle.
    Possible values: combustion, electric.
* `constantSpeedConsumptionInkWhPerHundredkm` - _optional_ - Specifies the speed-dependent component of consumption. Provided as an unordered list of speed/consumption-rate pairs.

### Calculate Route

> Calculates a route between an origin and a destination.

*Tags:* `Routing`

#### Input Parameters
* `versionNumber` - _required_ - Service version number. The current value is 1.
    Possible values: 1.
* `locations` - _required_ - Locations through which the calculated route must pass.
* `contentType` - _required_ - The content type of the response structure. If the content type is jsonp, a callback method can be specified in the query parameters.
    Possible values: xml, json, jsonp.
* `maxAlternatives` - _optional_ - Number of alternative routes to be calculated.
* `alternativeType` - _optional_ - Determines whether the alternative routes to be calculated should be better with respect to the planning criteria provided than the reference route.
    Possible values: anyRoute, betterRoute.
* `minDeviationDistance` - _optional_ - All alternative routes will follow the reference route for the specified minimum number of meters starting from the origin point.
* `minDeviationTime` - _optional_ - All alternative routes will follow the reference route for the specified minimum number of seconds starting from the origin point.
* `instructionsType` - _optional_ - If specified, guidance instructions will be returned (if available).
    Possible values: coded, text, tagged.
* `language` - _optional_ - The language parameter determines the language of the guidance messages.
* `computeBestOrder` - _optional_ - Re-order the route waypoints to reduce the route length.
* `routeRepresentation` - _optional_ - Specifies the representation of the set of routes provided as a response.
    Possible values: polyline, none.
* `computeTravelTimeFor` - _optional_ - Specifies whether to return additional travel times using different types of traffic information (none, historic, live) as well as the default best-estimate travel time.
    Possible values: none, all.
* `vehicleHeading` - _optional_ - The directional heading of the vehicle in degrees. Entered in degrees, measured clockwise from north (so north is 0, east is 90, etc.).
* `sectionType` - _optional_ - Specifies which section types are explicitly reported in the route response. Can be specified multiple times.
  - carTrain, ferry, tunnel or motorway
  - pedestrian
  - tollRoad
  - tollVignette
  - country
  - travelMode
  - traffic
* `callback` - _optional_ - Specifies the jsonp callback method.
* `report` - _optional_ - Specifies which data should be reported for diagnosis purposes.
    Possible values: effectiveSettings.
* `departAt` - _optional_ - The date and time of departure from the origin point. Departure times apart from <i>now</i> must be specified as a dateTime.
* `arriveAt` - _optional_ - The date and time of arrival at the destination point. It must be specified as a dateTime.
* `routeType` - _optional_ - The type of route requested.
    Possible values: fastest, shortest, eco, thrilling.
* `traffic` - _optional_ - Determines whether current traffic is used in route calculations. Note that information on historic road speeds is always used.
* `avoid` - _optional_ - Specifies whether the routing engine should try to avoid specific types of road segment when calculating the route. Can be specified multiple times.
Possible values:
  - tollRoads
  - motorways
  - ferries
  - unpavedRoads
  - carpools
  - alreadyUsedRoads
* `travelMode` - _optional_ - The mode of travel for the requested route.
    Possible values: car, truck, taxi, bus, van, motorcycle, bicycle, pedestrian.
* `hilliness` - _optional_ - Degree of hilliness for calculating a thrilling route.
    Possible values: low, normal, high.
* `windingness` - _optional_ - Amount that a thrilling route should wind.
    Possible values: low, normal, high.
* `vehicleMaxSpeed` - _optional_ - Maximum speed of the vehicle in km/hour.
* `vehicleWeight` - _optional_ - Weight of the vehicle in kilograms.
* `vehicleAxleWeight` - _optional_ - Weight per axle of the vehicle in kg.
* `vehicleLength` - _optional_ - Length of the vehicle in meters.
* `vehicleWidth` - _optional_ - Width of the vehicle in meters.
* `vehicleHeight` - _optional_ - Height of the vehicle in meters.
* `vehicleCommercial` - _optional_ - Indicates that the vehicle is used for commercial purposes. This means it may not be allowed on certain roads.
* `vehicleLoadType` - _optional_ - Indicates what kinds of hazardous materials the vehicle is carrying (if any). This means it may not be allowed on certain roads.
Use these for routing in the US:

  - <i>USHazmatClass1</i> Explosives
  - <i>USHazmatClass2</i> Compressed gas
  - <i>USHazmatClass3</i> Flammable liquids
  - <i>USHazmatClass4</i> Flammable solids
  - <i>USHazmatClass5</i> Oxidizers
  - <i>USHazmatClass6</i> Poisons
  - <i>USHazmatClass7</i> Radioactive
  - <i>USHazmatClass8</i> Corrosives
  - <i>USHazmatClass9</i> Miscellaneous

Use these for routing in all other countries:

  - <i>otherHazmatExplosive</i> Explosives
  - <i>otherHazmatGeneral</i> Miscellaneous
  - <i>otherHazmatHarmfulToWater</i> Harmful to water

vehicleLoadType can be specified multiple times. This parameter is currently only considered for <b>travelMode</b>=<i>truck</i>.
* `vehicleEngineType` - _optional_ - Engine type of the vehicle.
    Possible values: combustion, electric.
* `constantSpeedConsumptionInLitersPerHundredkm` - _optional_ - Specifies the speed-dependent component of consumption. Provided as an unordered list of speed/consumption-rate pairs.
* `currentFuelInLiters` - _optional_ - Specifies the current supply of fuel in liters.
* `auxiliaryPowerInLitersPerHour` - _optional_ - Specifies the amount of fuel consumed for sustaining auxiliary systems of the vehicle, in liters per hour.
* `fuelEnergyDensityInMJoulesPerLiter` - _optional_ - Specifies the amount of chemical energy stored in one liter of fuel in megajoules (MJ).
* `accelerationEfficiency` - _optional_ - Specifies the efficiency of converting chemical energy stored in fuel to kinetic energy when the vehicle accelerates (i.e. KineticEnergyGained/ChemicalEnergyConsumed).
* `decelerationEfficiency` - _optional_ - Specifies the efficiency of converting kinetic energy to saved (not consumed) fuel when the vehicle decelerates (i.e. ChemicalEnergySaved/KineticEnergyLost).
* `uphillEfficiency` - _optional_ - Specifies the efficiency of converting chemical energy stored in fuel to potential energy when the vehicle gains elevation (i.e. PotentialEnergyGained/ChemicalEnergyConsumed).
* `downhillEfficiency` - _optional_ - Specifies the efficiency of converting potential energy to saved (not consumed) fuel when the vehicle loses elevation (i.e. ChemicalEnergySaved/PotentialEnergyLost).
* `constantSpeedConsumptionInkWhPerHundredkm` - _optional_ - Specifies the speed-dependent component of consumption. Provided as an unordered list of speed/consumption-rate pairs.

### Calculate Route

> Calculates a route between an origin and a destination. POST method handles additionally parameters: <em>supportingPoints</em>, <em>allowVignette</em>, <em>avoidVignette</em>, <em>avoidAreas</em>.

*Tags:* `Routing`

#### Input Parameters
* `versionNumber` - _required_ - Service version number. The current value is 1.
    Possible values: 1.
* `locations` - _required_ - Locations through which the calculated route must pass.
* `contentType` - _required_ - The content type of the response structure. If the content type is jsonp, a callback method can be specified in the query parameters.
    Possible values: xml, json, jsonp.
* `maxAlternatives` - _optional_ - Number of alternative routes to be calculated.
* `alternativeType` - _optional_ - Determines whether the alternative routes to be calculated should be better with respect to the planning criteria provided than the reference route.
    Possible values: anyRoute, betterRoute.
* `minDeviationDistance` - _optional_ - All alternative routes will follow the reference route for the specified minimum number of meters starting from the origin point.
* `minDeviationTime` - _optional_ - All alternative routes will follow the reference route for the specified minimum number of seconds starting from the origin point.
* `instructionsType` - _optional_ - If specified, guidance instructions will be returned (if available).
    Possible values: coded, text, tagged.
* `language` - _optional_ - The language parameter determines the language of the guidance messages.
* `computeBestOrder` - _optional_ - Re-order the route waypoints to reduce the route length.
* `routeRepresentation` - _optional_ - Specifies the representation of the set of routes provided as a response.
    Possible values: polyline, none.
* `computeTravelTimeFor` - _optional_ - Specifies whether to return additional travel times using different types of traffic information (none, historic, live) as well as the default best-estimate travel time.
    Possible values: none, all.
* `vehicleHeading` - _optional_ - The directional heading of the vehicle in degrees. Entered in degrees, measured clockwise from north (so north is 0, east is 90, etc.).
* `sectionType` - _optional_ - Specifies which section types are explicitly reported in the route response. Can be specified multiple times.
  - carTrain, ferry, tunnel or motorway
  - pedestrian
  - tollRoad
  - tollVignette
  - country
  - travelMode
  - traffic
* `callback` - _optional_ - Specifies the jsonp callback method.
* `report` - _optional_ - Specifies which data should be reported for diagnosis purposes.
    Possible values: effectiveSettings.
* `departAt` - _optional_ - The date and time of departure from the origin point. Departure times apart from <i>now</i> must be specified as a dateTime.
* `arriveAt` - _optional_ - The date and time of arrival at the destination point. It must be specified as a dateTime.
* `routeType` - _optional_ - The type of route requested.
    Possible values: fastest, shortest, eco, thrilling.
* `traffic` - _optional_ - Determines whether current traffic is used in route calculations. Note that information on historic road speeds is always used.
* `avoid` - _optional_ - Specifies whether the routing engine should try to avoid specific types of road segment when calculating the route. Can be specified multiple times.
Possible values:
  - tollRoads
  - motorways
  - ferries
  - unpavedRoads
  - carpools
  - alreadyUsedRoads
* `travelMode` - _optional_ - The mode of travel for the requested route.
    Possible values: car, truck, taxi, bus, van, motorcycle, bicycle, pedestrian.
* `hilliness` - _optional_ - Degree of hilliness for calculating a thrilling route.
    Possible values: low, normal, high.
* `windingness` - _optional_ - Amount that a thrilling route should wind.
    Possible values: low, normal, high.
* `vehicleMaxSpeed` - _optional_ - Maximum speed of the vehicle in km/hour.
* `vehicleWeight` - _optional_ - Weight of the vehicle in kilograms.
* `vehicleAxleWeight` - _optional_ - Weight per axle of the vehicle in kg.
* `vehicleLength` - _optional_ - Length of the vehicle in meters.
* `vehicleWidth` - _optional_ - Width of the vehicle in meters.
* `vehicleHeight` - _optional_ - Height of the vehicle in meters.
* `vehicleCommercial` - _optional_ - Indicates that the vehicle is used for commercial purposes. This means it may not be allowed on certain roads.
* `vehicleLoadType` - _optional_ - Indicates what kinds of hazardous materials the vehicle is carrying (if any). This means it may not be allowed on certain roads.
Use these for routing in the US:

  - <i>USHazmatClass1</i> Explosives
  - <i>USHazmatClass2</i> Compressed gas
  - <i>USHazmatClass3</i> Flammable liquids
  - <i>USHazmatClass4</i> Flammable solids
  - <i>USHazmatClass5</i> Oxidizers
  - <i>USHazmatClass6</i> Poisons
  - <i>USHazmatClass7</i> Radioactive
  - <i>USHazmatClass8</i> Corrosives
  - <i>USHazmatClass9</i> Miscellaneous

Use these for routing in all other countries:

  - <i>otherHazmatExplosive</i> Explosives
  - <i>otherHazmatGeneral</i> Miscellaneous
  - <i>otherHazmatHarmfulToWater</i> Harmful to water

vehicleLoadType can be specified multiple times. This parameter is currently only considered for <b>travelMode</b>=<i>truck</i>.
* `vehicleEngineType` - _optional_ - Engine type of the vehicle.
    Possible values: combustion, electric.
* `constantSpeedConsumptionInLitersPerHundredkm` - _optional_ - Specifies the speed-dependent component of consumption. Provided as an unordered list of speed/consumption-rate pairs.
* `currentFuelInLiters` - _optional_ - Specifies the current supply of fuel in liters.
* `auxiliaryPowerInLitersPerHour` - _optional_ - Specifies the amount of fuel consumed for sustaining auxiliary systems of the vehicle, in liters per hour.
* `fuelEnergyDensityInMJoulesPerLiter` - _optional_ - Specifies the amount of chemical energy stored in one liter of fuel in megajoules (MJ).
* `accelerationEfficiency` - _optional_ - Specifies the efficiency of converting chemical energy stored in fuel to kinetic energy when the vehicle accelerates (i.e. KineticEnergyGained/ChemicalEnergyConsumed).
* `decelerationEfficiency` - _optional_ - Specifies the efficiency of converting kinetic energy to saved (not consumed) fuel when the vehicle decelerates (i.e. ChemicalEnergySaved/KineticEnergyLost).
* `uphillEfficiency` - _optional_ - Specifies the efficiency of converting chemical energy stored in fuel to potential energy when the vehicle gains elevation (i.e. PotentialEnergyGained/ChemicalEnergyConsumed).
* `downhillEfficiency` - _optional_ - Specifies the efficiency of converting potential energy to saved (not consumed) fuel when the vehicle loses elevation (i.e. ChemicalEnergySaved/PotentialEnergyLost).
* `constantSpeedConsumptionInkWhPerHundredkm` - _optional_ - Specifies the speed-dependent component of consumption. Provided as an unordered list of speed/consumption-rate pairs.

## License

**flow**ground :- Telekom iPaaS / tomtom-com-routing-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
