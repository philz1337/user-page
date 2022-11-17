import React from "react"
import ImageUploading from "react-images-uploading"
import { ReactComponent as IconPlus } from "../pages/plus.svg"
import { ReactComponent as IconX } from "../pages/x.svg"

import { useForm } from "react-hook-form"

export default function ArticleUpload(images, onChange, maxNumber) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <div className="mt-10">
      <h1 className="text-xl font-semibold">2. Artikel</h1>
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
                    <IconPlus stroke="#FFFFFF" className="h-24 w-24 " alt="" />
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
        {...register("brand2", {
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
    </div>
  )
}
