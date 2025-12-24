export default function ResultPage({ params }: { params: { id: string } }) {
  return (
    <div>
      Result Page {params.id}
    </div>
  );
}
