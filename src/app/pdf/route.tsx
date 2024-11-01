import {
  Document,
  Page,
  renderToStream,
  Text,
} from "@alexandernanberg/react-pdf-renderer";

export async function GET() {
  const stream = await renderToStream(
    <Document>
      <Page
        style={{
          padding: 40,
          paddingTop: 32,
        }}
      >
        <Text>Hello world</Text>
      </Page>
    </Document>
  );

  // @ts-expect-error todo
  return new Response(stream, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="react-pdf-nextjs.pdf"`,
    },
  });
}
