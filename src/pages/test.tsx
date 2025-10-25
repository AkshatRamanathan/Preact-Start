const delay = (dur: number) => {
    return new Promise(resolve => setTimeout(resolve, dur));
}

export const loader = async () => {
    await delay(3000);
    return { props: { testValue: 100 } }

}
type loaderReturnType = Awaited<typeof loader>;
// fix promise and get props to use in code
export default function Component({ }: loaderReturnType) {
    return <h2>TEST BODY</h2>
}