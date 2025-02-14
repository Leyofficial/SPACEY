import axios from "axios";

export const getImageFromServer = async (
  id: string,
  callback: (arg: string) => void,
  isLoad?: (arg: boolean) => void
) => {
  if (isLoad) isLoad(true);
  try {
    if (id) {
      const response = await axios.get(
        `https://spacey-server-two.vercel.app/uploads/${id}`,
        { responseType: "arraybuffer" }
      );

      const base64 = btoa(
        new Uint8Array(response.data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ""
        )
      );
      callback(`data:;base64,` + base64);
      if (isLoad) isLoad(false);
    } else {
      return;
    }
  } catch (err) {
    // console.log(err)
    if (isLoad) isLoad(false);
  }
};
