import React from "react"
import ArticleUpload from "./Article_Upload"

import axios from "axios"

import { useForm } from "react-hook-form"

const KEY_P = process.env.REACT_APP_KEY_P

export default function Verkaufsformular({
  setLoading,
  setSubmitted,
  setSuccess,
}) {
  const {
    watch,
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  React.useEffect(() => {
    const subscription = watch((value, { name, type }) =>
      console.log(value, name, type)
    )
    return () => subscription.unsubscribe()
  }, [watch])

  const onSubmit = async (data) => {
    setSubmitted(true)
    setLoading(true)
    await sendDatatoServer(data)
    // Warum wird hier nicht gewartet bis die Daten da sind?
  }

  const sendDatatoServer = async (data) => {
    let datanew = new FormData()

    try {
      datanew.append("file", data.picture1[0])
      datanew.append("file", data.picture2[0])
      datanew.append("file", data.picture3[0])
      datanew.append("file", data.picture4[0])
      datanew.append("file", data.picture5[0])
      datanew.append("file", data.picture6[0])
      datanew.append("file", data.picture7[0])
      datanew.append("file", data.picture8[0])
      datanew.append("file", data.picture9[0])
      datanew.append("file", data.picture10[0])
      datanew.append("file", data.picture11[0])
      datanew.append("file", data.picture12[0])
      datanew.append("file", data.picture13[0])
      datanew.append("file", data.picture14[0])
      datanew.append("file", data.picture15[0])
      datanew.append("file", data.picture16[0])
      datanew.append("file", data.picture17[0])
      datanew.append("file", data.picture18[0])
      datanew.append("file", data.picture19[0])
      datanew.append("file", data.picture20[0])
    } catch (e) {
      console.log("Es waren nicht alle 20 Bilder")
    }

    console.log("hier stehen die Files drin", datanew.getAll("file"))

    axios
      .post("https://backend.uber.space/upload", datanew, {
        // receive two parameter endpoint url ,form data
      })
      .then((res) => {
        console.log("Bild wurde hochgeladen unter dem Link: ", res.data)

        sendFormtoDB(data, res.data)
        return res.data
      })
  }

  const sendFormtoDB = async (data, server_links) => {
    console.log("server_links", server_links)
    const path = "https://backend.uber.space/files/"
    const options = {
      method: "POST",
      url: "https://api.airtable.com/v0/appEpNZcaV5uiHvi6/Sandbox",
      data: {
        records: [
          {
            fields: {
              "E-Mail": data.email,
              Vorname: data.firstname,
              Nachname: data.lastname,

              "1. Artikel: Artikelbezeichnung": data.title1,
              "1. Marke": data.brand1,
              "1. Artikel: Fotos hochladen": [
                {
                  url: path + server_links[0]?.filename,
                  filename: "picture.jpg",
                },
              ],

              "2. Artikel: Artikelbezeichnung": data.title2,
              "2. Marke": data.brand2,
              "2. Artikel: Fotos hochladen": [
                {
                  url: path + server_links[1]?.filename,
                  filename: "picture.jpg",
                },
              ],

              "3. Artikel: Artikelbezeichnung": data.title3,
              "3. Marke": data.brand3,
              "3. Artikel: Fotos hochladen": [
                {
                  url: path + server_links[2]?.filename,
                  filename: "picture.jpg",
                },
              ],

              "4. Artikel: Artikelbezeichnung": data.title4,
              "4. Marke": data.brand4,
              "4. Artikel: Fotos hochladen": [
                {
                  url: path + server_links[3]?.filename,
                  filename: "picture.jpg",
                },
              ],

              "5. Artikel: Artikelbezeichnung": data.title5,
              "5. Marke": data.brand5,
              "5. Artikel: Fotos hochladen": [
                {
                  url: path + server_links[4]?.filename,
                  filename: "picture.jpg",
                },
              ],

              "6. Artikel: Artikelbezeichnung": data.title6,
              "6. Marke": data.brand6,
              "6. Artikel: Fotos hochladen": [
                {
                  url: path + server_links[5]?.filename,
                  filename: "picture.jpg",
                },
              ],

              "7. Artikel: Artikelbezeichnung": data.title7,
              "7. Marke": data.brand7,
              "7. Artikel: Fotos hochladen": [
                {
                  url: path + server_links[6]?.filename,
                  filename: "picture.jpg",
                },
              ],

              "8. Artikel: Artikelbezeichnung": data.title8,
              "8. Marke": data.brand8,
              "8. Artikel: Fotos hochladen": [
                {
                  url: path + server_links[7]?.filename,
                  filename: "picture.jpg",
                },
              ],

              "9. Artikel: Artikelbezeichnung": data.title9,
              "9. Marke": data.brand9,
              "9. Artikel: Fotos hochladen": [
                {
                  url: path + server_links[8]?.filename,
                  filename: "picture.jpg",
                },
              ],

              "10. Artikel: Artikelbezeichnung": data.title10,
              "10. Marke": data.brand10,
              "10. Artikel: Fotos hochladen": [
                {
                  url: path + server_links[9]?.filename,
                  filename: "picture.jpg",
                },
              ],

              "11. Artikel: Artikelbezeichnung": data.title11,
              "11. Marke": data.brand11,
              "11. Artikel: Fotos hochladen": [
                {
                  url: path + server_links[10]?.filename,
                  filename: "picture.jpg",
                },
              ],

              "12. Artikel: Artikelbezeichnung": data.title12,
              "12. Marke": data.brand12,
              "12. Artikel: Fotos hochladen": [
                {
                  url: path + server_links[11]?.filename,
                  filename: "picture.jpg",
                },
              ],

              "13. Artikel: Artikelbezeichnung": data.title13,
              "13. Marke": data.brand13,
              "13. Artikel: Fotos hochladen": [
                {
                  url: path + server_links[12]?.filename,
                  filename: "picture.jpg",
                },
              ],

              "14. Artikel: Artikelbezeichnung": data.title14,
              "14. Marke": data.brand14,
              "14. Artikel: Fotos hochladen": [
                {
                  url: path + server_links[13]?.filename,
                  filename: "picture.jpg",
                },
              ],

              "15. Artikel: Artikelbezeichnung": data.title15,
              "15. Marke": data.brand15,
              "15. Artikel: Fotos hochladen": [
                {
                  url: path + server_links[14]?.filename,
                  filename: "picture.jpg",
                },
              ],

              "16. Artikel: Artikelbezeichnung": data.title16,
              "16. Marke": data.brand16,
              "16. Artikel: Fotos hochladen": [
                {
                  url: path + server_links[15]?.filename,
                  filename: "picture.jpg",
                },
              ],

              "17. Artikel: Artikelbezeichnung": data.title17,
              "17. Marke": data.brand17,
              "17. Artikel: Fotos hochladen": [
                {
                  url: path + server_links[16]?.filename,
                  filename: "picture.jpg",
                },
              ],

              "18. Artikel: Artikelbezeichnung": data.title18,
              "18. Marke": data.brand18,
              "18. Artikel: Fotos hochladen": [
                {
                  url: path + server_links[17]?.filename,
                  filename: "picture.jpg",
                },
              ],

              "19. Artikel: Artikelbezeichnung": data.title19,
              "19. Marke": data.brand19,
              "19. Artikel: Fotos hochladen": [
                {
                  url: path + server_links[18]?.filename,
                  filename: "picture.jpg",
                },
              ],

              "20. Artikel: Artikelbezeichnung": data.title20,
              "20. Marke": data.brand20,
              "20. Artikel: Fotos hochladen": [
                {
                  url: path + server_links[19]?.filename,
                  filename: "picture.jpg",
                },
              ],
            },
          },
        ],
      },
      headers: { Authorization: "Bearer " + KEY_P },
    }

    const results = await axios.request(options)
    if (results.status === 200) {
      setSuccess(true)
    } else {
      setSuccess(false)
    }
    console.log("RESULTS", results)

    setLoading(false)
    return results.data
  }

  // Hallo Vinzenz. Glaubst du Elon Musk würde mich dafür befördern?
  let articles_loop = []
  for (let i = 1; i <= 20 - 1; i++) {
    articles_loop.push(i)
  }

  return (
    <>
      <div className="w-10/12 lg:w-9/12 sm:grid ">
        <h1 className="text-2xl lg:text-3xl font-semibold text-center mt-5 mb-6 lg:mb-5">
          Verkaufen
        </h1>

        <div className="lg:border rounded-2xl lg:p-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <ArticleUpload
              number={1}
              register={register}
              watch={watch}
              reset={reset}
            />

            <div className="pb-10">
              <p className="text-lg font-medium">Kontaktdaten</p>

              {/* Das geht irgendwie nicht */}

              <div class="relative mt-2">
                <input
                  type="text"
                  id="firstname"
                  class="w-full outline-none mt-1 rounded-xl border focus:border-primary px-4 pb-2.5 pt-6 peer"
                  {...register("firstname", {
                    required: true,
                    maxLength: 80,
                  })}
                  placeholder=" "
                />
                <label
                  for="firstname"
                  class="absolute text-base text-gray-400 duration-300 transform -translate-y-4 scale-75 top-7 z-10 origin-[0] left-4  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Vorname
                </label>
              </div>

              <div class="relative mt-2">
                <input
                  type="text"
                  id="lastname"
                  class="w-full outline-none mt-1 rounded-xl border focus:border-primary px-4 pb-2.5 pt-6 peer"
                  {...register("lastname", {
                    required: true,
                    maxLength: 80,
                  })}
                  placeholder=" "
                />
                <label
                  for="lastname"
                  class="absolute text-base text-gray-400 duration-300 transform -translate-y-4 scale-75 top-7 z-10 origin-[0] left-4  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Nachname
                </label>
              </div>

              <div class="relative mt-2">
                <input
                  type="text"
                  class="w-full outline-none mt-1 rounded-xl border focus:border-primary px-4 pb-2.5 pt-6 peer"
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  placeholder=" "
                />
                <label class="absolute text-base text-gray-400 duration-300 transform -translate-y-4 scale-75 top-7 z-10 origin-[0] left-4  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1 peer-focus:scale-75 peer-focus:-translate-y-4">
                  E-Mail
                </label>
              </div>

              {errors.email && (
                <span className="text-sm font-medium text-red-600">
                  Mit der E-Mail Adresse scheint etwas nicht zu stimmen.
                </span>
              )}
              <p id="floating_helper_text" class="text-xs text-gray-800 mt-3">
                Wir benötigen diese Angaben um dir das Angebot per Mail zu
                senden.
              </p>
            </div>

            {articles_loop.map((num) => (
              <div>
                {watch("picture" + num)?.length === 1 && (
                  <ArticleUpload
                    number={num + 1}
                    register={register}
                    watch={watch}
                    reset={reset}
                  />
                )}
              </div>
            ))}

            {watch("picture1")?.length !== 1 && (
              <div class="flex p-4 mb-4 text-sm bg-secondary rounded-xl mt-5">
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 inline w-5 h-5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Info</span>
                <div>
                  Sobald ein Artikel vollständig ausgefüllt wurde, erscheinen
                  hier weitere Artikel.
                </div>
              </div>
            )}

            <button
              type="submit"
              className="hover:shadow-md w-full h-14 hover:shadow-gray-400 transition-all bg-primary py-3 text-white rounded-xl mr-10 mt-10 mb-10"
            >
              Artikel hochladen
            </button>
          </form>
        </div>

        <br />
        <br />
      </div>
    </>
  )
}
