import { db } from "@/lib/db";
import Button from "@/components/ui/Button";
export default async function Home() {

  await db.set('hello','hello')

  return (
    <>
  <div className="text-red-500">Allahu Akbar</div>
  <Button variant='ghost'>Yes</Button>
  </>
  )
}
