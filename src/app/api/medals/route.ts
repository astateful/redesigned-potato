import medals from '../../../../data/medals.json';

export function GET() {
  return Response.json({ result: medals });
}
