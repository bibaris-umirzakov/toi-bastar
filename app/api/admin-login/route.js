export async function POST(req) {
  const body = await req.json()
  const { username, password } = body

  const envUser = process.env.ADMIN_USERNAME
  const envPass = process.env.ADMIN_PASSWORD

  if (username === envUser && password === envPass) {
    return new Response(null, { status: 200 })
  } else {
    return new Response(null, { status: 401 })
  }
}
