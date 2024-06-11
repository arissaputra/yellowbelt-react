import { useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Character } from '../types/character';
import axios from 'axios';
import CharacterAppearance from '../components/CharacterAppearance';
import ManageCharacter from '../components/ManageCharacter';
import CharacterDetails from '../components/CharacterDetails';
import CharacterProfile from '../components/CharacterProfile';

const CharacterPage = () => {
  const [character, setCharacter] = useState<Character>();
  const { id } = useParams();

  useEffect(() => {
    const fetchCharacter = async () => {
      const apiUrl = `/api/characters/${id}`;
      try {
        const res = await axios.get(apiUrl);
        const data = res.data;
        setCharacter(data)
      } catch (error) {
        console.log('Error fetching data', error);
      }
    }

    fetchCharacter()
  }, [id])

  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/characters"
            className="text-indigo-500 hover:text-indigo-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Characters Page
          </Link>
        </div>
      </section>

      <section className="bg-indigo-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <CharacterProfile character={character} />
              <CharacterDetails character={character} />
            </main>

            <aside>
              <CharacterAppearance character={character} />
              <ManageCharacter character={character} />
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}

export default CharacterPage