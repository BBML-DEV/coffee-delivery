import { Outlet } from 'react-router-dom'

export const DefaultLayout = () => {
  return (
    <div>
      <h1>teste</h1>
      <Outlet />
    </div>
  )
}
