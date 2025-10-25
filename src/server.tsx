//@ts-expect-error
import { renderToReadableStream } from 'preact-render-to-string/stream';
import { Suspense } from 'preact/compat';

const router = new Bun.FileSystemRouter({
  style: "nextjs",
  dir: "./src/pages",
});

Bun.serve({
  async fetch(req) {
    const matchedRoute = router.match(req);
    console.log(matchedRoute);
    const file = await import(matchedRoute?.filePath!);
    const Component = file.default;
    let props = {};
    if (file.loader) {
      props = await file.loader();
    }
    const stream = renderToReadableStream(
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Preact Start | SSR</title>
        </head>
        <body>
          <div id="root">
            <Suspense fallback={<>Loading...</>}>
              <Component {...props} />
            </Suspense>
          </div>
        </body>
      </html>
    );

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/html'
      }
    });
  }
});
