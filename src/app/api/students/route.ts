import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

// GET - Récupérer tous les étudiants
export async function GET() {
  const students = await prisma.student.findMany();

  return NextResponse.json(students);
}

// POST - Créer un nouvel étudiant
export async function POST(request: NextRequest) {
  const body = await request.json();

  try {
    const student = await prisma.student.create({
      data: body,
    })
    
    return NextResponse.json(student, { status: 201 });
  } catch (error) {
    console.error("Erreur lors de la création de l'étudiant", error);
    return NextResponse.json({ error: "Erreur lors de la création de l'étudiant" }, { status: 500 });
  }
}
