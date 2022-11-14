export default function Page({
  params,
  searchParams,
}: {
  params?: { slug: string };
  searchParams?: { id: string };
}) {
  // /route1 => { params: { slug: 'route1' } }
  // /route2?id=123 => { searchParams: { id: '123' } }
  return <p>{params?.slug}</p>;
}
