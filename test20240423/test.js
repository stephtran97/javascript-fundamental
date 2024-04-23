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

// ********************************************************
// Helper function
// Tim user
const findUser = (name) => {
  return DATA.find((item) => item.name === name);
};
// Filter nguoi khac gioi tinh
const filterByOppositeGender = (gender) => {
  return DATA.filter((item) => item.gender !== gender).map(getName);
};
const getName = (person) => person.name;
// 1. Danh sach ban chung giua Tuan vs Trung

const mutualFriends = (name1, name2) => {
  const p1 = findUser(name1);
  const p2 = findUser(name2);
  return p1.friends.filter((item) => p2.friends.includes(item));
};
console.log(mutualFriends("trung", "sy"));

// 2. Suggest +4 friends cho A Khoi; ko du 4 nguoi thi suggest ntn
// Neu user ko co friends thi suggest ban khac gioi -> ban cung gioi
const suggestFriends = (person) => {
  const p = findUser(person);
  const { friends, gender } = p;
  if (friends.length === 0) return filterByOppositeGender(gender);
};

// 3. Tim ban gai cho Trung

// 4. Tim ban cho Hoa: chi ket ban vs nu, sap xep theo do than thiet -> thu tu bang chu cai
