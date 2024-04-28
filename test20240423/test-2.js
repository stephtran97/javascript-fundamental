const EGender = {
    male: 'male',
    female: 'female'
  };
  const usersDb = [
    {
      name: 'tuan',
      gender: EGender.male
    },
    {
      name: 'sy',
      gender: EGender.male
    },
    {
      name: 'trung',
      gender: EGender.male
    },
    {
      name: 'tu',
      gender: EGender.male
    },
    {
      name: 'hoa',
      gender: EGender.female
    },
  
    {
      name: 'dao',
      gender: EGender.female
    },
    {
      name: 'thao',
      gender: EGender.female
    },
    {
      name: 'hue',
      gender: EGender.female
    },
    {
      name: 'ly',
      gender: EGender.female
    },
    {
      name: 'tri',
      gender: EGender.male
    },
    {
      name: 'binh',
      gender: EGender.male
    },
    {
      name: 'an',
      gender: EGender.male
    },
    {
      name: 'thu',
      gender: EGender.female
    },
    {
      name: 'xuan',
      gender: EGender.female
    },
    {
      name: 'ha',
      gender: EGender.female
    },
    {
      name: 'khoi',
      gender: EGender.male
    }
  ];
  
  /*
  friendConnection = {
    user1: string,
    user2: string,
  
  }
  */
  
  const friendsDb = [
    {
      user1: 'tuan',
      user2: 'trung'
    },
    {
      user1: 'tuan',
      user2: 'sy'
    },
    {
      user1: 'tuan',
      user2: 'hoa'
    },
    {
      user1: 'tuan',
      user2: 'hue'
    },
    {
      user1: 'tuan',
      user2: 'ly'
    },
    {
      user1: 'trung',
      user2: 'sy'
    },
    {
      user1: 'trung',
      user2: 'khoi'
    },
    {
      user1: 'trung',
      user2: 'tu'
    },
    {
      user1: 'hoa',
      user2: 'hue'
    },
    {
      user1: 'hoa',
      user2: 'ly'
    },
    {
      user1: 'hoa',
      user2: 'dao'
    },
    {
      user1: 'hoa',
      user2: 'thao'
    },
    {
      user1: 'hoa',
      user2: 'tu'
    }
  ];
  
  // Helper function
  const getUserByUserName = (userName) => {
    return usersDb.find((user) => user.name === userName); // user object
  };
  
  const getName = (user) => user.name;
  
  const isFriend = (userName1, userName2) => {
    return (
      friendsDb.filter(
        (r) =>
          (r.user1 === userName1 && r.user2 === userName2) ||
          (r.user1 === userName2 && r.user2 === userName1)
      ).length > 0
    );
  };
  
  const getFriendsList = (userName) => {
    let result = [];
  
    const relations = friendsDb.filter((relation) =>
      Object.values(relation).includes(userName)
    );
    relations.forEach((relation) => {
      if (relation['user1'] === userName) {
        result.push(relation['user2']);
      } else result.push(relation['user1']);
    });
    return result;
  };
  
  // const getNumbersOfMutualFriends = (nameArray, userName) => {
  //   const numsOfMutual = nameArray.map(
  //     (name) => getMutualFriends(name, userName).length
  //   );
  //   return numsOfMutual;
  // };
  
  const getFriendsOfFriends = (userName, gender = 'all') => {
    let result = [];
  
    const friendsList = getFriendsList(userName);
    if (friendsList.length === 0) return [];
  
    const friendsOfFriends = Array.from(
      new Set(friendsList.map((name) => getFriendsList(name)).flat(Infinity))
    ).filter((name) => name !== userName);
    // sort by number of mutual friends
    result = friendsOfFriends.sort((a, b) => {
      return (
        getMutualFriends(b, userName).length -
        getMutualFriends(a, userName).length
      );
    });
    return result;
  };
  
  // Bai 1: Tim ban chung
  const getMutualFriends = (userName1, userName2) => {
    let result;
    const userWithMutualFriends = usersDb.filter(
      (user) => isFriend(user.name, userName1) && isFriend(user.name, userName2)
    );
    if (userWithMutualFriends.length === 0) {
      return [];
    }
    result = userWithMutualFriends.map(getName);
    return result;
  };
  console.log(`Loi giai bai 1: ${getMutualFriends('trung', 'tuan')}`);
  // 2. Suggest +4 friends cho A Khoi; ko du 4 nguoi thi suggest ntn
//   console.log(getFriendsOfFriends('trung'));
  