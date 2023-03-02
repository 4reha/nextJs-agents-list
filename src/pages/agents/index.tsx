import styles from '../../styles/Agents.module.css';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { agents: data }
  }
};


export default function Agents({ agents }: any) {
  return (
    <div>
      <h1>All Agents</h1>
      {agents.map((agent: any) => (
        <div key={agent.id}>
          <a className={styles.single} href={`/agents/${agent.id}`}>
            <h3>{agent.name}</h3>
          </a>
        </div>
      ))}
    </div>
  );
}
