import { Route, Routes } from "react-router-dom"
import { Header } from "./layout/header"
import { Footer } from "./layout/footer"
import { User } from "./pages/user"
import { Profile } from "./pages/profile"
import { MainLayout } from "./layout/main-layout"
import { Home } from "./pages/home"
import { UserDetail } from "./pages/user-detail"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="user" element={<User />} />
          <Route path="profile" element={<Profile />} />
          <Route path="user/detail/:userId" element={<UserDetail />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>
      </Routes>
    </div>
  )
}
export default App
