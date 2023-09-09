import {Dimension, findDimensionName, findUnitName, Unit} from 'enheter';
import {UnitKeywords} from 'tomas-react-tools';
import {capitalize} from '../../utils/stringUtils';

const unitTexts: UnitKeywords = {
  length: {
    angstrom: ['ångström', 'ångström'],
    astronomicalUnit: ['astronomisk enhet', 'astronomiske enheter'],
    chain: ['chain', 'chains'],
    fathom: ['favn', 'favn'],
    fermi: ['fermi', 'fermi'],
    foot: ['fot', 'fot'],
    furlong: ['furlong', 'furlong'],
    inch: ['tomme', 'tommer'],
    lightYear: ['lysår', 'lysår'],
    link: ['link', 'links'],
    metre: ['meter', 'meter'],
    micron: ['mikron', 'mikron'],
    nauticalMile: ['nautisk mil', 'nautiske mil'],
    parsec: ['parsek', 'parsek'],
    rod: ['stang', 'stenger'],
    scandinavianMile: ['mil', 'mil'],
    statuteMile: ['engelsk mil', 'engelske mil'],
    yard: ['yard', 'yards'],
  },
  mass: {
    carat: ['karat', 'karat'],
    gram: ['gram', 'gram'],
    kilogram: ['kilogram', 'kilograms'],
    ounce: ['unse', 'unse'],
    pound: ['pund', 'pund'],
    tonne: ['tonn', 'tonn'],
  },
  time: {
    day: ['dag', 'dager'],
    hour: ['time', 'timer'],
    minute: ['minutt', 'minutter'],
    second: ['sekund', 'sekunder'],
    week: ['uke', 'uker'],
  },
  temperature: {
    celsius: ['grad Celsius', 'grader Celsius'],
    delisle: ['grad Delisle', 'grader Delisle'],
    fahrenheit: ['grad Fahrenheit', 'grader Fahrenheit'],
    kelvin: ['kelvin', 'kelvin'],
    newton: ['grad Newton', 'grader Newton'],
    rankine: ['grad Rankine', 'grader Rankine'],
    reaumur: ['grad Réaumur', 'grader Réaumur'],
    romer: ['grad Rømer', 'grader Rømer'],
  },
  area: {
    acre: ['acre', 'acres'],
    are: ['are', 'ares'],
    dekare: ['mål', 'mål'],
    hectare: ['hektar', 'hektarer'],
    squareFoot: ['kvadratfot', 'kvadratfot'],
    squareInch: ['kvadrattomme', 'kvadrattommer'],
    squareMetre: ['kvadratmeter', 'kvadratmeter'],
    squareYard: ['kvadratyard', 'kvadratyard'],
  },
  volume: {
    cubicFoot: ['kubikkfot', 'kubikkfot'],
    cubicInch: ['kubikktomme', 'kubikktommer'],
    cubicMetre: ['kubikkmeter', 'kubikkmeter'],
    cubicYard: ['kubikkyard', 'kubikkyard'],
    imperialGallon: ['britisk gallon', 'britiske gallon'],
    litre: ['liter', 'liter'],
    usGallon: ['amerikansk gallon', 'amerikanske gallon'],
  },
  velocity: {
    footPerSecond: ['fot per sekund', 'fot per sekund'],
    kilometrePerHour: ['kilometer per time', 'kilometer per time'],
    knot: ['knop', 'knop'],
    metrePerHour: ['meter per time', 'meter per time'],
    metrePerSecond: ['meter per sekund', 'meter per sekund'],
    milePerHour: ['engelsk mil per time', 'engelske mil per time'],
  },
  acceleration: {
    footPerSecondSquared: ['fot per sekund per sekund', 'fot per sekund per sekund'],
    gal: ['galileo', 'galileo'],
    metrePerSecondSquared: ['meter per sekund per sekund', 'meter per sekund per sekund'],
    standardGravity: ['standard tyngdekraft', 'standard tyngdekrefter'],
  },
  charge: {
    coulomb: ['coulomb', 'coulomb'],
    elementaryCharge: ['elementærladning', 'elementærladninger'],
    statcoulomb: ['statcoulomb', 'statcoulomb'],
  },
  current: {
    ampere: ['ampere', 'ampere'],
  },
  energy: {
    calorie: ['kalori', 'kalorier'],
    electronVolt: ['elektronvolt', 'elektronvolt'],
    erg: ['erg', 'erg'],
    joule: ['joule', 'joule'],
    kilocalorie: ['kilokalori', 'kilokalorier'],
    kilowattHour: ['kilowattime', 'kilowattimer'],
    wattHour: ['wattime', 'wattimer'],
    wattSecond: ['wattsekund', 'wattsekunder'],
  },
  force: {
    dyne: ['dyne', 'dyne'],
    kilonewton: ['kilonewton', 'kilonewton'],
    kilopond: ['kilogramkraft', 'kilogramkrefter'],
    newton: ['newton', 'newton'],
    pond: ['gramkraft', 'gramkrefter'],
    pound: ['pund', 'pund'],
    poundal: ['poundal', 'poundal'],
  },
  frequency: {
    hertz: ['hertz', 'hertz'],
  },
  power: {
    horsepower: ['hestekraft', 'hestekrefter'],
    watt: ['watt', 'watt'],
  },
  pressure: {
    bar: ['bar', 'bar'],
    inchOfMercury: ['tomme kvikksølv', 'tommer kvikksølv'],
    kilopondPerSquareCentimetre: ['kilogramkraft per kvadratcentimeter', 'kilogramkrefter per kvadratcentimeter'],
    millibar: ['millibar', 'millibar'],
    pascal: ['pascal', 'pascal'],
    poundPerSquareInch: ['gramkraft per kvadrattomme', 'gramkrefter per kvadrattomme'],
    standardAtmosphere: ['standard atmosfære', 'standard atmosfærer'],
    torr: ['torr', 'torr'],
  },
  voltage: {
    volt: ['volt', 'volt'],
  },
  capacitance: {
    farad: ['farad', 'farad'],
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
    candlepower: ['normallysenhet', 'normallysenheter'],
  },
  conductance: {
    siemens: ['siemens', 'siemens'],
  },
  density: {
    kilogramPerCubicMetre: ['kilogram per kubikkmeter', 'kilogram per kubikkmeter'],
    gramPerCubicCentimetre: ['gram per kubikkcentimeter', 'gram per kubikkcentimeter'],
  },
  conductivity: {
    siemensPerMetre: ['siemens per meter', 'siemens per meter'],
  },
  resistivity: {
    ohmMetre: ['ohmmeter', 'ohmmeter'],
  },
  amountOfSubstance: {
    mole: ['mol', 'mol'],
  }
};

export const unitTextFnNb = <D extends Dimension>(unit: Unit<D>, plural: boolean = false): string => {
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