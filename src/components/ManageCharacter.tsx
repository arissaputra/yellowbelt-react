import { Link } from "react-router-dom"
import { CharacterProps } from "../types/character"

const ManageCharacter = ({ character }: CharacterProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-xl font-bold mb-6">Manage Character</h3>
      <Link
        to={`/edit-character/${character.id}`}
        className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
        >Edit Character</Link
      >
      <button
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
      >
        Delete Character
      </button>
    </div>
  )
}

export default ManageCharacter