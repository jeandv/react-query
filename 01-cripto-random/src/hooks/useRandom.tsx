import React from 'react';
import { useQuery } from '@tanstack/react-query';

const API = 'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new';

const getRandomNumberFromApi = async (): Promise<number> => {

  // try {

  const res = await fetch(API);

  const numberString = await res.text();

  // throw new Error('Error al obtener el número!');
  return +numberString;

  // } catch (err) {

  // console.log(`Error al obtener el número: ${err}`);
  // throw new Error('Error al obtener el número!');

  // }

}

export const useRandom = () => {

  const query = useQuery(
    ['randomQuery'],
    getRandomNumberFromApi
  );

  return query;
}