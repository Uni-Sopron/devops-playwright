import { Link } from 'wouter'

export const Home = () => {
  return (
    <div>
      <h2>Home page</h2>
      <Link to="/todos">Todos</Link>
    </div>
  )
}
