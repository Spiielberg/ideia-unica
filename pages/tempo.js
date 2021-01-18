function Tempo(props) {
  const dynamicDate = new Date();
  const dynamicDateString = dynamicDate.toUTCString();

  return (
    <>
      <div>{dynamicDateString} (dinâmico)</div>
      <div>{props.staticDateString} (estático)</div>
    </>
  );
}

export async function getStaticProps() {
  await delay(5000);

  const staticDate = new Date();
  const staticDateString = staticDate.toUTCString();

  return {
    props: {
      staticDateString,
    },
  };
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export default Tempo;
