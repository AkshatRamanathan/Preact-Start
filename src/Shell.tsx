import Outlet from './Outlet';
import { Suspense } from "preact/compat";

export default function Component(): any {
  return (
    <>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Preact Start | SSR</title>
        </head>
        <body>
          <div id="root">
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </div>
        </body>
      </html>
    </>
  );
}