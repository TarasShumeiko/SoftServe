const mapContacts = data => {
  const [contacts] = [...data.filter(contact => contact.user === 'Vasya')];
  return {
    [contacts.user]: {
      brand: contacts.brand,
      phones: contacts.phones
    }
  }
};


const getUniqueCars = data => {
  const cars = [];
  data.forEach(userCars => {
    userCars.brand.map(model => {
      if (cars.indexOf(model) === -1) cars.push(model)
    })
  });
  return cars;
};


const groupContacts = data => {
  const operatorCodes = [];
  data.forEach(userNumbers => {
    userNumbers.phones.map(phoneNumber => {
      const code = phoneNumber.substr(0, 5);
      if (operatorCodes.indexOf(code) === -1) operatorCodes.push(code)
    })
  });

  const usersByNumbers = {};
  operatorCodes.forEach(code => {
    const contacts = [];
    data.map(user => {
      user.phones.map(phoneNumber => {
        if (phoneNumber.substr(0, 5) === code) {
          contacts.push(user)
        }
      })
    });
    Object.defineProperty(usersByNumbers, code, {value: contacts});
  });
  return usersByNumbers;
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

console.log(mapContacts(contacts));
console.log(getUniqueCars(contacts));
console.log(groupContacts(contacts));
