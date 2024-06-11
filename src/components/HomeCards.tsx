import Card from "./Card"
import { Link } from 'react-router-dom';

const HomeCards = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card>
            <h2 className="text-2xl font-bold">Discover Your Favorites</h2>
            <p className="mt-2 mb-4">
              Browse and Collect Your Beloved Characters
            </p>
            <Link
              to="/characters"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Browse Characters
            </Link>
          </Card>
          <Card bg='bg-sky-50'>
            <h2 className="text-2xl font-bold">Add a New Character</h2>
            <p className="mt-2 mb-4">
              Expand Your Collection with a New Addition
            </p>
            <Link
              to="/add-character"
              className="inline-block bg-sky-600 text-white rounded-lg px-4 py-2 hover:bg-sky-500"
            >
              Add Character
            </Link>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default HomeCards