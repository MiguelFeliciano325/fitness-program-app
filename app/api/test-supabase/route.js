
export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  return Response.json({
    urlFound: Boolean(url),
    keyFound: Boolean(key),
    configured: Boolean(url && key),
  });
}
