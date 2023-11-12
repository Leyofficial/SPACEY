import axios from "axios";

export const getImageFromServer = async (id: string, callback: (arg: string) => void) => {
    console.log(id)
    try {
        const response = await axios.get(`https://spacey-server.vercel.app/uploads/${id}`, {responseType: 'arraybuffer'})
        console.log(response)
        const base64 = btoa(
            new Uint8Array(response.data).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                '',
            ),
        );
        callback("data:;base64," + base64)
        console.log(base64)

    } catch (err) {
        console.log(err)
    }
}