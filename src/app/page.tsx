"use client";

import {
  Document,
  Page,
  PDFViewer,
  Text,
} from "@alexandernanberg/react-pdf-renderer";

export default function Home() {
  return (
    <div>
      <PDFViewer className="w-full h-svh">
        <Document>
          <Page
            style={{
              padding: 40,
              paddingTop: 32,
            }}
          >
            <Text>Hello world from client</Text>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
}
