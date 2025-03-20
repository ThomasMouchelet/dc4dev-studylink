interface SinglePageProps {
  params: {
    id: string;
  };
}

export default async function StudentSinglePage({ params }: SinglePageProps) {
  const { id } = await params;
  console.log(id);

  return <div>Student single Page</div>;
}
