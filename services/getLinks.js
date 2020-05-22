import fs from "fs";
import path from "path";
import matter from "gray-matter";

const linksDirectory = path.join(process.cwd(), "links");

export function getAllLinksSlug() {
  const filenames = fs.readdirSync(linksDirectory);
  return filenames.map((filename) => {
    return {
      params: {
        id: filename.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getSinglePost(id) {
  const fullPath = path.join(linksDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");
  const matterResult = matter(fileContents);

  return {
    id,
    ...matterResult.data,
  };
}
