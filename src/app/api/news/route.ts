import data from '../../lib/assignment.json';

export async function GET() {
    // Just to overcame the CORS issues
    // Anyway my IP got blocked by the server

    // const searchParams = request.nextUrl.searchParams;
    // const page = searchParams.get('page');
    // const response = await fetch(`https://redactie.rtl.nl/nieuws/sport?_format=json&page=${page ?? 1}&v=2`);
    // const data = await response.json();

    data.items = data.items.map((item) => {
        item.id = Math.floor(Math.random() * 1000000);
        return item;
    });
    return Response.json({ data });
}
