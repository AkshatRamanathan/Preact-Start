import { Suspense } from "preact/compat";

const delay = (dur: number) => {
    return new Promise(resolve => setTimeout(resolve, dur));
}

export const loader = async () => {
    await delay(3000);
    return { testValue: 100 };
}

type loaderReturnData = Awaited<typeof loader>

export const metadata = ({
    title: "Test page"
});

// fix promise and get props to use in code
export default function Component({ testValue }: Awaited<typeof loader>) {
    return (
        <main>
            <h2>TEST BODY</h2>
            <Suspense fallback={<>Loading Data...</>}>
                <p>{testValue}</p>
            </Suspense>
        </main>
    );
}