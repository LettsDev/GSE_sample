// import { createContext, useContext, useState } from "react";
// import axios from "axios";

// import type { User, AuthContextType } from "./types.context";

// const AuthContext = createContext<AuthContextType>(null!);

// export function useAuth() {
//   return useContext(AuthContext);
// }

// export function AuthProvider({ children }: { children: React.ReactNode }) {
//   const [user, setUser] = useState<User>();

//   const login = async (
//     email: string,
//     password: string,
//     callback: VoidFunction
//   ) => {
//     await axios
//       .post("/auth", { email, password })
//       .then((res) => {
//         const { name, location, auth_level }: User = res.data.userDetails;
//         setUser({ name, location, auth_level });
//         return callback();
//       })
//       .catch((err) => {
//         //error
//         console.log(err);
//         //need toast

//         return callback();
//       });
//   };
//   const logout = async (callback: VoidFunction) => {
//     await axios
//       .get("/auth")
//       .then((res) => {
//         setUser(undefined);
//         return callback();
//       })
//       .catch((err) => {
//         // error if already logged out, would still want the same action

//         console.log(err);
//         return callback();
//       });
//   };

//   return (
//     <AuthContext.Provider value={{ login, logout, user }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }
