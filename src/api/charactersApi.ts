import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Character } from '../types/character';

const CHARACTERS_URL = '/api/characters';

const charactersApi = createApi({
  reducerPath: 'charactersApi',
  baseQuery: fetchBaseQuery({ baseUrl: CHARACTERS_URL }),
  endpoints: (builder) => ({
    getCharacters: builder.query<Character[], number | undefined>({
      query: (limit) => {
        if (limit) {
          return `?_limit=${limit}`;
        }
        return '/';
      },
    }),
    getCharacterById: builder.query<Character, string | undefined>({
      query: (id) => `/${id}`,
    }),
    createCharacter: builder.mutation<Character, Partial<Character>>({
      query: ({ ...character }) => ({
        url: `/`,
        method: 'POST',
        body: character,
      }),
    }),
    updateCharacter: builder.mutation<Character, Partial<Character>>({
      query: ({ id, ...patch }) => ({
        url: `/${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteCharacter: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetCharactersQuery,
  useGetCharacterByIdQuery,
  useCreateCharacterMutation,
  useUpdateCharacterMutation,
  useDeleteCharacterMutation
} = charactersApi;

export default charactersApi;
