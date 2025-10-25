import { createContext } from "preact";
import { useEffect, useState } from "preact/hooks";

export const RouterContext = createContext({
    path: "",
    pushState: (path: string) => { },
    replaceState: (path: string) => { },
});

const canWindow = () => typeof window !== "undefined";

export const Router = ({
    initialPath,
    children,
}: {
    initialPath: string;
    children: any;
}) => {
    const [path, setPath] = useState<string>(
        canWindow() ? window.location.pathname : initialPath
    );

    const pushState = (path: string) => {
        window.history.pushState({}, "", path);
        setPath(path);
    };

    const replaceState = (path: string) => {
        window.history.replaceState({}, "", path);
        setPath(path);
    };

    useEffect(() => {
        window.addEventListener("popstate", () => {
            setPath(window.location.pathname);
        });
    }, []);

    return (
        <RouterContext.Provider value={{ path, pushState, replaceState }}>
            {children}
        </RouterContext.Provider>
    );
};
