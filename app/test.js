import client from '@/lib/apollo-client';
import { gql } from '@apollo/client';

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query GetExampleData {
        generalSettings {
          title
          description
        }
      }
    `
  });

  return { props: { settings: data.generalSettings } };
}

export default function TestPage({ settings }) {
  return (
    <div>
      <h1>{settings.title}</h1>
      <p>{settings.description}</p>
    </div>
  );
}