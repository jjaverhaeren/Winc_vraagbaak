// Subopdracht: gemiddelde leeftijd
// Als we op de knop voor deze opdracht drukken komt er een lijst met knoppen te staan. De opdracht-knoppen blijven ook staan.
// Elk van de nieuwe knoppen heeft als naam een land ("Nederland" bijvoorbeeld).
// Als we dan op één van de landknoppen drukken zien we ergens in de pagina een zin verschijnen met de tekst "De gemiddelde persoon in {land} is {jaar} oud".
// Om die zin te kunnen laten zien moeten we de gemiddelde leeftijd voor dat land berekenen.
// Rond de gemiddelde leeftijd af naar hele cijfers ( 18.4999 → 18 en 18.5 → 19).

//Get an array of all regions (distinct):
const distinctRegions = () => {
  let onlyRegions = [];
  for (let i = 0; i < randomPersonData.length; i++) {
    const regionAndAge = randomPersonData[i].region;
    // log(regionAndAge);
    onlyRegions.push(regionAndAge);
  }
  onlyRegions.sort();
  const onlyDistinctRegions = [...new Set(onlyRegions)];
  return onlyDistinctRegions;
};

let regionAndAgeArray = [];
//get an array of all ages per region
//! region is now hardcoded - index of onlyDistinctRegions.
const getAgesToSum = () => {
  const onlyDistinctRegions = distinctRegions();
  onlyDistinctRegions.forEach((distinctRegion) => {
    for (let i = 0; i < randomPersonData.length; i++) {
      const regionAndAge = [
        randomPersonData[i].region,
        randomPersonData[i].age,
      ];

      regionAndAgeArray.push(regionAndAge);
    }

    const regionAndAgeSorted = regionAndAgeArray.sort();

    let agesToSum = [];
    for (let i = 0; i < regionAndAgeSorted.length; i++) {
      if (regionAndAgeSorted[i][0] === onlyDistinctRegions[0]) {
        agesToSum.push(regionAndAgeSorted[i][1]);
        log(agesToSum);
        return agesToSum;
      }
    }
  });
};

//calculate average age per region
const calcAverage = () => {
  const onlyDistinctRegions = distinctRegions();
  const agesToSum = getAgesToSum();
  function sum(total, num) {
    return total + num;
  }
  let agesSummed = agesToSum.reduce(sum);
  const average = Math.round(agesSummed / agesToSum.length);
  return average;
};

//show info of average age per region in h3 element
//! region shown in h3 element is now hardcoded - index of onlyDistinctRegions.
const showInfoOnH3 = () => {
  const onlyDistinctRegions = distinctRegions();
  const average = calcAverage();
  const infoH3 = document.getElementById("info");
  infoH3.innerHTML = `The average age in ${onlyDistinctRegions[0]} is ${average}`;
};

//Final function
const AverageAge = () => {
  try {
    const onlyDistinctRegions = distinctRegions();
    const agesToSum = getAgesToSum();
    const average = calcAverage();
    showInfoOnH3();
  } catch (err) {
    console.log(err);
  }
};

// AverageAge();

const setAverageAgeTitle = () => {
  parentOfList.innerHTML = "Gemiddelde Leeftijd:";
};

const showRegionBtns = () => {
  const onlyDistinctRegions = distinctRegions();
  for (i = 0; i < onlyDistinctRegions.length; i++) {
    const regionBtnsParent = document.getElementById("region-btns-container");
    const regionBtn = document.createElement("button");
    regionBtn.innerHTML = `${onlyDistinctRegions[i]}`;
    regionBtn.classList.add("region-btn");
    regionBtn.value = i;
    regionBtnsParent.appendChild(regionBtn);
  }
};
