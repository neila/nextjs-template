async function getPost(slug: string) {
  const res = await fetch('...');
  return res.json();
}

export default async function Head({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  return (
    <>
      <title>{post.title}</title>
      <meta />
    </>
  );
}
