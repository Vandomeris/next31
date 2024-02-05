export async function PUT(request) {
    const body = await request.formData()
    const data = Object.fromEntries(body);
    console.log(data);
    return Response.json({
        result: 'ok'
    })
}