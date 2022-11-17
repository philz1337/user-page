import React from "react"
import ImageUploading from "react-images-uploading"

import Footer from "../components/Footer"
import Nav from "../components/Nav"

import { ReactComponent as IconPlus } from "./plus.svg"
import { ReactComponent as IconX } from "./x.svg"

export default function Verkaufen() {
  const [images, setImages] = React.useState([])
  const maxNumber = 69

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex)
    setImages(imageList)
  }

  return (
    <>
      <div className="flex flex-col items-center">
        <Nav />
        <div className="w-10/12 lg:w-9/12 sm:grid sm:grid-cols-2 ">
          <h1 className="text-2xl lg:text-3xl font-semibold text-center mt-5 mb-6 lg:mb-5">
            Verkaufen
          </h1>
          <div className="lg:border rounded-2xl">
            <h1 className="text-xl font-semibold">Dein erster Artikel</h1>
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
              placeholder="Adidas"
              className="w-full p-3 bg-gray-100 outline-none mt-1 rounded-md"
            />
            <p className="mt-4 text-sm font-medium text-gray-600">
              Artikelbezeichnung
            </p>
            <input
              type="text"
              placeholder="Winterjacke"
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
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Nachname</p>
                  <input
                    type="text"
                    className="w-full p-3 bg-gray-100 outline-none mt-1 rounded-md"
                  />
                </div>
              </div>
              <p className="mt-4 text-sm font-medium text-gray-600">E-Mail</p>
              <input
                type="text"
                className="w-full p-3 bg-gray-100 outline-none mt-1 rounded-md"
              />
            </div>
            <div className="grid grid-cols-2 gap-3 mt-6">
              <button className="hover:shadow-md w-full hover:shadow-gray-400 transition-all bg-primary py-3 text-white rounded-full mr-10">
                Weitere Artikel
              </button>
              <button className="hover:shadow-md w-full hover:shadow-gray-400 transition-all bg-primary py-3 text-white rounded-full mr-10">
                Abschicken
              </button>
            </div>
          </div>
          <br />
          <br />
        </div>
        <Footer />
      </div>
    </>
  )
}
