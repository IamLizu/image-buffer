# image-buffer

Converts binary buffer into base64 image. Usually helpful displaying images from the database (saved as buffer) in your front-end applications.

## Usage

At first, install it from npm with `npm i @iamlizu/image-buffer` and import the package.

```
import imageBuffer from "@iamlizu/image-buffer";
```

`imageBuffer` method takes two input, first one is the binary buffer and the second one is the content-type of the image.

```
imageBuffer(image.buffer, image.contentType)
```

## Contributing

Fork the repository at GitHub, create a new branch, make your improvements, and finally submit a pull request.
