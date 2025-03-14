
interface User {
  email: string;
  password: string;
  role: string;
}


const users: User[] = [
  {
    email: "systemadmin@pluto.com",
    password: "systemadmin",
    role: "systemadmin",
  },
  {
    email: "areaadmin@pluto.com",
    password: "areaadmin",
    role: "areaadmin",
  },
  {
    email: "stateadmin@pluto.com",
    password: "stateadmin",
    role: "stateadmin",
  },
  {
    email: "zoneadmin@pluto.com",
    password: "zoneadmin",
    role: "zoneadmin",
  },
];


export const authenticateUser = (email: string, password: string): string | null => {
  
  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  
  return user ? user.role : null; 
};
