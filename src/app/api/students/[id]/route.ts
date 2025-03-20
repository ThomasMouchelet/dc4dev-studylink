import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Suppression des données en dur car nous utiliserons la base de données

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id);

    const deletedStudent = await prisma.student.delete({
      where: {
        id: id,
      },
    });

    if (!deletedStudent) {
      return NextResponse.json({ error: "Étudiant non trouvé" }, { status: 404 });
    }

    return NextResponse.json({ message: "Étudiant supprimé avec succès" });
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur lors de la suppression de l'étudiant" },
      { status: 500 }
    );
  }
} 