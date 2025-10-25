const delay = (dur: number) => {
  return new Promise(resolve => setTimeout(resolve, dur));
}

export default async function Component() {
  await delay(3000);
  return <h1>Landing page!</h1>
}