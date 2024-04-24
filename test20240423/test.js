const EGender = {
  male: "male",
  female: "female",
};
const DATA = [
  {
    name: "tuan",
    gender: EGender.male,
    friends: ["trung", "sy", "hoa", "hue", "ly"],
  },
  {
    name: "sy",
    gender: EGender.male,
    friends: ["tuan"],
  },
  {
    name: "trung",
    gender: EGender.male,
    friends: ["sy", "khoi", "tuan", "tu"],
  },
  {
    name: "tu",
    gender: EGender.male,
    friends: ["trung"],
  },
  {
    name: "hoa",
    gender: EGender.female,
    friends: ["hue", "ly", "dao", "thao", "tu"],
  },

  {
    name: "dao",
    gender: EGender.female,
    friends: ["hoa"],
  },
  {
    name: "thao",
    gender: EGender.female,
    friends: ["hoa"],
  },
  {
    name: "hue",
    gender: EGender.female,
    friends: ["tuan"],
  },
  {
    name: "ly",
    gender: EGender.female,
    friends: ["tuan"],
  },
  {
    name: "tri",
    gender: EGender.male,
    friends: [],
  },
  {
    name: "binh",
    gender: EGender.male,
    friends: [],
  },
  {
    name: "an",
    gender: EGender.male,
    friends: [],
  },
  {
    name: "thu",
    gender: EGender.female,
    friends: [],
  },
  {
    name: "xuan",
    gender: EGender.female,
    friends: [],
  },
  {
    name: "ha",
    gender: EGender.female,
    friends: [],
  },
  {
    name: "khoi",
    gender: EGender.male,
    friends: ["trung"],
  },
];

// --------------------------------------
// Helper function
// Tim user
const findUser = (name) => {
  return DATA.find((item) => item.name === name);
};

const getName = (person) => person.name;
const getFriends = (person) => person.friends;

const filterByGender = (gender) => {
  return DATA.filter((p) => p.gender === gender);
};

const getFriendsOfFriends = (name, gender = "all") => {
  const person = findUser(name); // person object

  if (!person) throw new Error("No person found");
  const { friends } = person; // array friends ['a','b',...]

  if (friends.length === 0) return [];

  let friendsObj;

  friendsObj = friends.map((fname) => findUser(fname)); // array objects [{},{},...]
  if (friendsObj.length === 0) return [];

  const friendsOfFriendsObj = friendsObj.map(getFriends).flat().map(findUser); // array objects [{},{},...]

  // Filter found names by gender
  let names;

  if (gender === "all") {
    names = friendsOfFriendsObj.map(getName).flat(); // all names
  } else {
    const filteredFOfFObj = friendsOfFriendsObj.filter(
      (item) => item.gender === gender
    );
    names = filteredFOfFObj.map(getName).flat();
  }

  return Array.from(new Set(names)).filter((i) => i !== name);
};

// 1. Danh sach ban chung giua Tuan vs Trung

const mutualFriends = (name1, name2) => {
  const p1 = findUser(name1);
  const p2 = findUser(name2);
  return p1.friends.filter((item) => p2.friends.includes(item));
};
console.log(`Loi giai bai 1: ${mutualFriends("trung", "sy")}`);

// 2. Suggest +4 friends cho A Khoi; ko du 4 nguoi thi suggest ntn

const getFriendsSuggestions = (name, numberOfSuggestions) => {
  const friendsOfFriends = getFriendsOfFriends(name);

  const sortedNames = DATA.map(getName).sort();

  if (friendsOfFriends.length === 0) {
    return sortedNames.slice(0, numberOfSuggestions); // TODO: suggest ppl sorted alphabetically
  }

  if (friendsOfFriends.length < numberOfSuggestions) {
    const addingSortedNames = sortedNames.slice(
      0,
      numberOfSuggestions - friendsOfFriends.length
    );
    return [...friendsOfFriends, ...addingSortedNames]; // TODO: suggest more till length = numberOfSuggestions
  }
  if (friendsOfFriends.length >= numberOfSuggestions)
    return friendsOfFriends.slice(0, 4); // TODO: if result is sufficient of the number of suggestions
};
console.log(`Loi giai bai 2: ${getFriendsSuggestions("khoi", 4)}`);

// 3. Tim ban gai cho Trung

const findFriend = (name, gender) => {
  const friendsOfFriends = getFriendsOfFriends(name, gender);
  // Suggest friend theo do than thiet, bang chu cai
  return Array.from(
    new Set(
      [
        ...friendsOfFriends,
        ...filterByGender(gender).map(getName).sort(),
      ].filter((n) => n !== name)
    )
  );
};
console.log(`Loi giai bai 3: ${findFriend("trung", EGender.female)}`);

// 4. Suggest ban nu cho Hoa, sap xep theo than thiet , bang chu cai
const findNewFriend = (name, gender) => {
  const person = findUser(name);
  const friendsOfFriends = getFriendsOfFriends(name, gender);
  // Suggest new friend theo do than thiet, bang chu cai
  return Array.from(
    new Set(
      [...friendsOfFriends, ...filterByGender(gender).map(getName).sort()]
        .filter((n) => !person.friends.includes(n))
        .filter((n) => n !== name)
    )
  );
};
console.log(`Loi giai bai 4: ${findNewFriend("hoa", EGender.female)}`);
