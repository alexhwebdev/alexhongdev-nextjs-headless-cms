# --------------------- UDEMY COURSE
# TypeScript & Next.js 14: Building a Tech Ticketing App
  + https://www.udemy.com/course/nextjs14-ticketapp/learn/lecture/43024812#overview


+ Node version
  > nvm use 22


+ shadcn / ui
  - https://ui.shadcn.com/themes

  > npx shadcn-ui@latest init
  > npm i @radix-ui/react-slot
  > npx shadcn-ui@latest add button
  > npx shadcn-ui@latest add table
  > npx shadcn-ui@latest add label
  > npx shadcn-ui@latest add input
  > npx shadcn-ui@latest add select
  > npx shadcn-ui@latest add card
  > npx shadcn-ui@latest add alert-dialog


+ MySQL
  + https://www.mysql.com/

    + Downloaded
      - MySQL Community Server
        - Root user password :
        - [DukeqHenry19043-12]

      - MySQL Workbench


+ Prisma
  > npm i prisma@5.6.0
  > npx prisma init
  > npx prisma format
  > npx prisma migrate dev

  + Best practice for instantiating Prisma Client with Next.js
    - https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices

    + Added 'prisma/db.ts'
      - Allows us to grab Prisma client, that allows us to connect to DB in our app.

      + eg. 
        DataTable.tsx :
        import { Ticket } from '@prisma/client';



+ Zod : 
  https://zod.dev/
  - Validation library
  - Allows us to create a ticket schema and set rules
  
  eg. :
    If your creating a user with password, you might want to set rules like 'has to be more than 8 characters'

  > npm i zod



+ React Hook Form
  - https://www.udemy.com/course/nextjs14-ticketapp/learn/lecture/41657324#questions/21664020

  > npm i react-hook-form


  > npm i @hookform/resolvers
    - Allows to use Zod with hook form.


  > npm i --save react-simplemde-editor easymde
    - Allow users to have a description that can be marked up so they can have bold text, italic, links, images



+ Axios 
  > npm i axios


+ React Markdown
  > npm i react-markdown









