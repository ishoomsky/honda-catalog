const FILTER_ALL='FILTER_ALL';
const FILTER_CARS='FILTER_CARS';
const FILTER_SUVS_CROSSOVERS='FILTER_SUVS_CROSSOVERS';
const FILTER_MINIVANS_TRUCKS='FILTER_MINIVANS_TRUCKS';

const filterAllAC = () => {
  return {
    type: FILTER_ALL,
  };
}

const filterCarsAC = () => {
  return {
    type: FILTER_CARS,
  };
}

const filterSuvsCrossoversAC = () => {
  return {
    type: FILTER_SUVS_CROSSOVERS,
  };
}

const filterMinivansTrucks = () => {
    return {
      type: FILTER_MINIVANS_TRUCKS,
    };
  }

export {
    filterAllAC, FILTER_ALL,
    filterCarsAC, FILTER_CARS,
    filterSuvsCrossoversAC, FILTER_SUVS_CROSSOVERS,
    filterMinivansTrucks, FILTER_MINIVANS_TRUCKS
}