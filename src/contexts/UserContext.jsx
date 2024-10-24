import { createContext, useState, useEffect } from "react";

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    isAuthenticated: false,
    isAdmin: false,
    username: "",
  })

  useEffect(() => {
    const token = localStorage.getItem('authToken');

    if (token) {
      const storedUsername = localStorage.getItem('username');
      const storedIsAdmin = localStorage.getItem('isAdmin') === 'true';
      setUserData({
        isAuthenticated: true,
        isAdmin: storedIsAdmin,
        username: storedUsername
      })
    }
  }, []);

  const login = (username, isAdmin, token) => {
    setUserData({
      isAuthenticated: true,
      isAdmin,
      username
    })
    localStorage.setItem('authToken', token)
    localStorage.setItem('username', username);
    localStorage.setItem('isAdmin', isAdmin);
  }

  const logout = () => {
    setUserData({
      isAuthenticated: false,
      isAdmin: false,
      username: "",
    })
    localStorage.removeItem('authToken')
    localStorage.removeItem('username');
    localStorage.removeItem('isAdmin');
  }

  return (
    <UserContext.Provider value={{ userData, login, logout }}>
      {children}
    </UserContext.Provider>
  )
}