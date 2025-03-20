import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker/locale/fr'

const prisma = new PrismaClient()

const NOMBRE_ETUDIANTS = 50

async function main() {
  // Supprime toutes les données existantes
  await prisma.student.deleteMany({})

  // Crée les nouveaux étudiants
  const students = []

  for (let i = 0; i < NOMBRE_ETUDIANTS; i++) {
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()
    
    const student = {
      name: `${firstName} ${lastName}`,
      email: faker.internet.email({ firstName, lastName }).toLowerCase(),
      // Les champs createdAt et updatedAt sont gérés automatiquement par Prisma
    }

    students.push(student)
  }

  // Insère tous les étudiants dans la base de données
  await prisma.student.createMany({
    data: students
  })

  console.log(`✅ ${NOMBRE_ETUDIANTS} étudiants ont été créés`)
}

main()
  .catch((e) => {
    console.error('❌ Erreur lors du seeding:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 