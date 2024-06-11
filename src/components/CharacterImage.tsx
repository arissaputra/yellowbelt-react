interface CharacterImage {
  imageURL?: string;
}

const CharacterImage = ({ imageURL }: CharacterImage) => {
  const defaultImageURL = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png";

  return (
    <img src={imageURL || defaultImageURL} alt={imageURL} className="max-h-80"/>
  )
}

export default CharacterImage