import { Link, useNavigate } from "react-router-dom"
import { CharacterProps } from "../types/character"
import { useDeleteCharacterMutation } from "../api/charactersApi";
import { toast } from 'react-toastify';
import Spinner from "./Spinner";

const ManageCharacter = ({ character }: CharacterProps) => {
  const navigate = useNavigate();
  const [deleteCharacter, { isLoading: isDeleting }] = useDeleteCharacterMutation();

  const handleDelete = async () => {
    const confirmed = window.confirm('Are you sure you want to delete this character?');
    if (!confirmed) {
      return; // Do nothing if user cancels
    }

    try {
      await deleteCharacter(character.id);
      toast.success('Character deleted successfully');
      navigate(`/characters`);
    } catch (error) {
      console.log('Failed to delete character:', error);
      toast.error('Failed to delete character. Please try again.');
    }
  };

  if (isDeleting) {
    return <Spinner />
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-xl font-bold mb-6">Manage Character</h3>
      <Link
        to={`/edit-character/${character.id}`}
        className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
        >Edit Character</Link
      >
      <button
        onClick={handleDelete}
        disabled={isDeleting}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
      >
        Delete Character
      </button>
    </div>
  )
}

export default ManageCharacter