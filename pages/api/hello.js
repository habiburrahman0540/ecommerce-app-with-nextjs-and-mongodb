// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import db from "../../utill/db"
export default function handler(req, res) {
  db.dbConnection();
  res.status(200).json({ name: 'John Doe' })
}
