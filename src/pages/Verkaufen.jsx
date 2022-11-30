import React from "react"

import Footer from "../components/Footer"
import Nav from "../components/Nav"
import ArticleUpload from "../components/Article_Upload"

import { ReactComponent as IconPlus } from "./plus.svg"
import { ReactComponent as IconX } from "./x.svg"

import axios from "axios"

import { useForm } from "react-hook-form"

const KEY_P = process.env.REACT_APP_KEY_P

const sendFormtoDB = async (data, server_links) => {
  console.log(server_links)
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
            "bild1 text": server_links[0].path,
            "1. Artikel: Artikelbezeichnung": data.title1,
            "1. Marke": data.brand1,
            "1. Artikel: Fotos hochladen": [
              {
                url: "link",
                filename: "33823_3_xl.jpg",
              },
            ],
            "bild2 text": server_links[0].path,
            "2. Artikel: Artikelbezeichnung": data.title2,
            "2. Marke": data.brand2,
          },
        },
      ],
    },
    headers: { Authorization: "Bearer " + KEY_P },
  }

  const results = await axios.request(options)

  console.log("RESULTS", results)

  return results.data
}

export default function Verkaufen() {
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
    const server_links = await sendDatatoServer(data)
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

  // Hallo Vinzenz. Glaubst du Elon Musk würde mich dafür befördern?
  let articles_loop = []
  for (let i = 1; i <= 20 - 1; i++) {
    articles_loop.push(i)
  }

  return (
    <>
      <div className="flex flex-col items-center ">
        <Nav />
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

              <div className=" pb-10">
                <p className="text-lg font-medium">
                  Wohin senden wir das Angebot?
                </p>

                <div className="grid grid-cols-2 gap-3 mt-2">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Vorname</p>
                    <input
                      type="text"
                      className="w-full p-3 bg-gray-100 outline-none mt-1 rounded-md"
                      {...register("firstname", {
                        required: true,
                        maxLength: 80,
                      })}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Nachname
                    </p>
                    <input
                      type="text"
                      className="w-full p-3 bg-gray-100 outline-none mt-1 rounded-md"
                      {...register("lastname", {
                        required: true,
                        maxLength: 80,
                      })}
                    />
                  </div>
                </div>

                <p className="mt-4 text-sm font-medium text-gray-600">E-Mail</p>
                <input
                  type="text"
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  className={
                    errors.email
                      ? "w-full p-3 bg-gray-100 outline-none mt-1 rounded-md border-2 border-red-600"
                      : "w-full p-3 bg-gray-100 outline-none mt-1 rounded-md"
                  }
                />
              </div>

              {errors.email && (
                <span className="text-sm font-medium text-red-600">
                  Mit der E-Mail Adresse scheint etwas nicht zu stimmen.
                </span>
              )}

              {articles_loop.map((num) => (
                <div>
                  {watch("brand" + num) && (
                    <ArticleUpload
                      number={num + 1}
                      register={register}
                      watch={watch}
                      reset={reset}
                    />
                  )}
                </div>
              ))}

              <button
                type="submit"
                className="hover:shadow-md w-full hover:shadow-gray-400 transition-all bg-primary py-3 text-white rounded-full mr-10 mt-20"
              >
                Artikel hochladen
              </button>
            </form>
          </div>

          <br />
          <br />
        </div>
        <Footer />
      </div>
    </>
  )
}
