// Define a users schema
import { normalize, schema } from "normalizr"

const user = new schema.Entity("users")

// Define your comments schema
const comment = new schema.Entity("comments", {
  commenter: user
})

// Define your article
export const article = new schema.Entity("articles", {
  author: user,
  comments: [comment]
})

export const normalizeData = (data: any) => normalize(data, [article])
