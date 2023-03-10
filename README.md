# Blog site
This site exists because I wanted to try out using Prisma and Supabase together.

## Schema
This is what the Prisma schema looks like, nothing special since it's a simple blog site.
```Prisma
model Post {
  id          Int      @id @default(autoincrement())
  title       String
  content     String?
  published   Boolean  @default(false)
  slug        String?  @unique
  publishedAt DateTime @default(now())
  tags        Tag[]
}

model Tag {
  id    Int    @id @default(autoincrement())
  name  String @unique
  posts Post[]
}
```

## Installation

Make a directory or something before you clone it

```git
git clone https://github.com/bhwk/blog.git
```

Now install the dependencies:
```
//pick your poison
npm i
yarn add
pnpm install
```

## Enjoy!
