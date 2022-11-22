import React from "react"
import ImageUploading from "react-images-uploading"

import Footer from "../components/Footer"
import Nav from "../components/Nav"
import ArticleUpload from "../components/Article_Upload"

import { ReactComponent as IconPlus } from "./plus.svg"
import { ReactComponent as IconX } from "./x.svg"

import axios from "axios"

import { useForm } from "react-hook-form"

const KEY_P = process.env.REACT_APP_KEY_P

const sendPicture = async (images) => {
  const example = {
    picture:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII=",
  }

  console.log("Das wird als Bild verwendet: ", example)
  axios.post("http://localhost:5000/upload/image", example).then((res) => {
    // then print response status
    console.log(res.statusText)
    console.log(res)
  })
}

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
    console.log("Bilder", imageList, addUpdateIndex)
    setImages(imageList)
  }

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log("data", data)
    console.log("errors", errors)
    console.log("ich bin hier")
    sendPicture(images)
    sendFormtoDB(data, images)
  }

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
                {...register("brand1", {
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
                {...register("title1", { required: true, maxLength: 100 })}
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
                  {watch("title" + num) && watch("brand" + num) && (
                    <ArticleUpload
                      number={num + 1}
                      register={register}
                      images={images}
                      onChange={onChange}
                      maxNumber={maxNumber}
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
