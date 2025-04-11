interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

type Admin = User & {
  role: "admin" | "superAdmin";
};

function createUser(userData: Partial<User>): User {
  return {
    id: Date.now(),
    name: userData.name!,
    email: userData.email!,
    isActive: userData.isActive ?? true,
  };
}

const newUser = createUser({
  name: "Junaid",
  email: "junaid@biome.io",
});
console.log(newUser);
