import Head from 'next/head';

export function DefaultHead(): JSX.Element {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="description"
        content="Hello! This is Bryan, and I hope you are doing well"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  );
}
