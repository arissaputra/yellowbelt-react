import logo from '../assets/react.svg';
import { NavLink } from 'react-router-dom';

interface LinkClassProps {
  isActive: boolean;
}

const Navbar = () => {
  const linkClass = ({ isActive }: LinkClassProps): string => {
    let result = 'text-white hover:bg-sky-500 hover:text-white rounded-md px-3 py-2';
    if (isActive) {
      result += ' bg-sky-600'
    }

    return result
  }

  return (
    <nav className="bg-slate-700 border-b border-slate-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div
            className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            {/* <!-- Logo --> */}
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img
                className="h-10 w-auto"
                src={logo}
                alt="React Yellow Belt"
              />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                React <span className='text-yellow-300'>Yellow</span> Belt
              </span>
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink
                  to="/"
                  className={linkClass}
                >Home</NavLink
                >
                <NavLink
                  to="/characters"
                  className={linkClass}
                >Characters</NavLink
                >
                <NavLink
                  to="/add-character"
                  className={linkClass}
                >Add Character</NavLink
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar