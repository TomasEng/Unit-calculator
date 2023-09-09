import {Dimension, findDimensionName, findUnitName, Unit} from 'enheter';
import {UnitKeywords} from 'tomas-react-tools';
import {capitalize} from '../../utils/stringUtils';

const unitTexts: UnitKeywords = {
  length: {
    angstrom: ['ångström', 'ångström'],
    astronomicalUnit: ['astronomical unit', 'astronomical units'],
    chain: ['chain', 'chains'],
    fathom: ['fathom', 'fathoms'],
    fermi: ['fermi', 'fermi'],
    foot: ['foot', 'feet'],
    furlong: ['furlong', 'furlongs'],
    inch: ['inch', 'inches'],
    lightYear: ['light year', 'light years'],
    link: ['link', 'links'],
    metre: ['metre', 'metres'],
    micron: ['micron', 'microns'],
    nauticalMile: ['nautical mile', 'nautical miles'],
    parsec: ['parsec', 'parsecs'],
    rod: ['rod', 'rods'],
    scandinavianMile: ['scandinavian mile', 'scandinavian miles'],
    statuteMile: ['statute mile', 'statute miles'],
    yard: ['yard', 'yards'],
  },
  mass: {
    carat: ['carat', 'carats'],
    gram: ['gramme', 'grammes'],
    kilogram: ['kilogramme', 'kilogrammes'],
    ounce: ['ounce', 'ounces'],
    pound: ['pound', 'pounds'],
    tonne: ['tonne', 'tonnes'],
  },
  time: {
    day: ['day', 'days'],
    hour: ['hour', 'hours'],
    minute: ['minute', 'minutes'],
    second: ['second', 'seconds'],
    week: ['week', 'weeks'],
  },
  temperature: {
    celsius: ['degree Celsius', 'degrees Celsius'],
    delisle: ['degree Delisle', 'degrees Delisle'],
    fahrenheit: ['degree Fahrenheit', 'degrees Fahrenheit'],
    kelvin: ['degree Kelvin', 'degrees Kelvin'],
    newton: ['degree Newton', 'degrees Newton'],
    rankine: ['degree Rankine', 'degrees Rankine'],
    reaumur: ['degree Réaumur', 'degrees Réaumur'],
    romer: ['degree Rømer', 'degrees Rømer'],
  },
  area: {
    acre: ['acre', 'acres'],
    are: ['are', 'ares'],
    dekare: ['dekare', 'dekares'],
    hectare: ['hectare', 'hectares'],
    squareFoot: ['square foot', 'square feet'],
    squareInch: ['square inch', 'sqaure inches'],
    squareMetre: ['square metre', 'square metres'],
    squareYard: ['square yard', 'sqaure yards'],
  },
  volume: {
    cubicFoot: ['cubic foot', 'cubic feet'],
    cubicInch: ['cubic inch', 'cubic inches'],
    cubicMetre: ['cubic metre', 'cubic metres'],
    cubicYard: ['cubic yard', 'cubic yards'],
    imperialGallon: ['imperial gallon', 'imperial gallons'],
    litre: ['litre', 'litres'],
    usGallon: ['US gallon', 'US gallons'],
  },
  velocity: {
    footPerSecond: ['foot per second', 'feet per second'],
    kilometrePerHour: ['kilometre per hour', 'kilometres per hour'],
    knot: ['knot', 'knots'],
    metrePerHour: ['metre per hour', 'metres per hour'],
    metrePerSecond: ['metre per second', 'metres per second'],
    milePerHour: ['mile per hour', 'miles per hour'],
  },
  acceleration: {
    footPerSecondSquared: ['foot per second squared', 'feet per second squared'],
    gal: ['galileo', 'galileos'],
    metrePerSecondSquared: ['metre per second squared', 'metres per second squared'],
    standardGravity: ['unit of standard gravity', 'units of standard gravity'],
  },
  charge: {
    coulomb: ['coulomb', 'coulomb'],
    elementaryCharge: ['unit of elementary charge', 'units of elementary charge'],
    statcoulomb: ['statcoulomb', 'statcoulomb'],
  },
  current: {
    ampere: ['ampere', 'ampere'],
  },
  energy: {
    calorie: ['calorie', 'calories'],
    electronVolt: ['electron volt', 'electron volts'],
    erg: ['erg', 'ergs'],
    joule: ['joule', 'joules'],
    kilocalorie: ['kilocalorie', 'kilocalories'],
    kilowattHour: ['kilowatt hour', 'kilowatt hours'],
    wattHour: ['watt hour', 'watt hours'],
    wattSecond: ['watt second', 'watt seconds'],
  },
  force: {
    dyne: ['dyne', 'dynes'],
    kilonewton: ['kilonewton', 'kilonewtons'],
    kilopond: ['kilopond', 'kiloponds'],
    newton: ['newton', 'newtons'],
    pond: ['pond', 'ponds'],
    pound: ['pound', 'pounds'],
    poundal: ['poundal', 'poundals'],
  },
  frequency: {
    hertz: ['hertz', 'hertz'],
  },
  power: {
    horsepower: ['horsepower', 'horsepowers'],
    watt: ['watt', 'watts'],
  },
  pressure: {
    bar: ['bar', 'bar'],
    inchOfMercury: ['inch of mercury', 'inches of mercury'],
    kilopondPerSquareCentimetre: ['kilopond per square centimetre', 'kiloponds per square centimetre'],
    millibar: ['millibar', 'millibar'],
    pascal: ['pascal', 'pascals'],
    poundPerSquareInch: ['pound per square inch', 'pound per square inch'],
    standardAtmosphere: ['standard atmosphere', 'standard atmospheres'],
    torr: ['torr', 'torr'],
  },
  voltage: {
    volt: ['volt', 'volts'],
  },
  capacitance: {
    farad: ['farad', 'farads'],
  },
  resistance: {
    ohm: ['ohm', 'ohm'],
  },
  inductance: {
    henry: ['henry', 'henry'],
  },
  magneticFlux: {
    maxwell: ['maxwell', 'maxwell'],
    weber: ['weber', 'weber'],
  },
  magneticFluxDensity: {
    gauss: ['gauss', 'gauss'],
    tesla: ['tesla', 'tesla'],
  },
  luminousIntensity: {
    candela: ['candela', 'candela'],
    candlepower: ['candlepower', 'candlepowers'],
  },
  conductance: {
    siemens: ['siemens', 'siemens'],
  },
  density: {
    kilogramPerCubicMetre: ['kilogramme per cubic metre', 'kilogrammmes per cubic metre'],
    gramPerCubicCentimetre: ['gramme per cubic centimetre', 'grammes per cubic centimetre'],
  },
  conductivity: {
    siemensPerMetre: ['siemens per metre', 'siemens per metre'],
  },
  resistivity: {
    ohmMetre: ['ohm metre', 'ohm metres'],
  },
  amountOfSubstance: {
    mole: ['mole', 'moles'],
  }
};

export const unitTextFnEn = <D extends Dimension>(unit: Unit<D>, plural: boolean = false): string => {
  const dimensionName = findDimensionName(unit.dimension);
  const {prefix} = unit;
  const prefixlessUnit = unit.withPrefix(null);
  const prefixlessUnitName = findUnitName(prefixlessUnit);
  if (dimensionName && prefixlessUnitName && prefixlessUnitName in unitTexts[dimensionName]) {
    // @ts-ignore
    const prefixlessNames = unitTexts[dimensionName][prefixlessUnitName];
    const prefixlessName = plural ? prefixlessNames[1] : prefixlessNames[0];
    return capitalize((prefix || '') + prefixlessName);
  } else return '';
}