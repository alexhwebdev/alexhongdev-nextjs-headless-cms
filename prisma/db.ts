import { PrismaClient } from '@prisma/client'

// In this object we have access to models we have defined in our Schema.
// Methods to : Create, Read, Update, and Delete Users
const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma



// MOSH EXAMPLE
// // https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices
// import { PrismaClient } from '@prisma/client'

// // In this object we have access to models we have defined in our Schema.
// // Methods to : Create, Read, Update, and Delete Users
// const prismaClientSingleton = () => {
//   return new PrismaClient()
// }

// type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>

// const globalForPrisma = globalThis as unknown as {
//   prisma: PrismaClientSingleton | undefined
// }

// export const prisma = globalForPrisma.prisma ?? prismaClientSingleton()

// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
