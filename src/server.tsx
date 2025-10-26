//@ts-expect-error
import { renderToReadableStream } from 'preact-render-to-string/stream';
import { Suspense } from 'preact/compat';
import { Router } from './Router';

const router = new Bun.FileSystemRouter({
  style: "nextjs",
  dir: "./src/pages",
});

Bun.serve({
  async fetch(req) {
    const matchedRoute = router.match(req);
    // console.log(matchedRoute);
    const file = await import(matchedRoute?.filePath!);
    const Component = file.default;
    let props = {};
    if (file.loader) {
      props = await file.loader();
    }
    let title = "Preact Start | SSR";
    if (file.metadata && file.metadata.title) {
      title = file.metadata.title;
    }
    const stream = renderToReadableStream(
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>{title}</title>
        </head>
        <body>
          <div id="root">
            <nav>
              <p>
                <a href="/">Home Page</a>
              </p>
              <p>
                <a href="/test">Test Data loading</a>
              </p>
              <p>
                <a href="/random">Random link</a>
              </p>
            </nav>
            <Suspense fallback={<>Loading...</>}>
              <Router initialPath={matchedRoute?.pathname!}>
                <Component {...props} component={Component} />
              </Router>
            </Suspense>
          </div>
        </body>
      </html>,
    );

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/html'
      }
    });
  }
});
