import medals from '../../../../data/medals.json';

import withTotal from '../../../../lib/total';

export function GET() {
  const result = withTotal(medals);

  return Response.json({ result });
}
