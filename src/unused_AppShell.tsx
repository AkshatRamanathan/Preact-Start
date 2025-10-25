// import Outlet from './Outlet';
import { Route } from "preact-wouter";
import { Suspense } from "preact/compat";
import { Router } from "./Router";

// props path, component???? check if ServiceWorkerRegistrationuniform interface for be and fe hydration to check
// maybe use khudka filebased routing like tejas instead of bun but its good so lets see
export default function Component({ initialPath }: { initialPath: string }): any {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        {/* <Outlet /> */}
        <Router initialPath={initialPath}>
          <Route path="/">
            {/* <Breeds initialBreeds={[]} /> */}
          </Route>
          <Route path="/test">
            {/* <Breed initialBreed={""} initialImage={""} /> */}
          </Route>
        </Router>
      </Suspense>

    </>
  );
}

// use Custom Router ✅
// use Route from wouter ✅
// pass initial path to app shell for custom router ✅kinda but is this good? coz hydration routing again setup twice why 
// hyderate
