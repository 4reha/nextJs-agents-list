import { useRouter } from 'next/router';
import React from 'react';

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  const paths = data.map((agent: any) => {
    return {
      params: { id: agent.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const data = await res.json();

  return {
    props: { agent: data },
  };
};

export default function Details({ agent }: any) {
  return (
    <div>
        <h1>{agent.name}</h1>
        <p>{agent.email}</p>
        <p>{agent.website}</p>
        <p>{agent.address.city}</p>
        
    </div>
  );
}
