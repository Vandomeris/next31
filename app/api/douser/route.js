export async function POST(request) {
    const data = await request.json()
    console.log(data);

    return Response.json({
        result: 'OK!'
    })
}