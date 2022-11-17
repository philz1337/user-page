import React from "react"
import ImageUploading from "react-images-uploading"

import Footer from "../components/Footer"
import Nav from "../components/Nav"

import { ReactComponent as IconPlus } from "./plus.svg"
import { ReactComponent as IconX } from "./x.svg"

import axios from "axios"

import { useForm } from "react-hook-form"

const KEY_P = process.env.REACT_APP_KEY_P

const sendFormtoDB = async (data, images) => {
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
            "1. Artikel: Artikelbezeichnung": data.title,
            "1. Marke": data.brand,
            "1. Artikel: Fotos hochladen": [
              {
                url: "link",
                filename: "33823_3_xl.jpg",
              },
            ],
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
  const [images, setImages] = React.useState([])
  const maxNumber = 69

  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex)
    setImages(imageList)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    console.log("errors", errors)
    sendFormtoDB(data, images)
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
            <h1 className="text-xl font-semibold">Dein erster Artikel</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
              <p className="mt-4 text-sm font-medium text-gray-600">Foto</p>

              <div className="grid place-items-center">
                <div className="App">
                  <ImageUploading
                    multiple
                    value={images}
                    onChange={onChange}
                    maxNumber={maxNumber}
                    dataURLKey="data_url"
                  >
                    {({
                      imageList,
                      onImageUpload,
                      onImageRemoveAll,
                      onImageUpdate,
                      onImageRemove,
                      isDragging,
                      dragProps,
                    }) => (
                      // write your building UI
                      <div>
                        {!imageList[0] && (
                          <button
                            onClick={onImageUpload}
                            {...dragProps}
                            className="hover:shadow-md hover:shadow-gray-400 transition-all bg-primary rounded-2xl text-white grid place-items-center h-32 w-32"
                          >
                            <IconPlus
                              stroke="#FFFFFF"
                              className="h-24 w-24 "
                              alt=""
                            />
                          </button>
                        )}
                        {imageList[0] && (
                          <div className="relative h-32 w-32 border-2 hover:shadow-md hover:shadow-gray-400 hover:border-primary bg-gray-100 rounded-2xl">
                            <img
                              src={imageList[0]["data_url"]}
                              alt=""
                              className="w-full h-full object-contain absolute z-10 rounded-2xl"
                            />
                            <div className="grid place-content-end p-0.5">
                              <button
                                onClick={() => onImageRemove(0)}
                                className="hover:shadow-md hover:shadow-gray-400 transition-all bg-gray-100 rounded-full text-gray-600 grid place-items-center h-6 w-6 z-20"
                              >
                                <IconX className="h-5 w-5 " alt="" />
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </ImageUploading>
                </div>
              </div>

              <p className="mt-4 text-sm font-medium text-gray-600">Marke</p>
              <input
                type="text"
                {...register("brand", {
                  required: true,
                  min: 1,
                  maxLength: 50,
                })}
                placeholder="Adidas"
                className="w-full p-3 bg-gray-100 outline-none mt-1 rounded-md"
              />
              <p className="mt-4 text-sm font-medium text-gray-600">
                Artikelbezeichnung
              </p>
              <input
                type="text"
                placeholder="Winterjacke"
                {...register("title", { required: true, maxLength: 100 })}
                className="w-full p-3 bg-gray-100 outline-none mt-1 rounded-md"
              />
              <div className="pt-10">
                <p className="mt-5 text-lg font-medium">
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
                  className="w-full p-3 bg-gray-100 outline-none mt-1 rounded-md"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 mt-6">
                <button className="hover:shadow-md w-full hover:shadow-gray-400 transition-all bg-primary py-3 text-white rounded-full mr-10">
                  Weitere Artikel
                </button>
                <button
                  type="submit"
                  className="hover:shadow-md w-full hover:shadow-gray-400 transition-all bg-primary py-3 text-white rounded-full mr-10"
                >
                  Abschicken
                </button>
              </div>
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
