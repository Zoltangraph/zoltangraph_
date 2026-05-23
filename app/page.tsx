import fs from "fs";
import path from "path";

export default function Home() {
  const html = fs.readFileSync(path.join(process.cwd(), "app/main.html"), "utf8");
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
