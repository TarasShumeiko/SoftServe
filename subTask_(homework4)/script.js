const getUniqueCars = data => {
  return data
    .reduce((acc, curr) => ([...acc, ...curr.brand]), [])
    .filter((item, i, arr) => arr.indexOf(item) === i)
};

const contacts = [
  {
    "user": "Igor V",
    "brand": ["VW Golf", "Renault Symbol"],
    "phones": ["380684567934"]
  },
  {
    "user": "Igor S",
    "brand": ["Mazda CX-5", "VV bora"],
    "phones": ["380685438903"]
  },
  {
    "user": "Ruslan",
    "brand": ["Mazda 3", "VV bora", "VAZ 2111"],
    "phones": ["380986784345"]
  },
  {
    "user": "Roman",
    "brand": ["Mercedes GL", "Skoda Roomster"],
    "phones": ["380989909876"]
  },
  {
    "user": "Andriy",
    "brand": ["Peugeot Expert", "Skoda Roomster"],
    "phones": ["380681687096"]
  },
  {
    "user": "Bohdan",
    "brand": ["Volkswagen Polo", "Dacia Logan"],
    "phones": ["380979399997", "380959388887"]
  },
  {
    "user": "Vasya",
    "brand": ["Renault Kadjar", "Dacia Logan"],
    "phones": ["380970999997"]
  },
  {
    "user": "Dmytro",
    "brand": ["KIA Sorento", "Dacia Logan", "Mitsubishi Outlander"],
    "phones": ["380979889977"]
  },
  {
    "user": "Oleksiy",
    "brand": ["Nissan Qashqai", "Mitsubishi Outlander"],
    "phones": ["380998899990"]
  },
  {
    "user": "Yuriy",
    "brand": ["Toyota Camry"],
    "phones": ["380957899632"]
  }
];

console.log(getUniqueCars(contacts));
